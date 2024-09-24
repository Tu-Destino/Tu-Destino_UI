//filtros para apartado Descubrir.html

// importados

import { UrlPlace, get } from "./apiConnection.js";
import { DataImg, CargaImagenes, limpiar } from "../../PostDiscover/AppDecubrir.js";
import { ReiVeces, limpiarStyle}   from "./ModuloSelectores.js"; 

/*-----Criterios de busquedad----- */
   export const criteriosFiltros={
        infinite:0,
        tipo:"",
        nombre:"",
        selec:"", 
    }
    export const criteriosBotones={
        //principales
        Gastronomia:"",
        Actividades:"",
        Hospedajes:"",
        Lugares:"",
        //generales
        Historia:"",
        Cultura:"",
        Naturaleza:"",
        Arquitectura:"",
        Religion:"",
        Arte:"",
        Antiguedad:"",
        Internacional:"",
        Deporte:"",
        Lujo:"",
        Otros:"",
        //tipo de lugar
        Museo:"",
        Cementerio:"",
        Parque:"",
        Plaza:"",
        Mirador:"",
        Bar:"",
        Cafeteria:"",
        Biblioteca:"",
        //Geografia
        Montania:"",
        Rio:"",
        Bosque:"",
        //tiempo
        Nocturno:"",
        Iglesia:"",
        //actividades
        Aventura:"",
        Relax:"",
        Compras:"",
        Social:"",
        //gastronomia
        Local:"",
        Callejera:"",
        Saludable:"",
        //tipo
        Panaderia:"",


    }

/*  ------- Data para Guardar los objetos que cumplan los filtro ----s */
    export let DataFiltrados;
  
 /*----------- Funcion para verificar si hay un filtro activo ---*/  
   export function hayBotonActivo(criteriosBotones){
          const compro=Object.values(criteriosBotones)
            let hay =""
           // console.log(compro);
          for (let i = 0; i < compro.length; i++) {
                if (compro[i]== "") {
                       hay = false;   
                }
                else{
                    hay=true;
                    break
                } 
          }
          return hay
    }

  /*-------Funcion padre para filtrar las etiquedas seleccionas----*/
  function DesConcatTags(tags) {

    const listtag = tags.split(',')
    return listtag
  }

  export function filtrarBotones(verifica,criterio){
    criteriosFiltros.infinite=2
    
    console.log(`filtros activoS : ${verifica} || Criterio del filtro: ${criterio}`);
    if (verifica===false) {
        console.log('filtrado de Data-img');
        DataFiltrados= DataImg.filter(data=> {    return  DesConcatTags(data.etiquetas).includes(criterio) })
      ; 
          console.log(DataFiltrados);
        CargaImagenes(DataFiltrados)
    }
    else{
        console.log('filtrado de Data-filtrado');
        const f= DataFiltrados
        DataFiltrados= f.filter(data=> {     return  data.etiquetas.includes(criterio) } )          
          //  console.log(DataFiltrados);
            CargaImagenes(DataFiltrados)
    }
    }
   


  
 // funciones de filtro para comparar y extraer la informacion correspondiente del lugar seleccionado
 export async function buscarInfo(){
  //const informacion= DataSpanish.filter(filraNombre)
  const informacion= await get(UrlPlace)
 console.log(await filraNombre(informacion));
 localStorage.setItem('lugar',JSON.stringify(await filraNombre(informacion)))
  }
 export async function filraNombre(nombre){
  let result;

  await nombre.forEach(element => {
   
      if(criteriosFiltros.nombre){
        if (element.titulo == criteriosFiltros.nombre) {
               
            result= element;
        }
  
  }
  else{
   result= "NO hay lugar"
  }
 

  });

    return result;

 }

 export function limpieza (){
    criteriosFiltros.infinite=0;
    criteriosBotones.nombre="";         criteriosBotones.tipo="";
    criteriosBotones.selec="";          criteriosBotones.Historia="";
    criteriosBotones.Cultura="";        criteriosBotones.Naturaleza="";
    criteriosBotones.Arquitectura="";   criteriosBotones.Religion="";
    criteriosBotones.Arte="";           criteriosBotones.Antiguedad="";
    criteriosBotones.Otros="";          criteriosBotones.Museo="";
    criteriosBotones.Cementerio="";     criteriosBotones.Parque="";
    criteriosBotones.Plaza="";          criteriosBotones.Mirador="";
    criteriosBotones.Restaurante="";    criteriosBotones.Bar="";
    criteriosBotones.Cafeteria="";      criteriosBotones.Biblioteca="";
    criteriosBotones.Iglesia="";        criteriosBotones.Montania="";
    criteriosBotones.Rio="";            criteriosBotones.Bosque="";
    criteriosBotones.Nocturno="";       criteriosBotones.Lugares="";
    criteriosBotones.Hospedajes="";     criteriosBotones.Actividades=""; 
    criteriosBotones.Internacional="";  criteriosBotones.Deporte="";
    criteriosBotones.Lujo="";          criteriosBotones.Aventura="";
    criteriosBotones.Relax="";          criteriosBotones.Compras="";
    criteriosBotones.Social="";         criteriosBotones.Local="";
    criteriosBotones.Callejera="";      criteriosBotones.Saludable="";
    criteriosBotones.Panaderia="";      
    console.log('Filtros limpiados');
  //  console.log(DataImg);
    CargaImagenes(DataImg)
 }
 
  
 export function limpiarTodo(){
    limpieza()
    limpiar()
    ReiVeces()
    limpiarStyle()
  
  
    CargaImagenes(DataImg)
 }