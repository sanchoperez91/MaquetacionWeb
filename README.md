# MaquetacionWeb
# Gestor de Imágenes HTML

## Descripción

Este proyecto consiste en una aplicación web simple diseñada en HTML y JavaScript que permite a los usuarios seleccionar imágenes de una lista y mostrar la imagen seleccionada junto con un destino elegido. Utiliza conceptos de manipulación del DOM, incluyendo métodos como `innerText`, `setAttribute` y `getElementById`.

## Características

- **Selección de Imágenes**: Los usuarios pueden hacer clic en las imágenes de la lista para seleccionarlas.
- **Elección de Destinos**: Se puede elegir un destino de un menú desplegable.
- **Visualización Dinámica**: Al seleccionar una imagen y un destino, se muestra la imagen correspondiente con su texto descriptivo.
- **Interactividad**: Utiliza eventos de JavaScript para actualizar el contenido dinámicamente en la página.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Estructura del Proyecto

El proyecto consta de un solo archivo HTML que incluye:

- Un **array** para almacenar las imágenes y sus descripciones.
- Funciones JavaScript que utilizan métodos como:
  - `innerText`: Para actualizar el texto descriptivo de la imagen seleccionada.
  - `setAttribute`: Para modificar el atributo `src` de la imagen que se mostrará.
  - `getElementById`: Para acceder a elementos del DOM y modificar su contenido.

## Cómo Usar

1. Clona el repositorio o descarga el archivo HTML.
2. Abre el archivo HTML en un navegador web.
3. Haz clic en una imagen de la lista para seleccionarla.
4. Selecciona un destino del menú desplegable.
5. Observa cómo se actualiza la imagen mostrada y su descripción.

## Ejemplo de Código

Aquí hay un fragmento del código JavaScript utilizado para la selección de imágenes y la actualización del DOM:

```javascript
const images = [
    { src: "https://via.placeholder.com/150?text=Imagen+1", text: "Imagen 1 - Playa" },
    { src: "https://via.placeholder.com/150?text=Imagen+2", text: "Imagen 2 - Montaña" },
    { src: "https://via.placeholder.com/150?text=Imagen+3", text: "Imagen 3 - Ciudad" }
];

function selectImage(index) {
    selectedIndex = index;
    updateImage();
}

function updateImage() {
    const destination = document.getElementById("destination").value;
    const imageText = document.getElementById("imageText");
    const displayedImage = document.getElementById("displayedImage");

    if (selectedIndex !== -1 && destination) {
        imageText.innerText = images[selectedIndex].text + " - Destino: " + destination;
        displayedImage.setAttribute("src", images[selectedIndex].src);
        displayedImage.style.display = "block";
    } else {
        imageText.innerText = "";
        displayedImage.style.display = "none";
    }
}
