// importacion de URLs
// 13
import {
  UrlPlace,
  UrlPublication,
  get,
  update,
  post,
  deleteHttp,
  UrlPost,
} from "../jsonPruebas/apiConnection.js";

// funcion de limpieza

function limpieza() {
  const contenedor = document.getElementById("ViewCenter_review");
  contenedor.innerHTML = "";
}

// selector vista revision

const revision = document.getElementById("viewAdmi2");

revision.addEventListener("click", () => {
  inyeccionPublic();
});

async function inyeccionPublic() {
  const publication = await get(UrlPublication);
  const padre = document.getElementById("ViewCenter_review");
  /*limpieza();*/

  await publication.forEach((publi) => {
    const {
      id,
      titulo,
      url_img,
      enum_estado,
      descripcion,
      fecha_publicacion,
      user_id,
    } = publi;
    const hijo = document.createElement("p");
    console.log(enum_estado);
    if (enum_estado == "PENDIENTE") {
      const publicHtml = `
        <div class="pending_publication">
                <div class="contentPending_img">
                    <img src="${url_img}" alt="">
                </div>
    
                <div class="contentPending_center">
                    <div class="contentPending_centerTop">
                    <button type="button" class="btnDetailsPub " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Detalles</button>            
                    <button class="btnDenegPub" value="${id}">Denegar</button>
                    <button class="btnAcceptPub" value="${id}" >Aceptar</button>
                    </div>
                    <div class="contentPending_centerBottom">
                    <label class="pubPending_descrip">${descripcion}</label>
                    <label class="pubPending_titulo">${titulo}</label>
                    </div>
                </div>
                
                <div class="contentPending_end">
                    <label class="pubPending_name">👤 ${user_id.name}</label>
                    <label class="pubPending_date">📅 ${fecha_publicacion}</label>
                </div>
                </div>
        `;
      hijo.innerHTML = publicHtml;
      padre.appendChild(hijo);

      //14
    }
  });

  const tagAprobar = document.querySelectorAll(".btnAcceptPub");

  tagAprobar.forEach((aprobar) => {
    aprobar.addEventListener("click", () => {
      console.log("aprobado");
      aprobarlugar(aprobar.value);
      console.log(aprobar.value);
    });
  });
}

var postear = {
  titulo: "",
  descripcion: "",
  etiquetas: "",
  urlImg: "",
  place: 0,
  user: "",
};

async function rellenar(e) {
  const lugares = await get(UrlPlace);

  lugares.forEach((lugar) => {
    const { titulo } = lugar;
    if (e.titulo == titulo) {
      postear.titulo = e.titulo;
      postear.descripcion = e.descripcion;
      postear.etiquetas = e.etiquetas;
      postear.urlImg = e.url_img;
      postear.place = lugar.id;
      postear.user = e.user_id.id;
    }
  });
}

async function aprobarlugar(id_public) {
    const publicaciones = await get(UrlPublication);
    publicaciones.forEach(async (publication) => {
    const { id, user_id } = publication;

    console.log(id, id_public);
    if (id == id_public) {
  let confirmar = confirm("Deseas aprobar esta publicacion?");

    if (confirmar == true) {
        publication.enum_estado = "APROBADO";

        console.log("nuevo estado", publication);

        await rellenar(publication) 

        await get(UrlPublication+`/${id_public}`,publication)

        await post(UrlPost , postear)

      } else {
        console.log("lugar no aprobado");
      }
    }
  });
}

//14
