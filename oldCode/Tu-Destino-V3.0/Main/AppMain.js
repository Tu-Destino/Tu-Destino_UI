"use strict"


import { get,UrlPlace } from "../Generic/ScriptGEneric/apiConnection.js";

async function Data(url){
   
  return await get(url);
};

 const DataSpanish= await Data(UrlPlace)
const box_search = document.getElementById("box-search");

cargarOpciones()
export  function cargarOpciones(){

	  DataSpanish.forEach((data)=>{
		const {titulo} = data
		const opciones =document.createElement('li')
        //The class is given with which the object will be called
		const ides =`optionSearchMain`;
		opciones.innerHTML=`
		<li ><a class="${ides}" href="Tu-Destino-V3.0/Details/SearchMain/ApartadoDetallesBuscardor.html" ><i class="fas fa-search " ></i>${titulo}</a></li>
		`
		box_search.appendChild(opciones)

	})
  }
  // Select all classes to add an event
const list= document.querySelectorAll(".optionSearchMain");

// The list of options is reiterated to add an event to each one
   list.forEach(element => {
    element.addEventListener('click',(e)=>{
        console.log(element);
        dataDetalles.nombre=element.textContent
        infoDetalles(dataDetalles.nombre)
        console.log(dataDetalles.nombre);
    })
}) 


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4	,
				slidesToScroll: 1
			  }
			}
		]
	});
});

//----------------------------------------
//Ejecutando funciones
document.getElementById('icon-searchd').addEventListener
('click', mostrar_buscador)
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
const bars_search =       document.getElementById("ctn-bars-search");
const cover_ctn_search =  document.getElementById("cover-ctn-search");
const inputSearch =       document.getElementById("inputSearch");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    const filter = inputSearch.value.toUpperCase();
    let li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (let i = 0; i < li.length; i++){

        let a = li[i].getElementsByTagName("a")[0];
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


const dataDetalles={
	nombre:""
}

//Creando filtrado de busqueda

 function infoDetalles (compa){
	DataSpanish.forEach((data)=>{
		const {titulo} = data
	
		if(titulo.toUpperCase().indexOf(compa.toUpperCase()) > -1){
			localStorage.setItem('buscaLugar', JSON.stringify(data))
			
        }})
	}

	



