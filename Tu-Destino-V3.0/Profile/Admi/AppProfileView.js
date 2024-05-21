// Selectors 

//Option selectors with their respective views
const viewAdmi1 = document.getElementById("viewAdmi1");
const CVA1 = document.getElementById("CVA1");
const viewAdmi2 = document.getElementById("viewAdmi2");
const CVA2 = document.getElementById("CVA2");
const viewAdmi3 = document.getElementById("viewAdmi3");
const CVA3 = document.getElementById("CVA3");
const viewAdmi4 = document.getElementById("viewAdmi4");
const CVA4 = document.getElementById("CVA4");
const formularios = document.getElementById("CVA5") //6
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
  CVA3.style.display="none";
  CVA4.style.display="none";
  formularios.style.display="none" //6
});

viewAdmi2.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="flex";
  CVA3.style.display="none";
  CVA4.style.display="none";
  formularios.style.display="none" //6
});

viewAdmi3.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="none";
  CVA3.style.display="flex";
  CVA4.style.display="none";
  formularios.style.display="none" //6
});

viewAdmi4.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="none";
  CVA3.style.display="none";
  CVA4.style.display="flex";
  formularios.style.display="none" //6
});

//artisanal modal
//Selector
const modal = document.getElementById("modelAl");


// profile 
