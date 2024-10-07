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
} from "../../Generic/ScriptGEneric/apiConnection.js";

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

function DesConcatTags(tags) {

  const listtag = tags.split(',')
  return listtag
}

async function inyeccionPublic() {
  const publication = await get(UrlPublication);
  const padre = document.getElementById("ViewCenter_review");
  limpieza();
  
  let conta=0
  await publication.forEach((publi) => {
    const {
      id,
      titulo,
      url_img,
      enum_estado,
      descripcion,
      fecha_publicacion,
      etiquetas,
      user_id,
    } = publi;
  
  const listtags= DesConcatTags(etiquetas)
    
    const fechaMod= fecha_publicacion.slice(0,10)

    const hijo = document.createElement("div");
    hijo.className = "pending_publication"
    console.log(enum_estado);
    if (enum_estado == "PENDIENTE") {
      const publicHtml = `
                <div class="contentPending_img">
                    <img src="${url_img}" alt="">
                </div>
    
                <div class="contentPending_center">
                    <div class="contentPending_centerLeft">
                    <label class="pubPending_titulo">${titulo}</label>  
                    <label class="pubPending_descrip">${descripcion}</label>
                    </div>
                    <div class="contentPending_centerRight">
                      <button class="btnDetailsPub" id="btnDetailsPub${conta}" >Etiquetas</button>
                      <li class="etiPub" id="etiPub${conta}" >
                      
                     </li>
              
                      <button class="btnDenegPub" id="btnDenegPub${conta}" value="${id}">Denegar</button>
                      <button class="btnAcceptPub" id="btnAcceptPub${conta}" value="${id}" >Aceptar</button>
                    </div>
                </div>
                
                <div class="contentPending_end">
                    <label class="pubPending_name">👤 ${user_id.name}</label>
                    <label class="pubPending_date">📅 ${fechaMod}</label>
                </div>
        `;
        
        
      let contetags;
      hijo.innerHTML = publicHtml;
      padre.appendChild(hijo);
      listtags.forEach(tag=>{
        const hijo=document.createElement("label")
        hijo.className="tags_review"
        hijo.textContent = `${tag}`
        contetags = document.getElementById(`etiPub${conta}`)
        contetags.appendChild(hijo);
      })
      const btnDetailsPub = document.getElementById(`btnDetailsPub${conta}`);
       const btnDenegPub = document.getElementById(`btnDenegPub${conta}`);
       const btnAcceptPub = document.getElementById(`btnAcceptPub${conta}`);
       let clickCo=0;
      btnDetailsPub.addEventListener("click", () => {
       
        if (clickCo===0) {
       contetags.style.display = "flex";
       btnDenegPub.style.display = "none";
       btnAcceptPub.style.display = "none";
      clickCo++;  
      }else if(clickCo==1){
        contetags.style.display = "none";
        btnDenegPub.style.display = "block";
        btnAcceptPub.style.display = "block";
        clickCo=0;
      }

      });

      

    conta++;
      //14
    }

  });

  const tagAprobar = document.querySelectorAll(".btnAcceptPub");
  const btnDenegPub = document.querySelectorAll(".btnDenegPub");
  btnDenegPub.forEach(dene=>{
    dene.addEventListener("click", () => {
      console.log("denegado");
      DenegarLugar(dene.value);
    });
  })

  tagAprobar.forEach((aprobar) => {
    aprobar.addEventListener("click", () => {
      console.log("aprobado");
      aprobarlugar(aprobar.value);
     
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

async function DenegarLugar(id_public){
  const publicaciones = await get(UrlPublication);
  publicaciones.forEach(async (publication) => {
    const { id, user_id } = publication;

    if (id==id_public){
        let confirmar = confirm("Deseas denegar esta publicacion?");
        if (confirmar == true) {
          const newPublib={
            titulo: publication.titulo,
            descripcion: publication.descripcion,
            etiquetas: publication.etiquetas,
            url_img: publication.url_img,
            place: publication.place,
            user_id: user_id.id,
            enum_estado:"RECHAZADO",
          }
     
          await update(UrlPublication+`/${id_public}`,newPublib)
          inyeccionPublic()
        }
    }
})
}

async function aprobarlugar(id_public) {
    const publicaciones = await get(UrlPublication);
    publicaciones.forEach(async (publication) => {
    const { id, user_id } = publication;

    console.log(id, id_public);
    if (id == id_public) {
  let confirmar = confirm("Deseas aprobar esta publicacion?");

    if (confirmar == true) {
        const newPublib={
          titulo: publication.titulo,
          descripcion: publication.descripcion,
          etiquetas: publication.etiquetas,
          url_img: publication.url_img,
          place: publication.place,
          user_id: user_id.id,
          enum_estado:"APROBADO",
        }


        await rellenar(publication) 
  console.log("id"+ id_public + "nuevo estado", newPublib);
        await update(UrlPublication+`/${id_public}`,newPublib)

        await post(UrlPost , postear)
        inyeccionPublic()
      } else {
        console.log("lugar no aprobado");
      }
    }
  });
}



//14
