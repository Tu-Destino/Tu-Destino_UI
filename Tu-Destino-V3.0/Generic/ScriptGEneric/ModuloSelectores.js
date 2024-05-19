import {  CargaImagenes, DataImg, limpiar } from "../../PostDiscover/AppDecubrir.js";
import { criteriosFiltros, hayBotonActivo ,criteriosBotones ,filtrarBotones, limpieza, limpiarTodo } from "./ModuloFiltros.js";

/*-----------Selectores Apartado Descubrir--------- */
export const Limpiar =document.querySelector('#btnLimpiar');
export const ContenedorImagenes =document.querySelector('#Conte-img');
//principales
export const btnLugares =document.querySelector('#btnLugares');
export const btnActividades =document.querySelector('#btnActividades');
export const btnGatronomia=document.querySelector('#btnGastronomia');
export const btnHospedajes =document.querySelector('#btnHospedajes');
//generales
export const btnHistoria =document.querySelector('#btnHistoria');
export const btnCultura =document.querySelector('#btnCultura');
export const btnNaturaleza=document.querySelector('#btnNaturaleza');
export const btnArqui=document.querySelector('#btnArqui');
export const btnReligion=document.querySelector('#btnReligion');
export const btnArte=document.querySelector('#btnArte' );
export const btnAntig=document.querySelector('#btnAntig');
export const btnInternacional=document.querySelector('#btnInternacional'); 
export const btnDeporte=document.querySelector('#btnDeporte'); 
export const btnLujo=document.querySelector('#btnLujo');
export const btnOtros=document.querySelector('#btnOtros');
// tipo de lugar
export const btnMuseo=document.querySelector('#btnMuseo');
export const btnCemen=document.querySelector('#btnCemen');
export const btnParque=document.querySelector('#btnParque');
export const btnaPlaza=document.querySelector('#btnaPlaza');
export const btnMirador=document.querySelector('#btnMirador');
export const btnBar=document.querySelector('#btnBar');
export const btnCafeteria=document.querySelector('#btnCafeteria');
export const btnBiblio=document.querySelector('#btnBiblio');

// geografia
export const btnMontaña=document.querySelector('#btnMontaña');
export const btnRio=document.querySelector('#btnRio');
export const btnBosque=document.querySelector('#btnBosque');
// tiempo
export const btnIglesia=document.querySelector('#btnIglesia');
export const btnNocturno=document.querySelector('#btnNocturno');
// actividades 
export const btnAventura=document.querySelector('#btnAventura');
export const btnRelax = document.querySelector('#btnRelax');
export const btnCompras=document.querySelector('#btnCompras');
export const btnSocial=document.querySelector('#btnSocial');
//gastronomia
export const btnLocal=document.querySelector('#btnLocal');
export const btnCallejera=document.querySelector('#btnCallejera');
export const btnSaludable= document.querySelector('#btnSaludable');
// tipo
export const btnPanade=document.querySelector('#btnPanade');


/* -------------------- Criterios para los Filtros --------------*/ 

Limpiar.addEventListener('click',()=>{
    limpiarTodo()
})
let vecesH =1;  let vecesC =1;   let vecesN =1;  let vecesArq =1;
let vecesR =1;  let vecesArt=1;  let vecesAnt=1; let vecesO=1;
let vecesM =1;  let vecesCe =1;  let vecePar =1; let vecesPla=1;
let vecesMir=1; let vecesGas=1; let vecesBar =1; let vecesCaf=1;
let vecesBib=1; let vecesIgl=1;  let vecesMont=1; let vecesRio=1;
let vecesBos=1; let vecesNoct=1; let vecesLugar=1; let vecesActivi=1;
let vecesHospe=1; let vecesInter=1; let veceDep=1; let vecesLujo=1;
let vecesAv=1; let vecesRelax=1; let vecesComp=1; let vecesSocial=1; 
let vecesLocal=1; let vecesCalle=1; let vecesSalu=1; let vecesPan=1;

export function ReiVeces(){
    vecesH=1;     vecesC=1;     vecesN=1;     vecesArq=1;
    vecesR=1;     vecesArt=1;   vecesAnt=1;   vecesO=1;
    vecesM=1;     vecesCe=1;    vecePar=1;    vecesPla=1;
    vecesMir=1;   vecesGas=1;  vecesBar=1;   vecesCaf=1;
    vecesBib=1;   vecesIgl=1;   vecesMont=1;  vecesRio=1;
    vecesBos=1;   vecesNoct=1;  vecesLugar=1; vecesActivi=1
    vecesHospe=1; vecesInter=1; veceDep=1; vecesLujo=1;
    vecesAv=1;    vecesRelax=1;  vecesComp=1;  vecesSocial=1;
    vecesLocal=1; vecesCalle=1; vecesSalu=1;  vecesPan=1;

}

 function filtarQuitados(){

       const criteriosQuitados={
            Historia: criteriosBotones.Historia,            Cultura: criteriosBotones.Cultura,
            Naturaleza:criteriosBotones.Naturaleza,         Arquitectura: criteriosBotones.Arquitectura,
            Religion:criteriosBotones.Religion,             Arte:criteriosBotones.Arte,
            Antiguedad:criteriosBotones.Antiguedad,         Otros:criteriosBotones.Otros,
            Museo:criteriosBotones.Museo,                   Cementerio:criteriosBotones.Cementerio,
            Parque:criteriosBotones.Parque,                 Plaza:criteriosBotones.Plaza,
            Mirador:criteriosBotones.Mirador,               Gastronomia:criteriosBotones.Gastronomia,
            Lugares:criteriosBotones.Lugares,               Actividades:criteriosBotones.Actividades,
            Hospedajes:criteriosBotones.Hospedajes,         Internacional:criteriosBotones.Internacional,
            Deporte:criteriosBotones.Deporte,               Lujo:criteriosBotones.Lujo,
            Bar:criteriosBotones.Bar,                       Cafeteria:criteriosBotones.Cafeteria,
            Biblioteca:criteriosBotones.Biblioteca,         Iglesia:criteriosBotones.Iglesia,
            Montania:criteriosBotones.Montania,             Rio:criteriosBotones.Rio,
            Bosque:criteriosBotones.Bosque,                 Nocturno:criteriosBotones.Nocturno,
            Aventura:criteriosBotones.Aventura,             Compras:criteriosBotones.Compras,
            Social:criteriosBotones.Social,                 Relax:criteriosBotones.Relax,
            Local:criteriosBotones.Local,                   Callejera:criteriosBotones.Callejera,
            Saludable:criteriosBotones.Saludable,           Panaderia:criteriosBotones.Panaderia,
           
          }

        console.log(criteriosQuitados);
        limpieza()
        console.log(criteriosQuitados);
        function autofilLugar(esta,btn){  if (esta!="") { console.log(`aplica`); vecesLugar=1; btn.click(); } else{console.log("no aplica");}}
          autofilLugar(criteriosQuitados.Lugares,btnLugares);
        function autofilActivi(esta,btn){  if (esta!="") { console.log(`aplica`); vecesActivi=1; btn.click(); } else{console.log("no aplica");}}
          autofilActivi(criteriosQuitados.Actividades,btnActividades);
          function autofilHospe(esta,btn){  if (esta!="") { console.log(`aplica`); vecesHospe=1; btn.click(); } else{console.log("no aplica");}}
          autofilHospe(criteriosQuitados.Hospedajes,btnHospedajes);
        function autofilH(esta,btn,){  if (esta !="") { console.log(`aplica`); vecesH=1; btn.click();} else{console.log("no aplica");}}
        console.log(vecesH);
        autofilH(criteriosQuitados.Historia,btnHistoria)
        function autofilC(esta,btn){  if (esta !="") { console.log(`aplica`);vecesC=1;  btn.click(); } else{console.log("no aplica");}}
        autofilC(criteriosQuitados.Cultura,btnCultura)
        function autofilN(esta,btn){  if (esta !="") { console.log(`aplica`); vecesN=1; btn.click(); } else{console.log("no aplica");}}
        autofilN(criteriosQuitados.Naturaleza,btnNaturaleza)
        function autofilArqui(esta,btn){  if (esta!="") { console.log(`aplica`); vecesArq=1; btn.click(); } else{console.log("no aplica");}}
        autofilArqui(criteriosQuitados.Arquitectura,btnArqui)
        function autofilR(esta,btn){  if (esta!="") { console.log(`aplica`); vecesR=1; btn.click(); } else{console.log("no aplica");}}
        autofilR(criteriosQuitados.Religion,btnReligion)
        function autofilArte(esta,btn){  if (esta!="") { console.log(`aplica`); vecesArt=1; btn.click(); } else{console.log("no aplica");}}
        autofilArte(criteriosQuitados.Arte,btnArte)
        function autofilAnti(esta,btn){  if (esta!="") { console.log(`aplica`); vecesAnt=1; btn.click(); } else{console.log("no aplica");}}
        autofilAnti(criteriosQuitados.Antiguedad,btnAntig)
        function autofilInter(esta,btn){  if (esta!="") { console.log(`aplica`); vecesInter=1; btn.click(); } else{console.log("no aplica");}}
        autofilInter(criteriosQuitados.Internacional,btnInternacional)
        function autofilDep(esta,btn){  if (esta!="") { console.log(`aplica`); veceDep=1; btn.click(); } else{console.log("no aplica");}}
        autofilDep(criteriosQuitados.Deporte,btnDeporte)
        function autofilLujo(esta,btn){  if (esta!="") { console.log(`aplica`); vecesLujo=1; btn.click(); } else{console.log("no aplica");}}
        autofilLujo(criteriosQuitados.Lujo,btnLujo)
        function autofilO(esta,btn){  if (esta!="") { console.log(`aplica`); vecesO=1; btn.click(); } else{console.log("no aplica");}}
        autofilO(criteriosQuitados.Otros,btnOtros)
        function autofilMuse(esta,btn){  if (esta!="") { console.log(`aplica`); vecesM=1; btn.click(); } else{console.log("no aplica");}}
        autofilMuse(criteriosQuitados.Museo,btnMuseo)
        function autofilCemen(esta,btn){  if (esta!="") { console.log(`aplica`); vecesCe=1; btn.click(); } else{console.log("no aplica");}}
        autofilCemen(criteriosQuitados.Cementerio,btnCemen)
        function autofilPar(esta,btn){  if (esta!="") { console.log(`aplica`); vecePar=1; btn.click(); } else{console.log("no aplica");}}
        autofilPar(criteriosQuitados.Parque,btnParque)
        function autofilPla(esta,btn){  if (esta!="") { console.log(`aplica`); vecesPla=1; btn.click(); } else{console.log("no aplica");}}
        autofilPla(criteriosQuitados.Plaza,btnaPlaza)
        function autofilMira(esta,btn){  if (esta!="") { console.log(`aplica`); vecesMir=1; btn.click(); } else{console.log("no aplica");}}
        autofilMira(criteriosQuitados.Mirador,btnMirador)
        function autofilResta(esta,btn){  if (esta!="") { console.log(`aplica`); vecesGas=1; btn.click(); } else{console.log("no aplica");}}
        autofilResta(criteriosQuitados.Gastronomia,btnGatronomia)
        function autofilBar(esta,btn){  if (esta!="") { console.log(`aplica`); vecesBar=1; btn.click(); } else{console.log("no aplica");}}
        autofilBar(criteriosQuitados.Bar,btnBar)
        function autofilCafe(esta,btn){  if (esta!="") { console.log(`aplica`); vecesCaf=1; btn.click(); } else{console.log("no aplica");}}
        autofilCafe(criteriosQuitados.Cafeteria,btnCafeteria)
        function autofilBlio(esta,btn){  if (esta!="") { console.log(`aplica`); vecesBib=1; btn.click(); } else{console.log("no aplica");}}
        autofilBlio(criteriosQuitados.Biblioteca,btnBiblio)
        function autofilIgle(esta,btn){  if (esta!="") { console.log(`aplica`); vecesIgl=1; btn.click(); } else{console.log("no aplica");}}
        autofilIgle(criteriosQuitados.Iglesia,btnIglesia)
        function autofilMonta(esta,btn){  if (esta!="") { console.log(`aplica`); vecesMont=1; btn.click(); } else{console.log("no aplica");}}
        autofilMonta(criteriosQuitados.Montania,btnMontaña)
        function autofilRio(esta,btn){  if (esta!="") { console.log(`aplica`); vecesRio=1; btn.click(); } else{console.log("no aplica");}}
        autofilRio(criteriosQuitados.Rio,btnRio)
        function autofilBosqu(esta,btn){  if (esta!="") { console.log(`aplica`); vecesBos=1; btn.click(); } else{console.log("no aplica");}}
        autofilBosqu(criteriosQuitados.Bosque,btnBosque)
        function autofilNoc(esta,btn){  if (esta!="") { console.log(`aplica`); vecesNoct=1; btn.click(); } else{console.log("no aplica");}}
        autofilNoc(criteriosQuitados.Nocturno,btnNocturno)
        function autofilAven(esta,btn){  if (esta!="") { console.log(`aplica`); vecesAv=1; btn.click(); } else{console.log("no aplica");}}
        autofilAven(criteriosQuitados.Aventura,btnAventura)
        function autofilCompras(esta,btn){  if (esta!="") { console.log(`aplica`); vecesComp=1; btn.click(); } else{console.log("no aplica");}}
        autofilCompras(criteriosQuitados.Compras,btnCompras)
        function autofilRelax(esta,btn){  if (esta!="") { console.log(`aplica`); vecesRelax=1; btn.click(); } else{console.log("no aplica");}}
        autofilRelax(criteriosQuitados.Relax,btnRelax)
        function autofilSocial(esta,btn){  if (esta!="") { console.log(`aplica`); vecesSocial=1; btn.click(); } else{console.log("no aplica");}}
        autofilSocial(criteriosQuitados.Social,btnSocial)
        function autofilLocal(esta,btn){  if (esta!="") { console.log(`aplica`); vecesLocal=1; btn.click(); } else{console.log("no aplica");}}
        autofilLocal(criteriosQuitados.Local,btnLocal)
        function autofilCallejera(esta,btn){  if (esta!="") { console.log(`aplica`); vecesCalle=1; btn.click(); } else{console.log("no aplica");}}
        autofilCallejera(criteriosQuitados.Callejera,btnCallejera)
        function autofilSAludable(esta,btn){  if (esta!="") { console.log(`aplica`); vecesSalu=1; btn.click(); } else{console.log("no aplica");}}
        autofilSAludable(criteriosQuitados.Saludable,btnSaludable)
        function autofilPanaderia(esta,btn){  if (esta!="") { console.log(`aplica`); vecesPan=1; btn.click(); } else{console.log("no aplica");}}
        autofilPanaderia(criteriosQuitados.Panaderia,btnPanade)
    
        }
/*------------AddEventListener----------------*/

btnActividades.addEventListener('click',(e)=>{
    if (vecesActivi==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnActividades.style.backgroundColor ="#001F3F";
        btnActividades.style.color="#141313";
      
         criteriosBotones.Actividades=e.target.value;
         filtrarBotones(u,criteriosBotones.Actividades)
         vecesActivi=2
    }else if (vecesActivi==2) {
        console.log('filtro Actividades quitado');
        btnActividades.style.backgroundColor ="";
        btnActividades.style.color="";
        vecesActivi=1  
        criteriosBotones.Actividades=""
        filtarQuitados();  
    }
})
btnLugares.addEventListener("click",(e)=>{
    if (vecesLugar==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnLugares.style.backgroundColor ="#001F3F";
        btnLugares.style.color="#141313";
      
         criteriosBotones.Lugares=e.target.value;
         filtrarBotones(u,criteriosBotones.Lugares)
         vecesLugar=2
    }else if (vecesLugar==2) {
        console.log('filtro Lugares quitado');
        btnLugares.style.backgroundColor ="";
        btnLugares.style.color="";
        vecesLugar=1  
        criteriosBotones.Lugares=""
        filtarQuitados();  
    }
})
btnHospedajes.addEventListener('click',(e)=>{      
    if(vecesHospe==1){
        const u =hayBotonActivo(criteriosBotones);
        btnHospedajes.style.backgroundColor ="#001F3F";
        btnHospedajes.style.color="#141313";
        criteriosBotones.Hospedajes=e.target.value;
        filtrarBotones(u,criteriosBotones.Hospedajes)
        vecesHospe=2
    }
    else if(vecesHospe==2){
        console.log('filtro Hospedajes quitado');
        btnHospedajes.style.backgroundColor ="";
        btnHospedajes.style.color="";
        vecesHospe=1  
        criteriosBotones.Hospedajes=""
        filtarQuitados();
    }
})



btnHistoria.addEventListener('click',(e)=>{
    
   console.log(vecesH);
    if (vecesH===1) {
        console.log('Inicio normal');
           const u =hayBotonActivo(criteriosBotones);
           btnHistoria.style.backgroundColor ="#001F3F";
           btnHistoria.style.color="#141313";
            criteriosBotones.Historia=e.target.value;
            filtrarBotones(u,criteriosBotones.Historia)
           
            vecesH=2
    }else if(vecesH===2){
        console.log('filtro Historia quitado');
        btnHistoria.style.backgroundColor ="";
        btnHistoria.style.color="";
        vecesH=1  
        criteriosBotones.Historia=""
        filtarQuitados();
           
            
              
   
    }

})

btnCultura.addEventListener('click', (e)=>{
    if (vecesC==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnCultura.style.backgroundColor ="#FFD700";
        btnCultura.style.color="#141313";
      
         criteriosBotones.Cultura=e.target.value;
         filtrarBotones(u,criteriosBotones.Cultura)
         vecesC=2
    }else if (vecesC==2) {
        console.log('filtro Cultura quitado');
        btnCultura.style.backgroundColor ="";
        btnCultura.style.color="";
        vecesC=1
         criteriosBotones.Cultura=""
        filtarQuitados()
        
      
   
        
    }
 
})

btnNaturaleza.addEventListener('click',(e)=>{
    if (vecesN==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnNaturaleza.style.backgroundColor ="#4CAF50";
        btnNaturaleza.style.color="#141313";
        criteriosBotones.Naturaleza=e.target.value;
        filtrarBotones(u,criteriosBotones.Naturaleza)
        vecesN=2
    }else if (vecesN==2) {
        console.log('filtro Naturaleza quitado');
        btnNaturaleza.style.backgroundColor ="";
        btnNaturaleza.style.color="";
        vecesN=1
        criteriosBotones.Naturaleza=""
        filtarQuitados()
    }
})

btnArqui.addEventListener('click',(e)=>{ 
    if (vecesArq==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnArqui.style.backgroundColor ="#B0C4DE";
        btnArqui.style.color="#141313";
        criteriosBotones.Arquitectura=e.target.value;
        filtrarBotones(u,criteriosBotones.Arquitectura)
        vecesArq=2
    }
    else if (vecesArq==2) {
        console.log('filtro Arquitectura quitado');
        btnArqui.style.backgroundColor ="";
        btnArqui.style.color="";
        vecesArq=1
        criteriosBotones.Arquitectura=""
        filtarQuitados()
    }
})

btnReligion.addEventListener('click',(e)=>{
    if (vecesR==1){
        const u =hayBotonActivo(criteriosBotones);
        btnReligion.style.backgroundColor ="#710202";
        btnReligion.style.color="#141313";
        criteriosBotones.Religion=e.target.value;
        filtrarBotones(u,criteriosBotones.Religion)
        vecesR=2
    }
    else if (vecesR==2) {
        console.log('filtro Religion quitado');
        btnReligion.style.backgroundColor ="";
        btnReligion.style.color="";
        vecesR=1
        criteriosBotones.Religion=""
        filtarQuitados()
    }
})

btnArte.addEventListener('click',(e)=>{
  if (vecesArt==1) {
    const u =hayBotonActivo(criteriosBotones);
    btnArte.style.backgroundColor ="#87CEEB ";
    btnArte.style.color="#141313";
    criteriosBotones.Arte=e.target.value;
    filtrarBotones(u,criteriosBotones.Arte)
    vecesArt=2
    
  }
  else if (vecesArt==2) {
    console.log('filtro Arte quitado');
    btnArte.style.backgroundColor ="";
    btnArte.style.color="";
    vecesArt=1
    criteriosBotones.Arte=""
    filtarQuitados()
  }
})

btnAntig.addEventListener('click',(e)=>{
    if (vecesAnt==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnAntig.style.backgroundColor ="#D2B48C ";
        btnAntig.style.color="#141313";
        criteriosBotones.Antiguedad=e.target.value;
        filtrarBotones(u,criteriosBotones.Antiguedad)
        vecesAnt=2
    }
    else if (vecesAnt==2) {
        console.log('filtro Antiguedad quitado');
        btnAntig.style.backgroundColor ="";
        btnAntig.style.color="";
        vecesAnt=1
        criteriosBotones.Antiguedad=""
        filtarQuitados()
    }
})
btnInternacional.addEventListener("click",(e)=>{
    if (vecesInter==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnInternacional.style.backgroundColor ="#000000";
        btnInternacional.style.color="#141313";
        criteriosBotones.Internacional=e.target.value;
        filtrarBotones(u,criteriosBotones.Internacional)
        vecesInter=2
    }
    else if (vecesInter==2) {
        console.log('filtro Internacional quitado');
        btnInternacional.style.backgroundColor ="";
        btnInternacional.style.color="";
        vecesInter=1
        criteriosBotones.Internacional=""
        filtarQuitados()
    }
})
btnDeporte.addEventListener('click',(e)=>{
    if (veceDep==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnDeporte.style.backgroundColor ="#000000";
        btnDeporte.style.color="#141313";
        criteriosBotones.Deporte=e.target.value;
        filtrarBotones(u,criteriosBotones.Deporte)
        veceDep=2
    }
    else if (veceDep==2) {
        console.log('filtro Deporte quitado');
        btnDeporte.style.backgroundColor ="";
        btnDeporte.style.color="";
        veceDep=1
        criteriosBotones.Deporte=""
        filtarQuitados()
    }
})
btnLujo.addEventListener("click",(e)=>{
    if (vecesLujo==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnLujo.style.backgroundColor ="#000000";
        btnLujo.style.color="#141313";
        criteriosBotones.Lujo=e.target.value;
        filtrarBotones(u,criteriosBotones.Lujo)
        vecesLujo=2
    }
    else if (vecesLujo==2) {
        console.log('filtro Lujo quitado');
        btnLujo.style.backgroundColor ="";
        btnLujo.style.color="";
        vecesLujo=1
        criteriosBotones.Lujo=""
        filtarQuitados()
    }
})



btnOtros.addEventListener('click',(e)=>{
    if (vecesO==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnOtros.style.backgroundColor ="#f8f9fa";
        btnOtros.style.color="#141313";
        criteriosBotones.Otros=e.target.value;
        filtrarBotones(u,criteriosBotones.Otros)
        vecesO=2
    }
    else if (vecesO==2) {
        console.log('filtro Otros quitado');
        btnOtros.style.backgroundColor ="";
        btnOtros.style.color="";
        vecesO=1
        criteriosBotones.Otros=""
        filtarQuitados()
    }
})

btnMuseo.addEventListener('click',(e)=>{
    if (vecesM==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnMuseo.style.backgroundColor ="#F0F8FF";
        btnMuseo.style.color="#141313";
        criteriosBotones.Museo=e.target.value;
        filtrarBotones(u,criteriosBotones.Museo)
        vecesM=2
    }
    else if (vecesM==2) {
        console.log('filtro Museo quitado');
        btnMuseo.style.backgroundColor ="";
        btnMuseo.style.color="";
        vecesM=1
        criteriosBotones.Museo=""
        filtarQuitados()
    }

})

btnCemen.addEventListener('click',(e)=>{
    if (vecesCe==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnCemen.style.backgroundColor ="#A9A9A9";
        btnCemen.style.color="#141313";
        criteriosBotones.Cementerio=e.target.value;
        filtrarBotones(u,criteriosBotones.Cementerio)
        vecesCe=2
    }
    else if (vecesCe==2) {
        console.log('filtro Cementerio quitado');
        btnCemen.style.backgroundColor ="";
        btnCemen.style.color="";
       vecesCe=1
        criteriosBotones.Cementerio=""
        filtarQuitados()
    }
})

btnParque.addEventListener('click',(e)=>{
    if (vecePar==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnParque.style.backgroundColor ="#90EE90";
        btnParque.style.color="#141313";
        criteriosBotones.Parque=e.target.value;
        filtrarBotones(u,criteriosBotones.Parque)
        vecePar=2
    }
    else if (vecePar==2) {
        console.log('filtro Parque quitado');
        btnParque.style.backgroundColor ="";
        btnParque.style.color="";
        vecePar=1
        criteriosBotones.Parque=""
        filtarQuitados()
    }
})

btnaPlaza.addEventListener('click',(e)=>{
    if (vecesPla==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnaPlaza.style.backgroundColor ="#FFA07A";
        btnaPlaza.style.color="#141313";
        criteriosBotones.Plaza=e.target.value;
        filtrarBotones(u,criteriosBotones.Plaza)
        vecesPla=2
    }
    else if (vecesPla==2) {   
        console.log('filtro aPlaza quitado');
        btnaPlaza.style.backgroundColor ="";
        btnaPlaza.style.color="";
        vecesPla=1
        criteriosBotones.Plaza=""
        filtarQuitados()
    }
})

btnMirador.addEventListener('click',(e)=>{
    if (vecesMir==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnMirador.style.backgroundColor ="#ADD8E6";
        btnMirador.style.color="#141313";
        criteriosBotones.Mirador=e.target.value;
        filtrarBotones(u,criteriosBotones.Mirador)
        vecesMir=2
    }
    else if (vecesMir==2) {
        console.log('filtro Mirador quitado');
        btnMirador.style.backgroundColor ="";
        btnMirador.style.color="";
        vecesMir=1
        criteriosBotones.Mirador=""
        filtarQuitados()
    }
})

btnGatronomia.addEventListener('click',(e)=>{
    if (vecesGas==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnGatronomia.style.backgroundColor ="#FFD700";
        btnGatronomia.style.color="#141313";
        criteriosBotones.Gastronomia=e.target.value;
        filtrarBotones(u,criteriosBotones.Gastronomia)
        vecesGas=2
    }
    else if (vecesGas==2) {
        console.log('filtro Gastronomia quitado');
        btnGatronomia.style.backgroundColor ="";
        btnGatronomia.style.color="";
       vecesGas=1
        criteriosBotones.Gastronomia=""
        filtarQuitados()
    }
})

btnBar.addEventListener('click',(e)=>{
    if (vecesBar==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnBar.style.backgroundColor ="#DA70D6";
        btnBar.style.color="#141313";
        criteriosBotones.Bar=e.target.value;
        filtrarBotones(u,criteriosBotones.Bar)
        vecesBar=2
    }
    else if (vecesBar==2) {
        console.log('filtro Bar quitado');
        btnBar.style.backgroundColor ="";
        btnBar.style.color="";
        vecesBar=1
        criteriosBotones.Bar=""
        filtarQuitados()
    }
})

btnCafeteria.addEventListener('click',(e)=>{
    if (vecesCaf==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnCafeteria.style.backgroundColor ="#D2B48C";
        btnCafeteria.style.color="#141313";
        criteriosBotones.Cafeteria=e.target.value;
        filtrarBotones(u,criteriosBotones.Cafeteria)
        vecesCaf=2
    }
    else if (vecesCaf==2) {
        console.log('filtro Cafeteria quitado');
        btnCafeteria.style.backgroundColor ="";
        btnCafeteria.style.color="";
        vecesCaf=1
        criteriosBotones.Cafeteria=""
        filtarQuitados()
    }
})

btnBiblio.addEventListener('click',(e)=>{
    if (vecesBib==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnBiblio.style.backgroundColor ="#F0F8FF";
        btnBiblio.style.color="#141313";
        criteriosBotones.Biblioteca=e.target.value;
        filtrarBotones(u,criteriosBotones.Biblioteca)
        vecesBib=2
    }
    else if (vecesBib==2) {
        console.log('filtro Biblioteca quitado');
        btnBiblio.style.backgroundColor ="";
        btnBiblio.style.color="";
        vecesBib=1
        criteriosBotones.Biblioteca=""
        filtarQuitados()
    }
})

btnIglesia.addEventListener('click',(e)=>{
    if (vecesIgl==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnIglesia.style.backgroundColor ="#FFFFFF";
        btnIglesia.style.color="#141313";
        criteriosBotones.Iglesia=e.target.value;
        filtrarBotones(u,criteriosBotones.Iglesia)
        vecesIgl=2
    }
    else if (vecesIgl==2) {
        console.log('filtro Iglesia quitado');
        btnIglesia.style.backgroundColor ="";
        btnIglesia.style.color="";
        vecesIgl=1
        criteriosBotones.Iglesia=""
        filtarQuitados()
    }
})

btnMontaña.addEventListener('click',(e)=>{
    if (vecesMont==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnMontaña.style.backgroundColor ="#D3D3D3";
        btnMontaña.style.color="#141313";
        criteriosBotones.Montania=e.target.value;
        filtrarBotones(u,criteriosBotones.Montania)
        vecesMont=2
    }
    else if (vecesMont==2) {
        console.log('filtro Montaña quitado');
        btnMontaña.style.backgroundColor ="";
        btnMontaña.style.color="";
        vecesMont=1
        criteriosBotones.Montania=""
        filtarQuitados()
    }
})

btnRio.addEventListener('click',(e)=>{
    if (vecesRio==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnRio.style.backgroundColor ="#5cd1ff";
        btnRio.style.color="#141313";
        criteriosBotones.Rio=e.target.value;
        filtrarBotones(u,criteriosBotones.Rio)
        vecesRio=2
    }
    else if (vecesRio==2) {
        console.log('filtro Rio quitado');
        btnRio.style.backgroundColor ="";
        btnRio.style.color="";
        vecesRio=1
        criteriosBotones.Rio=""
        filtarQuitados()
    }
})

btnBosque.addEventListener('click',(e)=>{
    if (vecesBos==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnBosque.style.backgroundColor ="#8FBC8F";
        btnBosque.style.color="#141313";
        criteriosBotones.Bosque=e.target.value;
        filtrarBotones(u,criteriosBotones.Bosque)
        vecesBos=2
    }
    else if (vecesBos==2) {
        console.log('filtro Bosque quitado');
        btnBosque.style.backgroundColor ="";
        btnBosque.style.color="";
        vecesBos=1
        criteriosBotones.Bosque=""
        filtarQuitados()
    }
})

btnNocturno.addEventListener('click',(e)=>{
    if (vecesNoct==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnNocturno.style.backgroundColor ="#2E2E2E";
        btnNocturno.style.color="#141313";
        criteriosBotones.Nocturno=e.target.value;
        filtrarBotones(u,criteriosBotones.Nocturno)
        vecesNoct=2
    }
    else if (vecesNoct==2) {
        console.log('filtro Nocturno quitado');
        btnNocturno.style.backgroundColor ="";
        btnNocturno.style.color="";
        vecesNoct=1
        criteriosBotones.Nocturno=""
        filtarQuitados()
    }
})
btnAventura.addEventListener('click', (e)=>{
    if (vecesAv==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnAventura.style.backgroundColor ="#2E2E2E";
        btnAventura.style.color="#141313";
        criteriosBotones.Aventura=e.target.value;
        filtrarBotones(u,criteriosBotones.Aventura)
        vecesAv=2
    }
    else if (vecesAv==2) {
        console.log('filtro Aventura quitado');
        btnAventura.style.backgroundColor ="";
        btnAventura.style.color="";
        vecesAv=1
        criteriosBotones.Aventura=""
        filtarQuitados()
    }
});
btnRelax.addEventListener('click',(e)=>{
    if (vecesRelax==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnRelax.style.backgroundColor ="#2E2E2E";
        btnRelax.style.color="#141313";
        criteriosBotones.Relax=e.target.value;
        filtrarBotones(u,criteriosBotones.Relax)
        vecesRelax=2
    }
    else if (vecesRelax==2) {
        console.log('filtro Relax quitado');
        btnRelax.style.backgroundColor ="";
        btnRelax.style.color="";
        vecesRelax=1
        criteriosBotones.Relax=""
        filtarQuitados()
    };
})
btnCompras.addEventListener("click",(e)=>{
    if (vecesComp==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnCompras.style.backgroundColor ="#2E2E2E";
        btnCompras.style.color="#141313";
        criteriosBotones.Compras=e.target.value;
        filtrarBotones(u,criteriosBotones.Compras)
        vecesComp=2
    }
    else if (vecesComp==2) {
        console.log('filtro Compras quitado');
        btnCompras.style.backgroundColor ="";
        btnCompras.style.color="";
        vecesComp=1
        criteriosBotones.Compras=""
        filtarQuitados()
    }
});
btnSocial.addEventListener('click',(e)=>{
    if (vecesSocial==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnSocial.style.backgroundColor ="#2E2E2E";
        btnSocial.style.color="#141313";
        criteriosBotones.Social=e.target.value;
        filtrarBotones(u,criteriosBotones.Social)
        vecesSocial=2
    }
    else if (vecesSocial==2) {
        console.log('filtro Social quitado');
        btnSocial.style.backgroundColor ="";
        btnSocial.style.color="";
        vecesSocial=1
        criteriosBotones.Social=""
        filtarQuitados()
    }
})
btnLocal.addEventListener('click',(e)=>{
    if (vecesLocal==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnLocal.style.backgroundColor ="#2E2E2E";
        btnLocal.style.color="#141313";
        criteriosBotones.Local=e.target.value;
        filtrarBotones(u,criteriosBotones.Local)
        vecesLocal=2
    }
    else if (vecesLocal==2) {
        console.log('filtro Local quitado');
        btnLocal.style.backgroundColor ="";
        btnLocal.style.color="";
        vecesLocal=1
        criteriosBotones.Local=""
        filtarQuitados()
    }
})
btnCallejera.addEventListener("click",(e)=>{
    if (vecesCalle==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnCallejera.style.backgroundColor ="#2E2E2E";
        btnCallejera.style.color="#141313";
        criteriosBotones.Callejera=e.target.value;
        filtrarBotones(u,criteriosBotones.Callejera)
        vecesCalle=2
    }
    else if (vecesCalle==2) {
        console.log('filtro Callejera quitado');
        btnCallejera.style.backgroundColor ="";
        btnCallejera.style.color="";
        vecesCalle=1
        criteriosBotones.Callejera=""
        filtarQuitados()
    }
})
btnSaludable.addEventListener("click",(e)=>{
    if (vecesSalu==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnSaludable.style.backgroundColor ="#2E2E2E";
        btnSaludable.style.color="#141313";
        criteriosBotones.Saludable=e.target.value;
        filtrarBotones(u,criteriosBotones.Saludable)
        vecesSalu=2
    }
    else if (vecesSalu==2) {
        console.log('filtro Saludable quitado');
        btnSaludable.style.backgroundColor ="";
        btnSaludable.style.color="";
        vecesSalu=1
        criteriosBotones.Saludable=""
        filtarQuitados()
    }
})
btnPanade.addEventListener("click",(e)=>{
    if (vecesPan==1) {
        const u =hayBotonActivo(criteriosBotones);
        btnPanade.style.backgroundColor ="#2E2E2E";
        btnPanade.style.color="#141313";
        criteriosBotones.Panade=e.target.value;
        filtrarBotones(u,criteriosBotones.Panade)
        vecesPan=2
    }
    else if (vecesPan==2) {
        console.log('filtro Panade quitado');
        btnPanade.style.backgroundColor ="";
        btnPanade.style.color="";
        vecesPan=1
        criteriosBotones.Panade=""
        filtarQuitados()
    }
})
export function limpiarStyle(){
    btnHistoria.style.backgroundColor ="";        btnHistoria.style.color="";
    btnCultura.style.backgroundColor ="";         btnCultura.style.color="";
    btnNaturaleza.style.backgroundColor ="";      btnNaturaleza.style.color="";
    btnArqui.style.backgroundColor ="";           btnArqui.style.color="";
    btnReligion.style.backgroundColor ="";        btnReligion.style.color="";
    btnArte.style.backgroundColor ="";            btnArte.style.color="";
    btnAntig.style.backgroundColor ="";           btnAntig.style.color="";
    btnOtros.style.backgroundColor ="";           btnOtros.style.color="";
    btnMuseo.style.backgroundColor ="";           btnMuseo.style.color="";
    btnCemen.style.backgroundColor ="";           btnCemen.style.color="";
    btnParque.style.backgroundColor ="";          btnParque.style.color="";
    btnaPlaza.style.backgroundColor ="";          btnaPlaza.style.color="";
    btnMirador.style.backgroundColor ="";         btnMirador.style.color="";
    btnBar.style.backgroundColor ="";             btnBar.style.color="";
    btnCafeteria.style.backgroundColor ="";       btnCafeteria.style.color="";
    btnBiblio.style.backgroundColor ="";          btnBiblio.style.color="";
    btnIglesia.style.backgroundColor ="";         btnIglesia.style.color="";
    btnMontaña.style.backgroundColor ="";         btnMontaña.style.color="";
    btnRio.style.backgroundColor ="";             btnRio.style.color="";
    btnBosque.style.backgroundColor ="";          btnBosque.style.color="";
    btnNocturno.style.backgroundColor ="";        btnNocturno.style.color="";
    btnActividades.style.backgroundColor ="";     btnActividades.style.color="";
    btnHospedajes.style.backgroundColor ="";      btnHospedajes.style.color="";
    btnLugares.style.backgroundColor ="";         btnLugares.style.color="";
    btnGatronomia.style.backgroundColor ="";      btnGatronomia.style.color="";
    btnInternacional.style.backgroundColor ="";   btnInternacional.style.color="";
    btnDeporte.style.backgroundColor ="";         btnDeporte.style.color="";
    btnLujo.style.backgroundColor ="";            btnLujo.style.color="";
    btnAventura.style.backgroundColor ="";        btnAventura.style.color="";
    btnRelax.style.backgroundColor ="";           btnRelax.style.color="";
    btnCompras.style.backgroundColor ="";         btnCompras.style.color="";
    btnSocial.style.backgroundColor ="";          btnSocial.style.color="";
    btnLocal.style.backgroundColor ="";           btnLocal.style.color="";
    btnCallejera.style.backgroundColor ="";       btnCallejera.style.color="";
    btnSaludable.style.backgroundColor ="";       btnSaludable.style.color="";
    btnPanade.style.backgroundColor ="";          btnPanade.style.color="";
}


/*----------Apartado Main-----------*/
export const clickCementerio=document.getElementById('Cementerio-Museo-de-San-Pedro')
export const clickPalacio =document.getElementById('Palacio-de-la-cultura-Rafael-Ubire')
export const clickMuseo =document.getElementById('Museo-Casa-de-la-Memoria')
export const clickBasilica =document.getElementById('Basílica-de-Nuestra-Señora-de-la-Candelaria')
export const clickCastillo =document.getElementById('Museo-el-Castillo')
export const clickBerrio=document.getElementById('Parque-Berrío')
export const clickBotanico=document.getElementById('Jardin-Botánico')
export const clickArvi=document.getElementById('Parque-Arví')
export const clickBad=document.getElementById('Bad-Burgers')
export const clickPicacho=document.getElementById('Cerro-el-Picacho')
export const clickALaurales=document.getElementById('Alojamiento-laureles-estadio-Medellín')
 




/*-------------------------Apartado lugares--------------------- */