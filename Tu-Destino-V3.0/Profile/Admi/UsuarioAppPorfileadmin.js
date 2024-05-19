// importacion de URLs
// 16
import{
    UrlUser,
    get,
    deleteHttp,
} from"../../Generic/ScriptGEneric/apiConnection.js"

// funcion de limpieza 
//17

function limpieza() {
    const contenedor = document.getElementById("listUser");
    contenedor.innerHTML = ``;
    console.log("se limpio correctamente");
}

// seleccion vista usuario 
// 18

const vistaUser = document.getElementById("viewAdmi3");

vistaUser.addEventListener("click",()=>{
    inyecctionUser();
})

// inyeccion de usuarios
// 19

async function inyecctionUser(){
    const users = await get(UrlUser);
    const padre = document.getElementById("listUser")
    limpieza();
    await users.forEach((userCard) => {
        const{
            email,
            name,
            id,
        } = userCard

        const hijo = document.createElement("div");
    
        const usuarioHtml = `
        <div class="public">
        <div>
          <div class="infoPlaceT infoPublic">
            <label class="infoPlace_name" id="infoUser_name"> ${name}</label>
            <label class="infoPlace_text"  id="infoUser_id"> email: ${email}</label>
          </div>
        </div>
        
        <div>
          <div class="btnUser">
            <button class="btnDelete_place btnDelete_user" id="btnDelete_user" value="${id}">🗑️</button>
          </div>
        </div>   
      </div>
        `
    hijo.innerHTML = usuarioHtml;
    padre.appendChild(hijo) 
    
    });

    console.log("se inyecto correctamente");

    const btnBorrarUser = document.querySelectorAll(".btnDelete_user")

    btnBorrarUser.forEach( (borrar) => {
        borrar.addEventListener("click",async () => {
          console.log("entro al boton");
          await eliminarUsuario(borrar.value);
          console.log("value" + borrar.value);
        });
      });
}

// eliminar usuario
// 20


async function eliminarUsuario(id_user){
    let confirmar = confirm("Seguro que deseas eliminar este usuario?")
    if (confirmar == true){
        await deleteHttp(UrlUser + `/${id_user}`)
        await inyecctionUser()
        console.log("usuario eliminado");
    }else{
        console.log("usuario no eliminado");
    }
} 
