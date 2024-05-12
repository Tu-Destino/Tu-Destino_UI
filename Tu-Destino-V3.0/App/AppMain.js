"use strict"

import { DataSpanish } from "../DataBase/Data-Spanish.js";
//$(window).scroll( function(){

  //  Calcular el scroll que hace el usuario
 // let pixel = $(window).scrollTop()

  //  Mostrar por consola ese scroll
  
  const box_search = document.getElementById("box-search");


cargarOpciones()
export function cargarOpciones(){
	

	DataSpanish.forEach((data)=>{
		const {titulo} = data
		const opciones =document.createElement('li')
		const ides =`${titulo}`;
		opciones.id= ides.replaceAll(' ','-')
		opciones.innerHTML=`
		<li ><a href="Tu-Destino-V2.0//Html/ApartadoDetallesBuscardor.html" ><i class="fas fa-search" ></i>${titulo}</a></li>
		`
		box_search.appendChild(opciones)
	})
  }
  const clickCementerio=document.getElementById('Cementerio-Museo-de-San-Pedro')
const clickPalacio =document.getElementById('Palacio-de-la-cultura-Rafael-Ubire')
const clickMuseo =document.getElementById('Museo-Casa-de-la-Memoria')
const clickBasilica =document.getElementById('Basílica-de-Nuestra-Señora-de-la-Candelaria')
const clickCastillo =document.getElementById('Museo-el-Castillo')
const clickBerrio=document.getElementById('Parque-Berrío')
const clickBotanico=document.getElementById('Jardin-Botánico')
const clickArvi=document.getElementById('Parque-Arví')
const clickBad=document.getElementById('Bad-Burgers')
const clickPicacho=document.getElementById('Cerro-el-Picacho')
const clickALaurales=document.getElementById('Alojamiento-laureles-estadio-Medellín')
 
 
  clickCementerio.addEventListener('click',(e)=>{
	  dataDetalles.nombre=clickCementerio.textContent.replace('\n\t\t' ,'').slice(0,-3)
	  console.log(dataDetalles);
  	infoDetalles(dataDetalles.nombre)
  })

clickPalacio.addEventListener('click',()=>{
	dataDetalles.nombre=clickPalacio.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickMuseo.addEventListener('click',()=>{
    dataDetalles.nombre=clickMuseo.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickBasilica.addEventListener('click',()=>{
    dataDetalles.nombre=clickBasilica.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickCastillo.addEventListener('click',()=>{
    dataDetalles.nombre=clickCastillo.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickBerrio.addEventListener('click',()=>{
    dataDetalles.nombre=clickBerrio.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickBotanico.addEventListener('click',()=>{
    dataDetalles.nombre=clickBotanico.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})
clickArvi.addEventListener('click',()=>{
	dataDetalles.nombre=clickArvi.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickBad.addEventListener('click',()=>{
    dataDetalles.nombre=clickBad.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickPicacho.addEventListener('click',()=>{
    dataDetalles.nombre=clickPicacho.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})

clickALaurales.addEventListener('click',()=>{
    dataDetalles.nombre=clickALaurales.textContent.replace('\n\t\t','').slice(0,-3)
    infoDetalles(dataDetalles.nombre)
})



//}) 

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

	



