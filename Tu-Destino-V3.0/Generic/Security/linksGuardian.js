

var autenticadoAdmin = false;
var autenticadoSuper = false;

export function validarToken() {

    var token = localStorage.getItem("token");
    var userLocal = JSON.parse(localStorage.getItem("user"));
    console.log(userLocal);
    console.log(typeof(userLocal));
    console.log(token);  
    console.log(typeof(token));

    if(typeof(token) != null){
        var roll = "";
        switch (userLocal.rol) {
            case "user":
                console.log("usuario");
                autenticadoAdmin = false;
                roll = "user";
                break;
            case "admin":
                console.log("administrador");
                autenticadoAdmin = true;
                roll = "admin"
                break;
            case "superadmin":
                console.log("super admin");
                autenticadoAdmin = true;
                autenticadoSuper = true;
                roll = "superadmin"
        }
        console.log("lo leeeee");
        autenticado = true;
    
    
    }else{
        let confirmacion = confirm("Deseas loguearte para acceder a esta funcionalidad?")
        if(confirm ==  true){
            window.location.href = 'http://127.0.0.1:5500/Tu-Destino-V3.0/LoginAndRegister/ApartadoLoginRegister.html';
        }
    }

    console.log("el rol es",roll);
    console.log(autenticadoAdmin , autenticadoSuper);

    return autenticadoAdmin, autenticadoSuper, roll;
}

validarToken();

export function guardaLinksUser(link){
    console.log(autenticadoAdmin);
    if(autenticadoAdmin == false){ 
        return
    }else{
        console.log("llega hasta el guardian");
    }
}

guardaLinksUser();