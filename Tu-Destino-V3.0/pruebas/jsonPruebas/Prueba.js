
import {UrlBase, deleteHttp ,get} from "./apiConnection.js";
const prueba = {
    name:"ana",
    email:"csebastian@algo",
    password:"1213541",
    enum_rol:"USER",
    cookies_id: "1"
}

console.log("holasd");


get(UrlBase+"user")
