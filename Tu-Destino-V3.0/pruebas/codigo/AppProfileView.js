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

//Events

viewAdmi1.addEventListener("click",() => {
  CVA1.style.display="flex";
  CVA2.style.display="none";
  CVA3.style.display="none";
  CVA4.style.display="none";
});

viewAdmi2.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="flex";
  CVA3.style.display="none";
  CVA4.style.display="none";
});

viewAdmi3.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="none";
  CVA3.style.display="flex";
  CVA4.style.display="none";
});

viewAdmi4.addEventListener("click",() => {
  CVA1.style.display="none";
  CVA2.style.display="none";
  CVA3.style.display="none";
  CVA4.style.display="flex";
});

//artisanal modal
//Selector
const modal = document.getElementById("modelAl");
const btnListPubli = document.getElementById("btnListPubli");
const btnCloseal = document.getElementById("btnCloseAl");
//Events

btnListPubli.addEventListener("click",() => {
  modal.style.display="flex";
});
btnCloseal.addEventListener("click",() => {
  modal.style.display="none";
})

