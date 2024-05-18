import { UrlComent, UrlPlace, UrlPost, get, update } from "../pruebas/jsonPruebas/apiConnection.js"

//Evento del DOM 
const dom = document.addEventListener(`DOMContentLoaded`,()=>{
    const lugarParse = localStorage.getItem("LugarEdict")
    const lugarSeleccionado= JSON.parse(lugarParse)
    loadContent(lugarSeleccionado)
    const texHist=document.getElementById('tex-hist')
    const dismissButton =document.querySelector('.dismissButton')
    
    //Eventos
    
})
/* funcion para que el loguito rote */
document.addEventListener("DOMContentLoaded", function() {
    const logoVr = document.getElementById("logoVr");
  
    window.addEventListener("scroll", function() {
      if (isElementInViewport(logoVr)) {
        logoVr.style.animationPlayState = "running";
      }
    });
  
    function isElementInViewport(el) { /* "el" toma el valor de el elemento seleccionado  */
      const rect = el.getBoundingClientRect();/* esto verifica si el elemento esta en la pantalla */

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  })

//selectores
const marcoSupe =document.querySelector('.marco-principal')
const title = document.querySelector("h1")
const main = document.querySelector(".main")
const descripcion = document.getElementById("div1")
const contenedorImg = document.querySelector(`.carousel-inner`)
const btnHistoria = document.getElementById("btnhistoria")
const precio1 = document.getElementById("precio")
const horario1 = document.getElementById("horario")
const tel = document.getElementById("telefono")
const web1 = document.getElementById("paginaWeb")
const sliderGrande= document.querySelector("#imgSlider")
const marcoHistoria= document.getElementById('marcohistoria')
const marcodescrip=document.getElementById('marcodescrip')
const btndescrip =document.getElementById('btndescrip')
const Historia=document.getElementById('Historia')
const titlehis=document.getElementById('titlehist')
const marcoTrans=document.getElementById('marcoTrans')
let texHist;
const MHistoria =document.getElementById('MHistoria')
const btn2 = document.querySelector(`.btn2`)
const listUser=new Array();
const listComent=new Array();


function cargarlugar(lugar){
    const placeOdl={
    id: lugar.id,
    titulo:lugar.titulo,
    info: lugar.info,
    detalles: lugar.detalles,
    direccion: lugar.direccion,
    link_direccion: lugar.link_direccion,
    vr: lugar.vr,
    horario: lugar.horario,
    precio: lugar.precio,
    telefono: lugar.telefono,
    web: lugar.web,
    btn_url: lugar.btn_url,
    puntuacion: lugar.puntuacion,
    enum_tipo:lugar.enum_tipo
};
return placeOdl;
}

let placeOdl ={

}

//funcion para inyectar la informacion dinamicamente 
async function loadContent(lugar){
    //destructurando los elementos de cada lugar para posteriormente inyectarlos dinamicamente
    const {id ,titulo,info,detalles,direccion,horario,precio,telefono,web , btn_url,puntuacion }= lugar;
    //titulo dinamico
   placeOdl = cargarlugar(lugar)
    title.textContent = titulo
    //descripcion dinamica
    const descrip = document.createElement("p");
    descrip.classList.add("descrip","originView")
    descrip.textContent = detalles
    descripcion.appendChild(descrip)   
   // console.log(lugar);
    /* precio y horario */
    precio1.innerHTML += `<img class="originView" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO2ZTWhVRxTHJ0bT6Mu9///clzQNPlHUSkX8ou3CTUUoLlqXLhRXIip+thDqBxV0pSuXKrgUuqghYKoBt24quixqBUUXLsRoNPU7URM5ei5OL++Zd++797730D8M4d35/M2cMzNnYsxnfYKy1gLACQB3SI6TnKghjZK8bK39KVeIjo6OLgD/1Dj4iXIpNxgXQv76vj8vhWanAehVmEsmbwj5nWLzbQry0uQIca2rq+urtPugmpdp1JUIgqBEsg/AY0kk+z3P+zpXkJQghss49nAQBDNzAUnDJ0j2af2zMnBJAM7poP/MHCQtx8Z7U5pwZ99aO0vbHckUJM3dCcB/ClLKFSTtLZZkv7Z1TmAkARjUQfdlApLFOeF53gKSD8o5u+/7892y4VXHGNPSUBChgiCYKY4tZqam1heFEJF8oyBTGvawq0YkXytIq2lWCBHJMQWZZvIyJwBzAfwK4LC1dl2hUPhSB/ODOHN3d3ch1mDMu7ovFeSLPCBaSB4k+cp1XgDPARwH8FS/7Y4LAuCZ1O3p6ZmRNYTM2u/O4K+RPErytAsmQEl2HuiZI0FbphBa94XWPWWMmRrmWWtXkHyoeZtMApEckvqFQqE7MwiR7/urw1n3PK8YzQewVtu+moDDhD4SBIGfGYTIWrtYQcYrdNaiszpeKpWmx2kbwBxte8xd6bQg2qMfSN7SdjZWGJA8RoxKxBeDow3AX9ruYKoQsp2SvElypfvdWrtNZ+56dLAAvpXVAHAhJsSAtjlU9g0AgK3hnDim9f6IZE3V3UryeiOQi2QwlVZrMggx3XKFxAxOJvSJVt0K5RI3O5oJ4Mfw4ieT5eYFQbCwSrNqqwpCQW4ryLKEjnfjI2UuaNu/mfhqqxpCO7uone2J04usnta7W6kMyQ1a5u9aIEgumbQGyTVqHuPipHF6A/CvnrI/V8hfpSCPE0Lcrwoissu8gyG5vdp64rDhqpTbSeQaMpn5pQYRSgDiwohfhfEByXtyamvA0w7giPNwvT8XiCQwnZ2dPWF4CuCJcxkckVuu83uw4ilcGWKpqVURmB0fKwvgkDwcSFxBcieAK861XZz0QF0gksBEY+disei5zzp1gwgFYLMDs8ukL4E4oxAP5epislIEJnY01xAQGcLkDxEKwJaUYP4H4fv+dyZvoXaY+kNUgPnFJIN4VFeIGmAaDyKU7/tbq4RpXIgyMHIN2WuaEaIcjLV2X1NChBLTCs1MgjN9yBhwwtzlplnEDzDuP2lkJb43zSZr7XqN/+Ul8HyxWPym3mP6LFMHvQVfL/e0XNEogAAAAABJRU5ErkJggg=="> <p class="originView"> Precio: ${precio}</p> `
    horario1.innerHTML += `<img class="originView" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADsUlEQVR4nO2aW29MURTHf41qRwh6U970USr4Emgpyltd3ki9KCmvLm/E5UXSpJ+DVIMgEpfWpa5BW01Q+qCNN0WQkZX8d7LDmemZM3vODPFPTjIze++11zpr7bXXZeA//l3UA53AGWAAeAV8Ar7psc8vNWZztgF1VAgywB7gCvATyBb4/AAuA7uB2nIIsAA4DEx5TH0FrgNHpZlVeuPz9dTpNxs7BtzQGrf+A9Crl5MKNgMTHgP3gb3AkgS0lgL7gAcevddAOyWEval+b8OHwIaA9NuARx79vlJoZ7kYtw0+AweAeTHXDgF3Ys6dBxwEZj1tNxMILVJ3Vl5ndYHr3RsuBGuAUa0bFw9FockjeA9oTEAjiSDIOdzS2glZRSJkPHMy01iYkE5SQdCeQ56ZJToz/Z452WVHGQQxNHhWYQ6gYBfrDnahZyK0IO7MOAdg3i32ZefuCfNOVIAghkPe4Y9lYke8eyKui01DkGrgsWiZUHlRq1DBJq8nDEIJYtgkWlNzaWW35yGoQEGqPE+6M9/Eq5pksVMlCmLoFr1BcqBeYfXXhAFgWoLUKb/5novP7drwGmERWhDDTdHcQgTOatDyiUoX5IRono4aHNDg1r9AkO2ieSFqcEyDlsWFwHxPy1nl6fZbCLSKptUF/sCMBi22CYFzETm6CRMCjaI3HTX4TYM1gTabjhDkYyDatV6doOSCvIsQ5H0agswENC1LyN5ECHKSFExrLNBhXwY8E623wKTit1MBtd2a77A792sVwGI08dRLyFZQGuzI536dq7TiWbGaeK7vpcKJfBdipwatWlipmvg9ROkgRzDmgkarACbRxLMSa8IFty5oXEwOXBZDVsaMi/spCmHYr/0ukQe7NMlqsXFxV/PTEKIKGBGPXXNdNO81cSOVhw7xNhmnDdGrySOBig+hUA08EW89cRZkvFqvFZQrBb3iabSQplC7Fs2qOFZurAO+iKeCWxl93hsIFdqT8I4aFy/nkxDIeK51qIgidjFYBAyLh+Fi+oxNCsxcW8G+p4V64LbXjiu64dPiqdbMbC3pnIlx7WlR+cpQhJs9M5tV7dXcYWhUyzt98cwp+EWb8RxAVgXl9oA3trUy3D3hDnZJe+9tntpd1b474b8Y6hU7ubAjK1MK2S2eUzuHvHAmq4jUwuvjqju1ym3X6GlQ02iH5tz06gQu7Ogp1z8galUVH1QKkC3w+a7MtKtcAkRhiWqxlrVdVII14/2pxj6/UHp6WnNz5hP/wV+OX0o1XZFqyWfnAAAAAElFTkSuQmCC"> <p class="originView">Horario: ${horario} </p> 
    
    `
    horario1.children[2].classList.add("originView");
    horario1.children[3].classList.add("originView");
    horario1.children[4].classList.add("originView");
    /* telefono y web */
    tel.innerHTML += `<img class="originView" src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-tel-basic-ui-elements-2.2-sbts2018-outline-sbts2018.png" alt="external-tel-basic-ui-elements-2.2-sbts2018-outline-sbts2018"/> <p class="originView">Tel: ${telefono}</p> `
 
    if (web == "") {
        web1.innerHTML += `<img class="originView" src="https://img.icons8.com/ios/50/domain--v1.png" alt="domain--v1"/><p class="originView">Web: No aplica</p> `
    }else{
        web1.innerHTML += `<img class="originView" src="https://img.icons8.com/ios/50/domain--v1.png" alt="domain--v1"/> <p class="originView">Web:</p> <a class="originView" href="${web}" target="_blank">Aquí</a>`
    }
  
    /* Api Maps */
    function iniciarMap(){
        var coord = {lat: 6.219497203185579,lng: -75.58342700942858};
        var map = new google.maps.Map(document.getElementById('div4'),{
          zoom: 10,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          map: map
        });
        
    }
  //iniciarMap()
   
    /* Ineyectar IMG a slider */
    await extraerImg(id)
    texHistoria(info)
    agregarBTNC(btn_url)
   await extraerComentarios(id)
    comentario(puntuacion)
    opinione(listUser,listComent)
}
let contador =0;
const control = document.getElementById('carousel-indicators');
function inyectarImgSlider(imagenes){
    imagenes.forEach(imagen => {
        const hijo=document.createElement('div');
        if(contador==0){
            hijo.classList.add('carousel-item')
            hijo.classList.add('active')
          
        }else{
         hijo.classList.add('carousel-item')
        }

        const con =`
        <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="${contador}"
        class="active"
        aria-current="true"
        aria-label="Slide ${contador +1}"
      ></button>
        `
        contador++
        hijo.innerHTML=`
      
        <img src="${imagen}" class="d-block w-100"  alt="...">
        
        `
         control.innerHTML+=con
         sliderGrande.appendChild(hijo)
    });
}

function agregarBTNC(boton){
    const hijo=document.createElement('div');
    hijo.classList.add("BtnOrgarni" ,"originView")
    hijo.innerHTML=`

    <p class="texMas"> Te interesa la Historia? <br>
    <a href="${boton}" class="btn2">
        <svg width="277" height="62">
            <defs>
                <linearGradient id="grad1">
                    <stop offset="0%" stop-color="#fe7600 "/>
                    <stop offset="100%" stop-color="#f8aa83" />
                </linearGradient>
            </defs>
            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
        </svg>
    <span>Conoce más detalles</span>
</a>
    `
    MHistoria.appendChild(hijo)
}   

function texHistoria(histo){
   // console.log(histo);
    const hijo=document.createElement('p');
    hijo.classList.add("originView")
    hijo.innerHTML=`
    <p id="tex-hist">${histo}</p>
    
    `
    Historia.appendChild(hijo)
    
}

function comentario(punto){
    const padre=document.getElementById('puntos')
    const hijo=document.createElement('p');
    hijo.innerHTML=`
    <p>${punto}</p>
    `
    padre.appendChild(hijo)
}
async function extraerImg(comparar){
    const listURl=new Array();
    const datos = await get(UrlPost)
   await datos.forEach(data=>{
        const {urlImg,place}= data;
        const {id}= place;
    
        if (id==comparar) {
            listURl.push(urlImg);
        }
        if (listURl.length==0) {
            listURl.unshift("https://res.cloudinary.com/dhtmy6izv/image/upload/Multimedia/den1krumk48nfabnwiir.jpg")
        }
    })
   
    inyectarImgSlider(listURl)
}

async function extraerComentarios(id_place){

    const datos = await get(UrlComent)
   await datos.forEach(data=>{
       const {comment,user,place}= data;
       const {name}= user;
       const {id}=place
       if(id==id_place){
        listComent.unshift(comment);
        listUser.unshift(name);
       }           
    })

} 

function opinione(usu,opi){
   
    for (let index = 0; index < usu.length; index++) {
      
     const padre=document.getElementById('opini')
    const hijo=document.createElement('p');
    hijo.innerHTML=`
        <div class="op">
            <div class="opName"><p>${usu[index]}</p></div>
        <p class="te">${opi[index]}</p>
        </div>
        `
        padre.appendChild(hijo)
        
    }
    
}

// funciones para editar el lugar

// Selectors
const btnEdit_place=document.getElementById("btnEdit_place");
const btnCancel_place=document.getElementById("btnCancel_place");
const btnSave_place=document.getElementById("btnSave_place");

btnEdit_place.addEventListener("click",()=>{
    const originView=document.querySelectorAll(".originView")
    const Edicts =document.querySelectorAll(".Edict");
    const EdictTitle=document.getElementById("EdictTitle");
    const EdictDescrip=document.getElementById("EdictDescrip");
    const EdictPrice=document.getElementById("EdictPrice");
    const EdictHorario=document.getElementById("EdictHorario");
    const EdictDirec=document.getElementById("EdictDirec");
    const EdictPhone=document.getElementById("EdictPhone");
    const EdictWeb=document.getElementById("EdictWeb");
    const EdictInfo=document.getElementById("EdictInfo");
    const EdictUrl=document.getElementById("EdictUrl");

EdictTitle.value = placeOdl.titulo;
EdictDescrip.value = placeOdl.detalles;
EdictPrice.value = placeOdl.precio;
EdictHorario.value = placeOdl.horario;
EdictDirec.value = placeOdl.direccion;
EdictPhone.value = placeOdl.telefono;
EdictWeb.value = placeOdl.web;
EdictUrl.value = placeOdl.btn_url;
EdictInfo.value = placeOdl.info;


btnCancel_place.style.display = 'block';
btnEdit_place.style.display = 'none';
btnSave_place.style.display = 'block';
    originView.forEach(input=>{
        input.style.display="none";
    })
    Edicts.forEach(input=>{
        input.style.display="flex";
    })
})
btnCancel_place.addEventListener("click",()=>{
    const originView=document.querySelectorAll(".originView")
    const Edicts =document.querySelectorAll(".Edict");
btnCancel_place.style.display = 'none';
btnEdit_place.style.display = 'block';
btnSave_place.style.display = 'none';

    originView.forEach(input=>{
        input.style.display="flex";
    })
    Edicts.forEach(input=>{
        input.style.display="none";
    })
})

btnSave_place.addEventListener("click", async()=>{
     const EdictTitle=document.getElementById("EdictTitle");
    const EdictDescrip=document.getElementById("EdictDescrip");
    const EdictPrice=document.getElementById("EdictPrice");
    const EdictHorario=document.getElementById("EdictHorario");
    const EdictDirec=document.getElementById("EdictDirec");
    const EdictPhone=document.getElementById("EdictPhone");
    const EdictWeb=document.getElementById("EdictWeb");
    const EdictInfo=document.getElementById("EdictInfo");
    const EdictUrl=document.getElementById("EdictUrl");
    const placeUpdate ={
        id: placeOdl.id,
        titulo:EdictTitle.value,
        info: EdictInfo.value,
        detalles: EdictDescrip.value,
        direccion: EdictDirec.value,
        link_direccion: placeOdl.link_direccion,
        vr: placeOdl.vr,
        horario: EdictHorario.value,
        precio: EdictPrice.value,
        telefono: EdictPhone.value,
        web: EdictWeb.value,
        btn_url: EdictUrl.value,
        puntuacion: placeOdl.puntuacion,
        enum_tipo:placeOdl.enum_tipo
    }
   
    console.log(placeUpdate);
    const isUpdate = await update(UrlPlace+`/${placeUpdate.id}`,placeUpdate);
    console.log(isUpdate);
    if (isUpdate == true) {
        window.location.href="../pruebas/codigo/profileView.html";
    }else{
        alert("Lugar no actualizado verifique los campos")
    }


})


