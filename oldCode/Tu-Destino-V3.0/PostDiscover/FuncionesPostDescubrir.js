// Selectors

import{UrlPlace, UrlPublication, get,post} from "../Generic/ScriptGEneric/apiConnection.js"
import { ocultar_buscador } from "./AppDecubrir.js";
import { addImg } from "../Generic/ScriptGEneric/upload.js";
const boxSearch =document.getElementById("box-search");


let islogin=true;


async function loadOptionSearch(){
  const places = await get(UrlPlace);
  
  await places.forEach(place => {
    const {titulo}=place;
    const option = document.createElement("li");
    option.classList.add("optSearch");
   const data=`<button class="btnOptSearch" value="${titulo}" ><i class="fas fa-search"></i>${titulo}</button>

   `
   option.innerHTML=data;
    boxSearch.appendChild(option);
  })
}

await loadOptionSearch();
const options = document.querySelectorAll(".btnOptSearch");
const  inputSearch = document.getElementById("inputSearch");
const  textArea = document.getElementById("textArea");
const tags = document.querySelectorAll(".post_Tags");
const btnSave =document.getElementById("post_Save");
const post_img =document.getElementById("post_img");
const imgUpload = document.getElementById("imgUpload");
const storageModal=document.getElementById("storageModal");
const btbModalPost=document.getElementById("btbModalPost");
const btnClosePost=document.getElementById("btnClosePost");
const modalAlert=document.getElementById("modalAlert");
const btnAceptar=document.getElementById("btnAceptar");
const btnCancelar=document.getElementById("btnCancelar");
const modalResuld=document.getElementById("modalResuld");
const btnCerrarResul=document.getElementById("btnCerrarResul");
const TextResult=document.getElementById("TextResult");
const TextResultPe=document.getElementById("TextResultPe");
const post_cancelar=document.getElementById("post_cancelar");

let listTags= new Array();
storageModal.style.display="none";
btbModalPost.addEventListener("click",()=>{
  if (islogin) {
    storageModal.style.display="flex";
  } else {
    modalAlert.style.display="flex";
    btnAceptar.addEventListener("click",()=>{
      modalAlert.style.display="none";
      window.location.href="../Html/Login.html"
    })
    btnCancelar.addEventListener("click",()=>{
      modalAlert.style.display="none";
    })
  }

  
});
btnClosePost.addEventListener("click",()=>{
  storageModal.style.display="none";
});

post_cancelar.addEventListener("click",()=>{
  storageModal.style.display="none";
})

const postear={
  titulo:"",
  descripcion:"",
  etiquetas:"",
  url_img:"",
  place:0,
  user_id:"25239669-e8f2-4594-ba20-e25b18bca2c3",
  enum_estado:"PENDIENTE"
}

async function buscarLugar(nombre){
  const places = await get(UrlPlace);
  let result;
  await places.forEach(place => {
    if(place.titulo == nombre){
      result=place.id;
    }
  })
  return result;
}

options.forEach(option => {
  option.addEventListener("click", async()=>{
    inputSearch.value=option.value;
    inputSearch.placeholder=option.value;
    postear.titulo=option.value;
    postear.place= await buscarLugar(option.value)
    ocultar_buscador()
  })
})



tags.forEach(tag=>{
  tag.addEventListener("click",()=>{
   
    if (!listTags.includes(tag.value)){ 
    console.log(tag.value);
    listTags.push(tag.value);
    console.log(listTags);
      tag.style.background="#bbaedb"
    }else {
      console.log("eliminar");
      
      const result= listTags.filter(tage => tage != tag.value);
      
      for (let index = 0; index = listTags.length; index++) {
        listTags.pop();
        
      }
      listTags=[...result];
      tag.style.background=""
  
   
  }
})})

async function uploadPost(obj) {
  const response = await post(UrlPublication, obj);
  return response;
}

btnSave.addEventListener("click",async  ()=>{
  postear.etiquetas=listTags.toString()
  postear.descripcion=textArea.value;
  postear.url_img=await addImg(post_img);
  const isPost =await uploadPost(postear);
  if (isPost == true) {
    modalResuld.style.display = 'flex';
    TextResult.textContent="Publicación creada..."
    TextResultPe.textContent="En espera de la revisión"
    btnCerrarResul.innerHTML="<a href='ApartadoDescubrir.html'>Cerrar</a>"
  }else{
    modalResuld.style.display = 'flex';
    TextResult.textContent="Publicación no creada..."
    TextResultPe.textContent="Verifique los campos requeridos"
    btnCerrarResul.textContent="Cerrar"
  }   

  
})

btnCerrarResul.addEventListener("click",()=>{
  modalResuld.style.display="none";
  
})
