/*********************************************************************
 * Tooltip.js: simple CSS tooltips with drop shadows. *
 * *
 * Este módulo define una clase Tooltip creando un objeto Tooltip *
 * con el constructor Tooltip(), haciéndolo visible con una llamada *
 * al método show() y ocultándolo con una llamada al método hide(). *
 * *
 * Debe notar que necesitará crear los estilos apropiados para *
 * mostrar u ocultar apropiadamente el elemento Tooltip. Los *
 * siguientes estilos muestran un ejemplo de cómo hacerlo. *
 * .tooltipShadow {
 * background: url(shadow.png); /* translucent shadow * / *
 * } *
 * *
 * .tooltipContent { *
 * left: -4px; top: -4px; /* how much of the shadow shows * /
 * background-color: #ff0; /* yellow background * /
 * border: solid black 1px; /* thin black border * /
 * padding: 5px; /* spacing between text and border * /
 * font: bold 10pt sans-serif; /* small bold font * /
 * } *
 * *
 * En navegadores que soportan imágenes PNP transparentes es posible *
 * mostrar sombras con transparencia. Otros navegadores deberán usar *
 * colores sólidos o simular transparencia con un GIF interpolado *
 * alterne píxeles sólidos y transparentes. *
 *********************************************************************/
// Método constructor para la clase Tooltip
function Tooltip() {
    this.tooltip = document.createElement("div"); // create div for shadow
    this.tooltip.style.position = "absolute"; // absolutely positioned
    this.tooltip.style.visibility = "hidden"; // starts off hidden
    this.tooltip.className = "tooltipShadow"; // so we can style it
    this.content = document.createElement("div"); // create div for content
    this.content.style.position = "relative"; // relatively positioned
    this.content.className = "tooltipContent"; // so we can style it
    this.tooltip.appendChild(this.content); // add content to shadow
   }
   // Establecer el contenido y posición del Tooltip y, luego, mostrarlo
   Tooltip.prototype.show = function(text, x, y) {
    this.content.innerHTML = text; // Set the text of the tooltip.
    this.tooltip.style.left = x + "px"; // Set the position.
    this.tooltip.style.top = y + "px";
    this.tooltip.style.visibility = "visible"; // Make it visible.
    // Add the tooltip to the document if it has not been added before
    if (this.tooltip.parentNode != document.body)
    document.body.appendChild(this.tooltip);
   };
   // Esconder el Tooltip
   Tooltip.prototype.hide = function() {
    this.tooltip.style.visibility = "hidden"; // Hacerlo invisible.
   };