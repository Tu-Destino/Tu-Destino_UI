 /* -----------NOTAS IPORTANTES!!!!!------------ */
  /*
    NO!!! USAR EL "h7" en nimgun caso (.html o .css) 
      La informacion guardada en el localStorage se utiliza para cargarla en el apartado detalles de manera dinamica los detalles del lugar
    seleccionado, para posteriormente colocarlos en "DetallesLugares.html"
  */


 //Funciones, objetos, array y variables importadas
    import { criteriosFiltros,/*filtrarTipo,*/buscarInfo,DataFiltrados} from "./Modulos/ModuloFiltros.js";
    import {ContenedorImagenes }from "./Modulos/ModuloSelectores.js"
     // import { DataImg } from "../DataBase/Data-Img.js";
     // import { DataSpanish } from "../DataBase/Data-Spanish.js";

 // extraer informacion de las Databases (JSON) 
  function  DataImgJson() {
     // version ltc
    //descargar https://nodejs.org/en/download/
    // npm install -g json-server
    // cd Tu-Destino-V2.0/DataBase
    // usar json-server Data-img.json -p 4552

   /* fetch("http://localhost:4552/img")
    .then(validar=>{
      return validar.json()
    })
    .then(datos=>{
    localStorage.setItem('DataImg',JSON.stringify(datos))
    })*/
    fetch("../DataBase/Data-img.json")
    .then(validar=>{
      return validar.json()
    })
    .then(datos=>{
    localStorage.setItem('DataImg',JSON.stringify(datos))
    })
  /*   fetch("../DataBase/Data-Spanish.js")
    .then(validar=>{
      return validar.json()
    })
    .then(datos=>{
    localStorage.setItem('BaseSpanish',JSON.stringify(datos))
    })
  */
}
 const Datag=localStorage.getItem('DataImg')
 export const DataImg = JSON.parse(Datag)
 //const DataS=localStorage.getItem('BaseSpanish')
 // const DataSpanish =JSON.parse(DataS)

 // Evento DOM
 document.addEventListener('DOMContentLoaded',()=>{
  DataImgJson()  
  selectImg()

  CargaImagenes(desordenar(DataImg))
})




/*----------Automatizacion de imagenes--------- */
/* ----- Funcion para organizar de manera random las imagenes---*/
const desordenar = (array)=>{
  for (let i = array.length-1;i>0;i--) {
    const x= Math.floor(Math.random() * (i+1))
    const temporal = array[i]
    array[i] = array[x]
    array[x] = temporal
  }
  return array
}

// funcion para cargar las imagenes dinamicamente
export function CargaImagenes(DataImg){
  const  vefir =document.getElementById('noHay')
    vefir.style.display="none";
  if(DataImg.length == 0){
    vefir.style.display="block"
  }
  limpiar()
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const tipoEstructura = getRandomInt(4)
  if(tipoEstructura == 0 || tipoEstructura == 2){  
    DataImg.forEach(img => {
        const {ubicacion,decripcion,nombre} = img;
        const inyectarIMG =document.createElement('h7')
        inyectarIMG.innerHTML=`
        <a class=" imagenes car "   data-bs-toggle="modal" data-bs-target="#staticBackdrop"  href=""><img value="${nombre}" src="${ubicacion}" imagen="${ubicacion}" des="${decripcion}" nombre="${nombre}"  ></a>
        `
        ContenedorImagenes.appendChild(inyectarIMG)
      });
  }
  else if (tipoEstructura == 1 || tipoEstructura == 3){ 
    DataImg.forEach(img => {
      const {ubicacion,decripcion,nombre} = img;
      const inyectarIMG =document.createElement('h7')
      inyectarIMG.innerHTML=`
      <a class=" imagenes car "  data-bs-toggle="modal" data-bs-target="#staticBackdrop" href=""><img  src="${ubicacion}"imagen="${ubicacion}" des="${decripcion}" nombre="${nombre}" class="car" ></a>
      `
      ContenedorImagenes.appendChild(inyectarIMG)
    });
  }
}


// funacion para cargar mas imagenes cuando el scroll llegue al final de la pagina
function CargaImagenesScroll(DataImg){
  DataImg.forEach(img => {
    const {ubicacion,decripcion,nombre} = img;
  const inyectarIMG =document.createElement('h7')
   
    inyectarIMG.innerHTML=`
    <a class=" imagenes car " data-bs-toggle="modal" data-bs-target="#staticBackdrop" href=""><img value="${nombre}" src="${ubicacion}" imagen="${ubicacion}" des="${decripcion}" nombre="${nombre}" class="car" ></a>
    `
    ContenedorImagenes.appendChild(inyectarIMG)
  });
}



    



/*-----Funcion de alto nivel ----- */
 export  function filtrarImg(){
  criteriosFiltros.infinite=1
 const busquedad = DataImg.filter(filtrarHistoria)
 .filter(filtrarHistoria)
  //const busquedad =filtrarHistoria()
   //console.log(filtrarHistoria());
   
  console.log(DataFiltrados);
  // console.log(busquedad);
   // console.log(criteriosFiltros);
    CargaImagenes(DataFiltrados) 

  // [].filter(validar)
  // {}.filter(cultura,restaurante, etc)
  // [].filter("mas etiquesta")
     
 }
/*-----------Funciones ------------ */


// Funcion para quitar las marcon-filtrosimagenes
export function limpiar(){
    let m =document.querySelectorAll('h7');
    for(let a=0; a<m.length;a++){
      m[a].remove()
    }
  }

// Funcion para el scroll infinito
 
window.addEventListener("scroll", ()=>{
     if(criteriosFiltros.infinite==0){  
      if(window.scrollY + window.innerHeight  === document.body.scrollHeight ){
        CargaImagenesScroll(desordenar(DataImg))
        
    }}
     
})
// Funcion para finalizar el scroll
    function finalImg(){
      const ContenedorImagenes =document.querySelector('#Conte-img')
      const texto =document.createElement('h7')
      texto.innerHTML=`
        <p class="textoInfinino"> Ya has visto todas las imagenes disponibles</p>
      `
      ContenedorImagenes.appendChild(texto)
    }

    // Funciones para la informacion interna de las imagenes
    // Evento click de la Img
   function selectImg(){
      const ImagenDetalles = document.querySelector('#Conte-img')
     ImagenDetalles.addEventListener('click',Imgdetalles)
   } 
    
    // variables para el modal
    const tituloModal =document.querySelector('#tituloInterno')
    const tituliInterno =document.createElement('div')
    tituliInterno.classList.add('modal-header')
    const btnDetalles = document.querySelector('#btnDetalles')
    const padreBtn =document.querySelector('#padreBoton')
    const btnD = document.createElement('a')
    btnD.href="../Html/DetallesLugares.html"
    const infoModal =document.querySelector('#padreModal')
    const infoInterna =document.createElement('tr')

    // Funcion para agregar informacion al modal
    function actualizarComparador(titulo){
      localStorage.setItem('nombre',JSON.stringify(titulo))
      criteriosFiltros.nombre= JSON.parse(localStorage.getItem('nombre'))}

    function Imgdetalles(e){      
      // llamado de atributos colocados en las img 
      const imagenes =e.target.getAttribute("imagen");
       const titulo = e.target.getAttribute("nombre");
       const detalles=e.target.getAttribute("des")    
      actualizarComparador(titulo)
      buscarInfo()
      // titulo del modal
      tituliInterno.innerHTML=`
      
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      ` 
      tituloModal.appendChild(tituliInterno)
      // img e informacion interna del modal
      infoInterna.innerHTML=`
      <td class="modal-img">
      <img src="${imagenes}" width="600px" height="500px">
    </td>
    <td class="text-modal">
      <h1 class="modal-title tituloModal " id="staticBackdropLabel">${titulo}</h1>
      <p> ${detalles}</p>
      <div class="marco-btn">
      <a id="btnDetalles" href="../Html/ApartadoDetalles.html"><button>Mas detalles</button></a>
      </div>
    </td>
      `
      infoModal.appendChild(infoInterna)
      const padreDet = document.querySelector('#padreBoton')
      // Boton Detalles
      btnD.innerHTML=` 
      
      `
      padreDet.appendChild(btnD)
    } 



    



  /* -----------NOTAS IPORTANTES!!!!!------------ */
  /*
    NO!!! USAR EL "h7" en nimgun caso (.html o .css) 
    La informacion guardada en el localStorage se utiliza para cargar de dinamica los detalles del lugar
    seleccionado, para posteriormente colocarlos en "DetallesLugares.html"
  
  */