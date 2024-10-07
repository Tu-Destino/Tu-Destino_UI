 function decodeToken(token) {
  try {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub; // Cambia 'id' por el nombre del campo que contiene el ID en tu token
      localStorage.setItem('userId', userId);
  } catch (error) {
      console.error('Error al decodificar el token:', error);
  }
}

async function validateFormLoginStudents() {

  const formDataCoder = {
      document: cedulaCoder.value,
      password: passwordCoder.value,
  }

  try {
      const response = await fetch('http://localhost:3000/v1/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataCoder),
      });

      const accesToken = await response.json()

      const token = accesToken.access_token;

      if (response.ok) {
          decodeToken(token);
          window.location.href = '../Students/HomeStudents/indexHomeEstudents.html'
          localStorage.setItem('token', JSON.stringify(token));
      }
      else {
          console.error('Error al iniciar sesion');
      }
  } catch (error) {
      console.error('Error al iniciar sesion', error);
  }
};