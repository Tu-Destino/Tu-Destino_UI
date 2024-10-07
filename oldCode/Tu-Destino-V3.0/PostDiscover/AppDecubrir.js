 /* -----------NOTAS IPORTANTES!!!!!------------ */
  /*
    NO!!! USAR EL "h7" en nimgun caso (.html o .css) 
      La informacion guardada en el localStorage se utiliza para cargarla en el apartado detalles de manera dinamica los detalles del lugar
    seleccionado, para posteriormente colocarlos en "DetallesLugares.html"
  */


 //Funciones, objetos, array y variables importadas
    import { criteriosFiltros,/*filtrarTipo,*/buscarInfo,DataFiltrados} from "../Generic/ScriptGEneric/ModuloFiltros.js";
    import {ContenedorImagenes }from "../Generic/ScriptGEneric/ModuloSelectores.js"
    import {get,UrlPost} from "../Generic/ScriptGEneric/apiConnection.js";
     // import { DataImg } from "../DataBase/Data-Img.js";
     // import { DataSpanish } from "../DataBase/Data-Spanish.js";

 // extraer informacion de las Databases (JSON) 
 async function  DataImgJson() {
       const datos =await get(UrlPost);
       localStorage.setItem('DataImg',JSON.stringify(datos))
       console.log(datos);

}
 DataImgJson()  
 const Datag=localStorage.getItem('DataImg')
  export const DataImg = JSON.parse(Datag)
 //const DataS=localStorage.getItem('BaseSpanish')
 // const DataSpanish =JSON.parse(DataS)

 // Evento DOM
 document.addEventListener('DOMContentLoaded',()=>{
  
  selectImg()

  CargaImagenes(desordenar(DataImg))
})


const storageModal=document.getElementById("storageModal");
const btnPost=document.getElementById("btnPost");



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
        const {titulo,descripcion,urlImg} = img;
        const inyectarIMG =document.createElement('h7')
        inyectarIMG.innerHTML=`
        <a class=" imagenes car "   data-bs-toggle="modal" data-bs-target="#staticBackdrop"  href=""><img value="${titulo}" src="${urlImg}" imagen="${urlImg}" des="${descripcion}" nombre="${titulo}"  ></a>
        `
        ContenedorImagenes.appendChild(inyectarIMG)
      });
  }
  else if (tipoEstructura == 1 || tipoEstructura == 3){ 
    DataImg.forEach(img => {
      const {titulo,descripcion,urlImg} = img;
      const inyectarIMG =document.createElement('h7')
      inyectarIMG.innerHTML=`
      <a class=" imagenes car "   data-bs-toggle="modal" data-bs-target="#staticBackdrop"  href=""><img value="${titulo}" src="${urlImg}" imagen="${urlImg}" des="${descripcion}" nombre="${titulo}"  ></a>
      `
      ContenedorImagenes.appendChild(inyectarIMG)
    });
  }
}


// funacion para cargar mas imagenes cuando el scroll llegue al final de la pagina
function CargaImagenesScroll(DataImg){
  DataImg.forEach(img => {
    const {titulo,descripcion,urlImg} = img;
  const inyectarIMG =document.createElement('h7')
   
    inyectarIMG.innerHTML=`
    <a class=" imagenes car "   data-bs-toggle="modal" data-bs-target="#staticBackdrop"  href=""><img value="${titulo}" src="${urlImg}" imagen="${urlImg}" des="${descripcion}" nombre="${titulo}"  ></a>
    `
    ContenedorImagenes.appendChild(inyectarIMG)
  });
}



    



/*-----Funcion de alto nivel ----- */
 export  function filtrarImg(){
  criteriosFiltros.infinite=1
 const busquedad = DataImg.filter(filtrarHistoria)
 .filter(filtrarHistoria)
  console.log(DataFiltrados);
    CargaImagenes(DataFiltrados)    
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
   export function selectImg(){
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
      <a id="btnDetalles" href="../Details/PostDiscover/ApartadoDetalles.html"><button>Mas detalles</button></a>
      </div>
    </td>
      `
      infoModal.appendChild(infoInterna)
     
    } 

    function CambioModal(){
      const modalImg=`
      `

      const modalPost=`
      <!-- Modal post de las imagenes -->
      <div class="modal fade" id="staticBackdropz" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div >
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="modal-marco">
                 <div class="modal-marco">
                  <td class="modal-img">
                    <img src="" width="600px" height="500px">
                  </td>
                  <td class="text-modal">
                    <h1 class="modal-title tituloModal " id="staticBackdropLabelA">titulo</h1>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates alias, id quaerat expedita commodi voluptatem pariatur. Eos unde rerum odit illo eum, aliquam, corrupti delectus aspernatur adipisci quae fuga amet iste quibusdam hic cumque quidem, voluptatibus sapiente ut animi error.</p>
                    <div class="marco-btn">
                    <a id="btnDetalles" href="../Details/PostDiscover/ApartadoDetalles.html"><button>Mas detalles</button></a>
                    </div>
                  </td>
    
                 </div>
            </div>
          </div>
        </div>
      </div>
      
      `
    }
 // Buscador 
//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
const bars_search =       document.getElementById("ctn-bars-search");
const  cover_ctn_search =  document.getElementById("cover-ctn-search");
const  inputSearch =       document.getElementById("inputSearch");
const  box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "flex";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
export function ocultar_buscador(){

    // bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


   const filter = inputSearch.value.toUpperCase();
    const li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (let i = 0; i < li.length; i++){

       let a = li[i].getElementsByTagName("button")[0];
       
        const textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}


  /* -----------NOTAS IPORTANTES!!!!!------------ */
  /*
    NO!!! USAR EL "h7" en nimgun caso (.html o .css) 
    La informacion guardada en el localStorage se utiliza para cargar de dinamica los detalles del lugar
    seleccionado, para posteriormente colocarlos en "DetallesLugares.html"
  
  */