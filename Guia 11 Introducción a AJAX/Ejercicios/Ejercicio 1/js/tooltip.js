/*Este módulo define una clase Tooltip creando un objeto Tooltip
con el constructor Tooltip(), haciéndolo visible con una llamada
al método show() y ocultándolo con una llamada al método hide().
Debe notar que necesitará crear los estilos apropiados para
mostrar u ocultar apropiadamente el elemento Tooltip. Los
siguientes estilos muestran un ejemplo de cómo hacerlo.

.tooltipShadow{
    background: url(shadow.png); /* translucent shadow * /
}

.tooltipContent{
    left: -4px; top: -4px; /* how much of the shadow shows * /
    background-color: #ff0; /* yellow background * /
    border: solid black 1px; /* thin black border * /
    padding: 5px; /* spacing between text and border * /
    font: bold 10pt sans-serif; /* small bold font * /
}

En navegadores que soportan imágenes PNP transparentes es posible
mostrar sombras con transparencia. Otros navegadores deberán usar
colores sólidos o simular transparencia con un GIF interpolado
alterne píxeles sólidos y transparentes.
*/

/*Metodo constructor para la clase Tooltip */
console.log("Al inicio de Tooltip");
function Tooltip(){
    /*Crear un div para una sombra */
    this.tooltip=document.createElement("div");
    /*Posicion absolute */
    this.tooltip.style.position="absolute";
    /*Empieza oculto para cambiarlo */
    this.tooltip.style.visibility="hidden";
    this.tooltip.className="tooltipShadow";

    /*Crear un div para el contenido */
    this.content=document.createElement("div");
    /*Posicion relativa */
    this.content.style.position="relative";
    this.content.className="tooltipContent";

    /*Añadir el div Content al Div Sombra */
    this.tooltip.appendChild(this.content);
}

/*Establecer el Tooltip para mostrarlo */
Tooltip.prototype.show=function(text,x,y){
    /*Inicializar el texto del tooltip */
    this.content.innerHTML=text;
    /*Su posicion */
    this.tooltip.style.left=x+"px";
    this.tooltip.style.top=y+"px";
    /*Ahora es visible */
    this.tooltip.style.visibility="visible";
    /*Añadirlo al documento si no se ha agregado antes */
    if (this.tooltip.parentNode!=document.body) {
        document.body.appendChild(this.tooltip);
    }
};

/*Esconder el Tooltip */
Tooltip.prototype.hide=function(){
    /*Hacer invisible */
    this.tooltip.style.visibility="hidden";
};