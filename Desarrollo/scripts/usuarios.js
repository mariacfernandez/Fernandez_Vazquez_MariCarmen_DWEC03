//e utilizado el script de la unidad anterior para leer el json
console.log('Empieza usuarios')


// definicion de la clase Socio
class Socio {
  constructor( nombre, apellido) {
      
      this._nombre = nombre;
      this._apellido = apellido;
      this._usuario = usuario;
      this._passw = passw;
  }

}
// TODO: array para añadir los socios
let arraySocios=[];


/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/usuarios.json'
  
  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
     
      aniadirSociosInicialesArray(data);
    })
  })
}

/* 
metodo para añadir socios al array 
    cuando arranca la pagina web
*/

function aniadirSociosInicialesArray (datosFichero) {
 //cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
 let arrayInterno = [];

 arrayInterno = datosFichero;
 
 for (let i = 0; i < arrayInterno.length; i++) {
 
  let socio = new Socio (arrayInterno[i].nombre,arrayInterno[i].apellido,arrayInterno[i].usuario,arrayInterno[i].passw )
  arraySocios.push(socio);
 
}
}





cargarSociosJSON();


