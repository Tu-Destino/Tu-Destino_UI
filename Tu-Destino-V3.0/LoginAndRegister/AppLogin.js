
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


const Register = async (e) => {
    e.preventDefault();

    const formData = {
        username: usernameRegister.value,
        email: emailRegister.value,
        password:  passwordRegister.value,
    }

    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const token = await response.json()
      if (response.ok) {
        window.location.href = '../../index.html';
        localStorage.setItem('token', JSON.stringify(token));
        
      }
       else {
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

// buttonRegister.addEventListener('click', Register)
buttonRegister.addEventListener('click', ()=>{
  window.location.href = '../../index.html'
})

const Login = async (e) => {
    e.preventDefault();

    const formData = {
        email: emailLogin.value,
        password:  passwordLogin.value,
    }

    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const token = await response.json()
      if (response.ok) {
        window.location.href = '../../index.html'
        localStorage.setItem('token', JSON.stringify(token));
        
      } else {
        console.error('Error al iniciar sesion');
      }
    } catch (error) {
      console.error('Error al iniciar sesion', error);
    }
  };

//buttonLogin.addEventListener('click', Login)
buttonLogin.addEventListener('click', ()=>{
  window.location.href = '../../index.html'
})



