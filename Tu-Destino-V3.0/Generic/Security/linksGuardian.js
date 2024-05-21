

var autenticadoLog = false;

export function validarToken() {

    try {
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
                autenticadoLog = true;
                roll = "user";
                break;
            case "admin":
                console.log("administrador");
                autenticadoLog = true;
                roll = "admin"
                break;
            case "superadmin":
                console.log("super admin");
                autenticadoLog = true;

                roll = "superadmin"
        }
        console.log("lo leeeee");
    
    }else{
        let confirmacion = confirm("Deseas loguearte para acceder a esta funcionalidad?")
        if(confirmacion ==  true){
            window.location.href = '../../LoginAndRegister/ApartadoLoginRegister.html';
        }
    }

    console.log("el rol es",roll);
    console.log(autenticadoLog);

    return autenticadoLog;

        
    } catch (error) {
    }

}    

validarToken();
