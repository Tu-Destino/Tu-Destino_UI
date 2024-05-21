
export const UrlBase = "https://tu-destino-business-logic.onrender.com/";
export const UrlComent = "https://tu-destino-business-logic.onrender.com/comment";
export const UrlPost = "https://tu-destino-business-logic.onrender.com/postDiscover";
export const UrlUser= "https://tu-destino-business-logic.onrender.com/user";
export const UrlPlace= "https://tu-destino-business-logic.onrender.com/place";
export const UrlPublication= "https://tu-destino-business-logic.onrender.com/publication";



export async function post(url,info){
    let isPost= false;
    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(info) 
        });
        const data = await response.json();
        if(data.status=="BAD_REQUEST"){
        isPost= false;
        console.log(data);
        }else{
        isPost=true;
        }


    } catch (error) {
        console.log(error);
        isPost= false;
    }
    console.log(isPost);
    return isPost
}

// READ - OBTENER DATOS DEL JSON
export async function get(url){
let varia;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        varia= data;
    } catch (error) {
        console.error(error);
    }
    return varia;
};

// METODO UPDATE - para actualizar datos de la base de datos json
export async function update (url,info){
    let isPost= false;
    try {
        const response = await  fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(info),
        });
        const data = response.json();
        if(data.status=="BAD_REQUEST"){
            isPost= false;
            console.log(data);
            }else{
            isPost=true;
            console.log(await data);
            }
    } catch (error) {
        console.error(error);
    }
    return isPost
}


// METODO DELETE - REcibe la URL de lo que se va a borrar, concatendad con el id
export async function deleteHttp(url){
    let isPost= false;
    try {
        const response = await fetch(url,{
            method: "DELETE",
        });
        const data = await response.json();
        if(data.status=="BAD_REQUEST"){
            isPost= false;
            console.log(data);
            }else{
            isPost=true;
            }
    
    } catch (error) {
        console.error(error);
    }
    return isPost
};
