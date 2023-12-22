
console.log('entra en autenticar')
// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Ruta al archivo JSON local
  const filePath = "model/usuarios.json";

  // Realizar una solicitud HTTP para cargar el archivo JSON
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Analizar el contenido JSON
          const jsonData = JSON.parse(xhr.responseText);

          // Almacenar en el LocalStorage
          localStorage.setItem("datos", JSON.stringify(jsonData));

          console.log("Datos cargados en el LocalStorage:", jsonData);
      }
  };

  // Abrir y enviar la solicitud
  xhr.open("GET", filePath, true);
  xhr.send();
});

// Verificar si hay datos almacenados
if (storedData) {
    // Analizar los datos JSON
    const usersData = JSON.parse(storedData);

    // Obtener el formulario y sus valores
    const form = document.getElementById("miFormulario"); // Reemplaza "miFormulario" con el ID de tu formulario
    const inputUsuario = form.querySelector('input[name="usuario"]').value;
    const inputContraseña = form.querySelector('input[name="contraseña"]').value;

    // Validar usuario y contraseña
    const usuarioValido = usersData.some(user => user.usuario === inputUsuario && user.contraseña === inputContraseña);

    if (usuarioValido) {
        console.log("Credenciales válidas. Acceso permitido.");
        // Realizar acciones después de la validación exitosa
    } else {
        console.log("Credenciales inválidas. Acceso denegado.");
        // Realizar acciones después de la validación fallida
    }
} else {
    console.log("No hay datos almacenados en el LocalStorage.");
}

//************************************************************************//

// Función para validar las credenciales
// 
function validarCredenciales() {
  // Obtener los datos del LocalStorage
  const storedData = localStorage.getItem("datos");

  // Verificar si hay datos almacenados
  if (storedData) {
      // Analizar los datos JSON
      const usersData = JSON.parse(storedData);
      
      // Obtener los valores del formulario
      const inputUsuario = document.getElementById("usuario").value;
      const inputContrasena = document.getElementById("contrasena").value;
      const botonNoregistrado = document.getElementById("usuarioNoreg")
       
      // Validar las credenciales
      const credencialesValidas = usersData.some(user =>
          user.usuario === inputUsuario && user.contraseña === inputContrasena
      );

      if (credencialesValidas) {
          alert("Credenciales válidas. Acceso permitido.");
          botonNoregistrado.style.backgroundColor = "white";
          botonNoregistrado.innerHTML = " ";
          window.location.href = 'tablero.html';
      } else {
          alert("Credenciales inválidas. Acceso denegado.");
          botonNoregistrado.style.backgroundColor = "red";
          botonNoregistrado.innerHTML = "El usuario no está registrado";
      }
  } else {
      alert("No hay datos almacenados en el LocalStorage.");
  }

  // Evitar que el formulario se envíe
  return false;
}

 
    