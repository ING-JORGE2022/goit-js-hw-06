function getRandomHexColor() { 
  // Función para generar un color aleatorio
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// se Obtener referencias a los elementos relevantes del DOM
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

// se Definir función para crear los elementos 
function createBoxes(amount) {
  // Empezar con el tamaño del primer div
  let size = 30;

  // Crear cada elemento y añadirlo a la colección
  for (let i = 0; i < amount; i++) {
    // Crear el nuevo div
    const newDiv = document.createElement('div');

    // Establecer su tamaño y color de fondo
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    // Añadir el nuevo div a la colección
    boxesDiv.appendChild(newDiv);

    // Incrementar el tamaño para el siguiente div
    size += 10;
  }
}

// Definir función para destruir los elementos
function destroyBoxes() {
  // Borrar todos los elementos de la colección
  boxesDiv.innerHTML = '';
}

// Añadir listeners a los botones para crear y destruir los elementos
createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

