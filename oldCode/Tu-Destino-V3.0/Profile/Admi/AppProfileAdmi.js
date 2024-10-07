// importacion del URL del metodo get para lugares
// 8
import {
  UrlPlace,
  get,
  post,
  deleteHttp,
  UrlUser,
  update,
} from "../../Generic/ScriptGEneric/apiConnection.js";

//  Html selectors
const labeles = document.querySelectorAll(".infoV");
const inputs = document.querySelectorAll(".update");
const btnSummit = document.getElementById("BtnSummit");
const btnEdit = document.getElementById("BtnUpdate");
const Iname = document.getElementById("IName");
const IEmail = document.getElementById("IEmail");
const IPass = document.getElementById("IPass");
const LName = document.querySelector(".LName");
const LEmail = document.querySelector(".LEmail");
const infoVe=document.querySelector(".infoVe")
const texP= document.querySelector(".texP");
;const searchUser = document.getElementById("searchUser");
const btnSearch = document.getElementById("btnSearch");
const btnCreateLugar = document.getElementById("create_place"); //6
const formulario = document.getElementById("CVA5"); //6
const principal = document.getElementById("CVA4"); // 6
const cancelar = document.getElementById("btnPlace_cancel"); //7

//Events
btnEdit.addEventListener("click", () => {
  labeles.forEach((labe) => {
    labe.style.display = "none";
  });
  btnEdit.style.display = "none";
  inputs.forEach((ite) => {
    ite.style.display = "flex";
  });
  btnSummit.style.display = "block";
});

const admi = {
  id:"",
  name: "",
  email: "",
  password: "",
  enum_rol: "",
};
const admiNest={
  username: "",
  email: "",
  password: "",
}
async function extraerUser(){
  const users = await get(UrlUser)
  const userlogin=JSON.parse(localStorage.getItem('user'));
 
  users.forEach(user=>{
    const {email,name,password,enum_rol}=user;
   
    if(email==userlogin.email){
      console.log(user);
      LName.innerHTML=name;
      LEmail.innerHTML=email;
      texP.textContent=name;
      Iname.value=name;
      IEmail.value=email;
     
      
      admi.id=userlogin.id
      admi.enum_rol=enum_rol;
      if(enum_rol=="admin"){
        infoVe.innerHTML="Administrador"
      }
    }
  })

}
// ocultar el formulario por defecto

// 8
document.addEventListener(`DOMContentLoaded`, async () => {
  formulario.style.display = "none";
});
await extraerLugar();
await extraerUser()

const search = {
  user: "",
};


async function updateNest (url,info){
  let isPost= false;
  const token = localStorage.getItem('token');
  try {
      const response = await  fetch(url,{
          method: "PATH",
          headers: {
              "Content-Type":"application/json",
        //      "Authorization":`Bearer ${token}` ,
          },
          body: JSON.stringify(info),
      });
      const data = response.json();
      if(data.status=="BAD_REQUEST"){
          isPost= false;
          console.log(data);
          }else{
          isPost=true;
          console.log(await data);
          }
  } catch (error) {
      console.error(error);
  }
  return isPost
}


btnSummit.addEventListener("click",async () => {
  admi.name = Iname.value;
  admi.email = IEmail.value;
  admi.password = IPass.value;
  admiNest.username = Iname.value;
  admiNest.email = IEmail.value;
  admiNest.password =  IPass.value;
  btnSummit.style.display = "none";
  inputs.forEach((ite) => {
    ite.style.display = "none";
  });

  labeles.forEach((labe) => {
    labe.style.display = "block";
  });
  btnEdit.style.display = "block";
  console.log(admi);
  console.log(admiNest);
  console.log("http://localhost:3000/v1/api/users"+ `/${admi.id}`);
  if(await updateNest("http://localhost:3000/v1/api/users"+ `/${admi.id}`,admiNest ==true)){
      if (await update(UrlUser,admi)==true){ {
          await extraerUser()

      }
    }
  }
  
});

btnSearch.addEventListener("click", () => {
  search.user = searchUser.value;
  searchUser.value = "";
  console.log(search);
});

// Funcion boton crear lugar
// 6
btnCreateLugar.addEventListener("click", () => {
  principal.style.display = "none";
  formulario.style.display = "flex";
  console.log("boton");
});

//funcion para regresar
// 7
cancelar.addEventListener("click", () => {
  principal.style.display = "flex";
  formulario.style.display = "none";
});

// 11
// limpieza
function limpieza(){
  const contenedor = document.getElementById("listPlace");
  contenedor.innerHTML = "";
}

// inyeccion de lugares para admin
// 8
async function extraerLugar() {
  const lugares = await get(UrlPlace);
  const padre = document.getElementById("listPlace");
  limpieza();

  await lugares.forEach((lugar) => {
    const { titulo, id } = lugar;
    const hijo = document.createElement("p");
    const lugartHtml = `
    <div class="public">
    <div>
      <div class="infoPlaceT infoPublic">
        <label class="infoPlace_name infoplace_name">${titulo}</label>
        <label class="infoPlace_text "> Id: ${id}</label>
      </div>
    </div>

    <div>
      <label class="infoPlaceD infoPublic"
        ><button class="btnPlaces_datils" value="${id}">
         Ver Detalles🖋️
        </button></label
      >
      <div class="btnUser">
        <button class="btnDelete_place" value="${id}">🗑️</button>

      </div>
    </div>
  </div>
  `;
    hijo.innerHTML = lugartHtml;
    padre.appendChild(hijo);

    //10
    const tagBorrar = document.querySelectorAll(".btnDelete_place");

    tagBorrar.forEach((borrar) => {
      borrar.addEventListener("click", () => {
        console.log("entro al boton");
        eliminarLugar(borrar.value);
        console.log("value" + borrar.value);
      });
    });
  });
}

// 9
// editado
const editar = document.querySelectorAll(".btnPlaces_datils");

async function extraerLocal(id_lugar) {
  const lugares = await get(UrlPlace);
  lugares.forEach((lugar) => {
    const { id } = lugar;
    if (id == id_lugar) {
      console.log(lugar);
      localStorage.setItem("LugarEdict", JSON.stringify(lugar));
      window.location.href = "../../Details/Admi/MasDetalles.html";
    }
  });
}

editar.forEach((local) => {
  local.addEventListener("click", () => {
    extraerLocal(local.value);
  });
});

// 10
// borrado
async function eliminarLugar(id_lugar) {
  const lugares = await get(UrlPlace);
  lugares.forEach(async (lugar) => {
    const { id } = lugar;

    if (id == id_lugar) {
      let confirmacion = confirm("Seguro de que deseas eliminar este lugar?");
      if (confirmacion == true) {
        await deleteHttp(UrlPlace + `/${id_lugar}`)
        await extraerLugar()
        console.log("lugar eliminado");
      } else {
        console.log("lugar no eliminado");
      }
    }
  });
}

// 11
// el boton de editar queda pendiente pues falta la vista

// 12
// Vista del formulario para crear


// Selectores
const nombreLugar = document.getElementById("CPI_title");
const descripcionLugar = document.getElementById("CPI_description");
const infolLugar = document.getElementById("CPI_info");
const telefonoLugar = document.getElementById("CPI_phone");
const tipoLugar = document.getElementById("CPI_tipo");
const direccionLugar = document.getElementById("CPI_address");
const horarioLugar = document.getElementById("CPI_schedule");
const webLugar = document.getElementById("CPI_linkWeb");
const precioLugar = document.getElementById("CPI_price");
const urlLugar = document.getElementById("CPI_url");
const btnGuardar = document.getElementById("load_place");

// objeto vacio
var newLugar = {};

async function create() {
  newLugar = {
    enum_tipo: tipoLugar.value,
    titulo: nombreLugar.value,
    detalles: descripcionLugar.value,
    precio: precioLugar.value,
    horario: horarioLugar.value,
    direccion: direccionLugar.value,
    link_direccion: "",
    vr: "",
    web: webLugar.value,
    telefono: telefonoLugar.value,
    puntuacion: 0,
    info: infolLugar.value,
    btn_url: urlLugar.value,
  };

  return newLugar;
}

btnGuardar.addEventListener("click", async () => {
  await subir(await create());
  console.log(newLugar);
});

async function subir(newLugar) {
  const lugares = await post(UrlPlace, newLugar);

  if (lugares == true) {
    alert("el lugar ha sido creado exitosamente");
    window.location.href = "profileView.html"
  } else {
    alert("verifica los campos antes de subir");
  }
}
