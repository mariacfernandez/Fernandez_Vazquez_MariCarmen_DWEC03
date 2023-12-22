document.addEventListener('DOMContentLoaded', function () {
  
  arrayCartasDificil.sort(() => 0.5 - Math.random())
  arrayCartasMedio.sort(() => 0.5 - Math.random())
  arrayCartasFacil.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')

  let cartasElegidas = []
  let cartasElegidasId = []
  let cartasWon = []
  let arrayCartas = []
  let intentos = 0
 
  //crear tablero
  function crearTablero(numImg,tipoArray) {
    console.log('numero'+ numImg)
    for (let i = 0; i < numImg; i++) {
     console.log('crea tablero:' + i)
      const carta = document.createElement('img')
      carta.setAttribute('src', 'images/carta.png')
      carta.setAttribute('data-id', i)
      carta.addEventListener('click', seleccionarCarta)
      grid.appendChild(carta)
    }
  }

  //comprobar parejas
  function comprobarParejas() {
    const cartas = document.querySelectorAll('img')
    const opcionUnoId = cartasElegidasId[0]
    const opcionDosId = cartasElegidasId[1]
    
    if(opcionUnoId == opcionDosId) {
      cartas[opcionUnoId].setAttribute('src', 'images/carta.png')
      cartas[opcionDosId].setAttribute('src', 'images/carta.png')
      alert('¡Has pinchado la misma carta!')
    }
    else if (cartasElegidas[0] === cartasElegidas[1]) {
      alert('Bien hecho')
      cartas[opcionUnoId].setAttribute('src', 'images/blanca.png')
      cartas[opcionDosId].setAttribute('src', 'images/blanca.png')
      cartas[opcionUnoId].removeEventListener('click', seleccionarCarta)
      cartas[opcionDosId].removeEventListener('click', seleccionarCarta)
      
      cartasWon.push(cartasElegidas[0])
      console.log(cartasWon.length)
      intentos ++
    } else {
      cartas[opcionUnoId].setAttribute('src', 'images/carta.png')
      cartas[opcionDosId].setAttribute('src', 'images/carta.png')
      intentos ++
      alert('Mala suerte, prueba otra vez')
    }
    cartasElegidas = []
    cartasElegidasId = []
    resultDisplay.textContent = cartasWon.length
    intenDisplay.textContent = intentos
    if  (cartasWon.length === arrayCartas.length/2) {
      resultDisplay.textContent = '¡Felicidades! ¡Has encontrado todas las parejas!'
    }
  }

  //seleccionar carta
  function seleccionarCarta() {
    let cartaId = this.getAttribute('data-id')
    cartasElegidas.push(arrayCartas[cartaId].nombre)
    cartasElegidasId.push(cartaId)
    this.setAttribute('src', arrayCartas[cartaId].img)
    if (cartasElegidas.length ===2) {
      setTimeout(comprobarParejas, 500)
    }
  }

 
 console.log ('antes de nivel de dificultad')

 
  //NIVEL DIFICULTAD
	let modal = document.getElementById("dificultadBtn");
  console.log('modal:'+ modal);
	let buttons = modal.childNodes;
	buttons.forEach(button => {
		button.onclick = dificultad;
	});

  function dificultad() {
    // Limpiar partida
    grid.innerHTML = '';
    resultDisplay.textContent = 0;
    intenDisplay.textContent = 0;
    intentos=0;
    switch (this.id) {
      case "facil":
        console.log('facil')
        arrayCartas = arrayCartasFacil;
        crearTablero(8,arrayCartasFacil);
        break;
      case "medio":
        console.log('medio')
        arrayCartas = arrayCartasMedio;
        crearTablero(12,arrayCartasMedio);
        break;
      case "dificil":
        console.log(dificil)
        arrayCartas = arrayCartasDificil;
        crearTablero(16,arrayCartasDificil);
        break;
    }
    document.getElementById("modal").setAttribute("class", "hide");
  }
});
