//  Html selectors
const labeles = document.querySelectorAll(".infoV");
const inputs = document.querySelectorAll(".update");
const btnSummit = document.getElementById("BtnSummit");
const btnEdit = document.getElementById("BtnUpdate");
const Iname = document.getElementById("IName");
const IEmail = document.getElementById("IEmail");
const IPass = document.getElementById("IPass");
const searchUser = document.getElementById("searchUser");
const btnSearch = document.getElementById("btnSearch");
const btnCreateLugar = document.getElementById("create_place"); //6
const formulario = document.getElementById("CVA5"); //6
const principal = document.getElementById("CVA4"); // 6
//Events
btnEdit.addEventListener("click", () => {
  labeles.forEach((labe) => {
    labe.style.display = "none";
  });
  btnEdit.style.display = "none";
  inputs.forEach((ite) => {
    ite.style.display = "flex";
  });
  btnSummit.style.display = "block";
});


// ocultar el formulario por defecto
// 6
const dom = document.addEventListener(`DOMContentLoaded`, () => {
  formulario.style.display = "none";
});

const admi = {
  name: "",
  email: "",
  password: "",
};
const search = {
  user: "",
};

btnSummit.addEventListener("click", () => {
  admi.name = Iname.value;
  admi.email = IEmail.value;
  admi.password = IPass.value;
  btnSummit.style.display = "none";
  inputs.forEach((ite) => {
    ite.style.display = "none";
  });

  labeles.forEach((labe) => {
    labe.style.display = "block";
  });
  btnEdit.style.display = "block";
  console.log(admi);
});

btnSearch.addEventListener("click", () => {
  search.user = searchUser.value;
  searchUser.value = "";
  console.log(search);
});

// Funcion boton crear lugar
// 6
btnCreateLugar.addEventListener("click", () => {
  principal.style.display = "none";
  formulario.style.display = "flex";
  console.log("boton");
});
