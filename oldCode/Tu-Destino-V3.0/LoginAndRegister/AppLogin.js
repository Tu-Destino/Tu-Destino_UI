
 import { UrlUser, post } from '../Generic/ScriptGEneric/apiConnection.js';


 const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const inputs = document.querySelectorAll('input');
const buttonLogin = document.getElementById('buttonLogin')
const buttonRegister = document.getElementById('buttonRegister')
const usernameRegister = document.getElementById('usernameRegister');
const emailRegister  = document.getElementById('emailRegister')
const passwordRegister = document.getElementById('passwordRegister')
const emailLogin = document.getElementById('emailLogin')
const passwordLogin = document.getElementById('passwordLogin')
loginBtn.addEventListener('click',()=>{
    container.classList.add('active');
    inputs.forEach(input => {
        input.value = "";
    })
});
registerBtn.addEventListener('click',()=>{
    container.classList.remove('active');
    inputs.forEach(input => {
        input.value = "";
        
    })
});

function decodeToken(token) {
  try {
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      const user ={ 
        rol: decodedToken.role,
        id:decodedToken.id,
        email:decodedToken.email
      } // Cambia 'id' por el nombre del campo que contiene el ID en tu token
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
      console.error('Error al decodificar el token:', error);
  }
}
function redireccion(){
  const user = JSON.parse(localStorage.getItem('user'));

  if (user==null) {
     alert('Correo / password incorrectos')
  }else{
if (user.rol=="user") {
  window.location.href = '../../index.html'
} else if (user.rol=="admin") {
  window.location.href = '../Profile/Admi/profileView.html'
}else if(user.rol=="superAdmin"){
  window.location.href = '../Profile/Admi/profileView.html'
}
}
}
async function addUser(){
  const user =JSON.parse(localStorage.getItem('user'));
  const newUser={
    name: user.username,
    email: user.email,
    password:user.password,
    enum_rol: "USER",
    coolies_id:"6"
  }
  const isAdd= await post(UrlUser, newUser);
  if (isAdd) {
    alert('Usuario creado correctamente')
  }else{
    alert('No se pudo crear el usuario')
  } 
}
function cleanStorage(){
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}


const Register = async (e) => {
    e.preventDefault();

    const formData = {
        username: usernameRegister.value,
        email: emailRegister.value,
        password:  passwordRegister.value,
    }

    try {
      cleanStorage()
      const response = await fetch('http://localhost:3000/v1/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const accesToken = await response.json()
      const token= accesToken.access_token
      if (response.ok) {
        decodeToken(token);
        await addUser();
        redireccion();
        localStorage.setItem('token', JSON.stringify(token));
        
      }
       else {
        redireccion();
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

buttonRegister.addEventListener('click', Register)
// buttonRegister.addEventListener('click', ()=>{
//   window.location.href = '../../index.html'
// })

const Login = async (e) => {
    e.preventDefault();

    const formData = {
        email: emailLogin.value,
        password:  passwordLogin.value,
    }

    try {
      cleanStorage()
      const response = await fetch('http://localhost:3000/v1/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const accesToken = await response.json()
      const token= accesToken.access_token
      if (response.ok) {
        decodeToken(token);
        redireccion();
        localStorage.setItem('token', JSON.stringify(token));
        
      } else {
        redireccion();
        console.error('Error al iniciar sesion');
      }
    } catch (error) {
      redireccion();
      console.error('Error al iniciar sesion', error);
    }
  };

buttonLogin.addEventListener('click', Login)



