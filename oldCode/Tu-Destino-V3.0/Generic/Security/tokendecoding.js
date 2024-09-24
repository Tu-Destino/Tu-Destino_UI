
import {token} from "./lll.js"
import jwt from 'jsonwebtoken';
  // Obtener el token desde localStorage
  
  console.log(token);

  // Clave secreta utilizada para firmar y descifrar el token
  const claveSecreta = "446590b9e48b100ea1746e92e96ab3a6ac83b04e9a2aa0977bae6ef27bbcb686";

  // Verificar si el token existe en localStorage
  if (token) {
    // Descifrar el token
    jwt.verify(token, claveSecreta, (err, decoded) => {
      if (err) {
        console.error('Error al descifrar el token:', err);
      } else {
        console.log('Token descifrado:', decoded);
        // El contenido decodificado del token estará disponible en 'decoded'
      }
    });
  } else {
    console.error('No se encontró un token en localStorage');
  }
