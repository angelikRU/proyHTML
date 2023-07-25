/*este código realiza una acción cuando el botón con el identificador "btnmenu" es clicado.
 Cuando el botón se hace clic, la función toggle es utilizada para agregar o eliminar la clase "mostrar"
  en el elemento con el identificador "menu". Esto significa que al hacer clic en el botón, 
  el menú tendrá su visibilidad alternada, es decir, si la clase "mostrar" está presente, 
  se ocultará; si está ausente, se mostrará. De esta manera, el código crea un efecto de 
  mostrar/ocultar el menú cuando se hace clic en el botón.*/



/*let btnMenu = document.getElemtById('btnmenu');
let menu = document.getElemtById('menu');
btnMenu.btnMenuaddEventListener('click', function(){
	'use strict';
menu.classList.toogle('mostrar');
});
*/
document.getElementById("btnmenu").addEventListener("click", function(){/*Agregar un evento de clic al elemento con el identificador "btnmenu"*/
"use strict";
document.getElementById("menu").classList.toggle("mostrar");
});
