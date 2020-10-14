/**************************************************************
* drag.js: este script sirve para arrastrar elementos HTML *
* posicionados de forma absoluta. *
* *
* El script define una sola función drag() diseñada para *
* llamarse desde un controlador de evento onmousedown. Los *
* eventos mousemove siguientes se moverán al elemento *
* especificado. Un evento mouseup terminará el arrastre. *
**************************************************************/
// elementToDrag es el elemento que recibe al evento mousedown
// o algún elemento contenedor. Tiene que colocarse de forma
// absoluta. Sus valores style.left y style.top se cambiarán
// basándose en el arrastre del usuario.
// event es el objeto event para el evento mousedown.
function drag(elementToDrag, event){
    //posición del ratón (en coordenadas de ventana) en la que
    //se inicia el arrastre.
    var startX = event.clientX, startY = event.clientY;
    //posición original ()en coordenadas del documento) del
    //elemento que se va a arrastrar. Como elementToDrag se ha
    //posicionado de forma absoluta, suponemos que su offsetParent
    //es el cuerpo del documento.
    var origX = elementToDrag.offsetLeft, origY = elementToDrag.offsetTop;
    //Aunque las coordenadas se calculen en sistemas de coordenadas
    //diferentes, podemos calcular todavía la diferencia existente
    //entre ellas y utilizarlas en la función moveHandler(). Esta
    //acción funciona porque la posición de la barra de desplazamiento
    //nunca cambia durante el arrastre.
    var deltaX = startX - origX, deltaY = startY - origY;
    //Registrar los controladores de eventos que van a responder a
    //los eventos mousemove y al evento mouseup que sigue a este
    //evento mousedown.
    if(document.addEventListener){ //Modelo de eventos DOM Nivel 2
    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);
    }
    else if(document.attachEvent){ //Modelo de eventos de IE 5+
    //En el modelo de eventos de IE, se capturan los eventos
    //llamando al método setCapture() en el elemento.
    elementToDrag.setCapture();
    elementToDrag.attachEvent("onmousemove", moveHandler);
    elementToDrag.attachEvent("onmouseup", upHandler);
    //Tratar la pérdida de captura del ratón como un evento mouseup
    elementToDrag.attachEvent("onlosecapture", upHandler);
    }
    else{
    //En IE 4 no se puede utilizar attachEvent() o setCapture(),
    //por lo que se establecen controladores de eventos directamente
    //en el objeto document y se espera a que los eventos del ratón
    //que se necesitan se propaguen.
    var oldmovehandler = document.onmousemove;
    var olduphandler = document.onmouseup;
    document.onmousemove = moveHandler;
    document.onmouseup = upHandler;
    }
    if(event.stopPropagation) event.stopPropagation(); //Nivel 2 del DOM
    else event.returnValue = false; //IE
    //Controlador que captura los eventos mousemove cuando se está
    //arrastrando un elemento. Es el responsable de mover el elmento
    function moveHandler(e){
    if(!e) e = window.event; //Modelo de eventos IE
    elementToDrag.style.left = (e.clientX - deltaX) + "px";
    elementToDrag.style.top = (e.clientY - deltaY) + "px";
    if(e.stopPropagation) e.stopPropagation(); //Nivel 2 del DOM
    else e.cancelBubble = true; //IE
    }
    //Controlador que captura el evento mouseup final que se produce
    //al final del arrastre
    function upHandler(e){
    var titleBar = document.getElementById('titlew1');
    var titleBarSecond = document.getElementById('titlew2');
    titleBar.className == 'titlebaractive' ? titleBar.className = 'titlebar' :
   titleBar.className = 'titlebaractive';
   titleBarSecond.className == 'titlebar' ? titleBarSecond.className = 'titlebaractive'
   : titleBarSecond.className = 'titlebar';
    if(!e) e = window.event; //Modelo de eventos de IE
    //Anular el registro de los controladores de eventos de captura
    if(document.removeEventListener){
    document.removeEventListener("mouseup", upHandler, true);
    document.removeEventListener("mousemove", moveHandler, true);
    }
    else if(document.detachEvent){ //Modelo de eventos IE
    elementToDrag.detachEvent("onlosecapture", upHandler);
    elementToDrag.detachEvent("onmouseup", upHandler);
    elementToDrag.detachEvent("onmousemove", moveHandler);
    elementToDrag.releaseCapture();
    }
    else{ //Modelo de eventos de IE 4
    //Restablecer los controladores originales
    document.onmouseup = olduphandler;
    document.onmousemove = oldmovehandler;
    }
    //No permitir que se propague más el evento
    if(e.stopPropagation) e.stopPropagation(); //Nivel 2 del DOM
    else e.cancelBubble = true; //IE
    }
   }
   