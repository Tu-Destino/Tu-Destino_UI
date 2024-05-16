// Selectors
import{UrlPlace, get} from "../pruebas/jsonPruebas/apiConnection.js"
import { ocultar_buscador } from "./AppDecubrir.js";
const boxSearch =document.getElementById("box-search");



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
const tags = document.querySelectorAll(".post_Tags");
const btnSave =document.getElementById("post_Save");
console.log(tags);
let listTags= new Array();


const post={
  titulo:"",
  descripcion:"",
  etiquetas:"",
  urlImg:"",

}


options.forEach(option => {
  option.addEventListener("click", ()=>{
    inputSearch.value=option.value;
    inputSearch.placeholder=option.value;
    post.titulo=option.value;
    ocultar_buscador()
  })
})



tags.forEach(tag=>{
  tag.addEventListener("click",()=>{
   
    if (!listTags.includes(tag.value)){ 
    console.log(tag.value);
    listTags.push(tag.value);
    console.log(listTags);
      tag.style.background="red"
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

btnSave.addEventListener("click", ()=>{
  post.etiquetas=listTags.toString()
  console.log(post);
})