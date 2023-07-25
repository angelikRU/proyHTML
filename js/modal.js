/*este código agrega un evento de clic a todas las imágenes con la clase "gallery_img". 
Cuando se hace clic en una de las imágenes, se muestra un modal que contiene la imagen ampliada. 
Al hacer clic en el botón dentro del modal, el modal se cierra y se oculta nuevamente. La clase "modal-open" 
se utiliza para controlar la visibilidad del modal mediante el método toggle para mostrar y 
ocultar el modal en función de su presencia o ausencia en el elemento.*/


let imagenes = document.querySelectorAll('.gallery_img');// Obtener todas las imágenes con la clase "gallery_img"
let modal = document.querySelector('#modal');// Obtener el modal y los elementos dentro del modal
let img = document.querySelector('#modal_img');
let boton = document.querySelector('#modal_boton');

// Agregar un evento de clic a cada imagen en la galería
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function(e) {
    // Mostrar u ocultar el modal alternando la clase "modal-open"   
   modal.classList.toggle("modal-open");
     // Establecer la fuente de la imagen en el modal a la misma que se hizo clic
   img.setAttribute("src", e.target.src);
  });
}
// Agregar un evento de clic al botón dentro del moda
boton.addEventListener('click', function() {
  // Cierra el modal eliminando la clase "modal-open"
modal.classList.remove("modal-open");
});
