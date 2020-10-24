/*Geometry.js portatil funciona por consultas de ventana y geometria del documento
Este modulo define la funcion para consultas de ventana  y geometria del documento

getWindowX/Y(): retorna la posicion de la ventana en la pantalla
getViewporWidth/Height(): retorna el tamaño del area de viewport del buscador

getHorizontalScroll(): retorna la posicion del scroll horizontal

getVerticalScroll(): retorna la posicion del scroll vertical

NOTA: No hay forma portable de hacer una consulta de toda la ventana del 
buscador, por eso no hay funcion  getWindowWidth/Height() 

IMPORTANTE: Este modulo se debe incluir en el <body> del documento en lugar
de en el <head>*/

var Geometry={};
console.log("Al inicio de Geometry");
/*Funcion para Internet Explorer y otros */
if (window.screenLeft) {
    Geometry.getWindowX=function(){return window.screenLeft;};
    Geometry.getWindowY=function(){return window.screenTop;};
}
/*Funcion para FireFox y otros */
else if(window.screenX){
    Geometry.getWindowX=function(){return window.screenX;};
    Geometry.getWindowY=function(){return window.screenY;};
}
/*Todos los navegadores a excepcion de Internet Explorer */
if (window.innerWidth) {
    Geometry.getViewportWidth=function(){return window.innerWidth;};
    Geometry.getViewportHeight=function(){return window.innerHeight;};
    Geometry.getHorizontalScroll=function(){return window.pageXOffset;};
    Geometry.getVerticalScroll=function(){return window.pageYOffset;};
}
/*Funciones para Internet Explorer 6 cuando hay un DOCTYPE */
else if(document.documentElement&& document.documentElement.clientWidth){
    Geometry.getViewportWidth=function(){return document.documentElement.clientWidth;};
    Geometry.getViewportHeight=function(){return document.documentElement.clientHeight;};
    Geometry.getHorizontalScroll=function(){return document.documentElement.scrollLeft;};
    Geometry.getVerticalScroll=function(){return document.documentElement.scrollTop;};
}
/*Funciones para Internet Explorer 4,5 y 6 sin un DOCTYPE */
else if(document.body.clientWidth){
    Geometry.getViewportWidth=function(){return document.body.clientWidth;};
    Geometry.getViewportHeight=function(){return document.body.clientHeight;};
    Geometry.getHorizontalScroll=function(){return document.body.scrollLeft;};
    Geometry.getVerticalScroll=function(){return document.body.scrollTop;};
}

/*Funciones que retornan el tamaño de un documento. Estas no son ventanas relacionas, pero son utiles
de tener aqui de todas maneras */
if (document.documentElement&&document.documentElement.scrollWidth) {
    Geometry.getDocumentWidth=function(){return document.documentElement.scrollWidth;};
    Geometry.getDocumentHeight=function(){return document.documentElement.scrollHeight;};
} else if(document.body.scrollWidth){
    Geometry.getDocumentWidth=function(){return document.body.scrollWidth;};
    Geometry.getDocumentHeight=function(){return document.body.scrollHeight;};
}