/*********************************************************************
 * Archivo: linkdetails.js *
 * Descripción: Este módulo de JavaScript no obstruviso añade *
 * manejadores de evento a los enlaces presentes en *
 * el documento de modo que muestren textos de ayuda *
 * cuando el ratón se posicione encima de éstos por *
 * un tiempo de medio segundo. *
 * Si el enlace apunta a un documento en el mismo *
 * servidor el texto de ayuda incluirá el tipo, tamaño *
 * y fecha obtenidos con una petición XMLHttpRequest *
 * *
 * Information: Este módulo requiere los módulos tooltip.js, *
 * HTTP.js, y geometry.js que se proporcionan *
 * en la carpeta de recursos de la guía. *
 *********************************************************************/
(function() { // Función anómina que engloba toda la lógica del script
    // Creación del objeto Tooltip que usaremos
    var tooltip = new Tooltip();
    // Asociar los manejadores de evento del evento load para que
    // se llame a la función init() al cargarse el documento
    if(window.addEventListener){
    window.addEventListener("load", init, false);
    }
    else if (window.attachEvent){
    window.attachEvent("onload", init);
    }
    // Función init() que será llamada cuando el documento haya cargado
    function init() {
    var links = document.getElementsByTagName('a');
    // Ciclo for con el que se recorren todos los enlaces de la página web
    // y se les agrega el manejador de evento correspondiente
    for(var i = 0; i < links.length; i++){
    if(links[i].href) addTooltipToLink(links[i]);
    }
    }
    // Función que agrega los manejadores de eventos a los enlaces
    // enviados como argumentos
    function addTooltipToLink(link) {
    // Agregando los manejadores de eventos
    if(link.addEventListener) { // Técnica estándar
    link.addEventListener("mouseover", mouseover, false);
    link.addEventListener("mouseout", mouseout, false);
    }
    else if(link.attachEvent) { // Técnica específica para IE
    link.attachEvent("onmouseover", mouseover);
    link.attachEvent("onmouseout", mouseout);
    }
    // Se usará esta variable con setTimeout/clearTimeout
    var timer;
    function mouseover(event) {
    // Menejo de evento de ratón para cualquier navegador
    var e = event || window.event;
    // Obtener las posiciones específicas del ratón
    // cuando se posicione encima de los enlaces convirtiendo
    // a coordenadas del documento añadiendo un desplazamiento (offset)
    var x = e.clientX + Geometry.getHorizontalScroll() + 20;
    var y = e.clientY + Geometry.getVerticalScroll() + 12;
    // Si existe algún tooltip pendiente de cancelar se limpia
    if(timer) window.clearTimeout(timer);
   // Programar el tooltip para que aparezca hasta transcurrido medio segundo
    timer = window.setTimeout(showTooltip, 500);
    function showTooltip() {
    // If it is an HTTP link, and if it is from the same host
    // as this script is, we can use XMLHttpRequest
    // to get more information about it.
   if(link.protocol == "http:" && link.host == location.host) {
    // Make an XMLHttpRequest for the headers of the link
    HTTP.getHeaders(link.href, function(headers) {
    // Usar encabezados HTTP para construir
    // la cadena de texto con la información
    var tip = "URL: " + link.href + "<br>" +
    "Type: " + headers["Content-Type"] + "<br>" +
    "Size: " + headers["Content-Length"] + "<br>" +
    "Date: " + headers["Last-Modified"];
    // Desplegar el texto anterior como un tooltip
    tooltip.show(tip, x, y);
    });
    }
    else {
    // Otherwise, if it is an offsite link, the
    // tooltip is just the URL of the link
    tooltip.show("URL: " + link.href, x, y);
    }
    }
    }
    function mouseout(e) {
    // Cuando el ratón se retire de encima del enlace, clear any
   // limpiar cualquier tooltip pendiente o esconderlo si se está mostrando
    if (timer) window.clearTimeout(timer);
    timer = null;
    tooltip.hide();
    }
    }
   })();
   