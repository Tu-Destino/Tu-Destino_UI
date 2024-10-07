// importacion del URL del metodo get para lugares
// 8
import {
  get,
  update,
  UrlPublication,
  UrlUser,
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
const viewAdmi1 = document.getElementById("viewAdmi1");
const CVA1 = document.getElementById("CVA1");
const viewAdmi2 = document.getElementById("viewAdmi2");
const CVA2 = document.getElementById("CVA2");
const SignOff =document.getElementById("SignOff");
//Events


SignOff.addEventListener("click",()=>{
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.href = "../../../index.html";
})
viewAdmi1.addEventListener("click",() => {
  CVA1.style.display="flex";
  CVA2.style.display="none";
});

viewAdmi2.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="flex";
});


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
      if(enum_rol=="user"){
        infoVe.innerHTML="Usuario:"
      }
    }
  })

}
await extraerUser()
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
  if(await update("http://localhost:3000/v1/api/users"+ `/${admi.id}`,admiNest ==true)){
      if (await update(UrlUser,admi)==true){ {
          await extraerUser()
      }
    }
  }
  
});


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
const user_ide="57e4ae21-23ce-4b6c-97be-09a860c010d1"
function DesConcatTags(tags) {

  const listtag = tags.split(',')
  return listtag
}
async function publicacionOfUsers() {
  const publication = await get(UrlPublication);
  let listtag = [];
  publication.forEach(publi=>{
  
    const {user_id} = publi;
    if (user_id.id == user_ide) {
      listtag.push(publi)
    }
  })
  return listtag;
}


async function inyeccionPublic() {
  const publication = await publicacionOfUsers()
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



//14






