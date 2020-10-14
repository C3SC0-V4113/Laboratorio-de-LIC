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

function drag(elementTodrag,event){
    console.log("En clase drag");
    var startX=event.clientX, startY=event.clientY;
    var origX=elementTodrag.offsetLeft,origY=elementTodrag.offsetTop;
    var deltaX=startX-origX,deltaY=startY-origY;
    console.log("inicio X: "+startX+" inicio Y: "+startY+" Origen x: "+origX+" Origen Y "+origY+" delta x: "+deltaX+" delta Y: "+deltaY);

    if (document.addEventListener) {
        document.addEventListener("mousemove",moveHandler,true);
        document.addEventListener("mouseup",upHandler,true);
    }
    else if(document.attachEvent){
        elementToDrag.setCapture();
        elementToDrag.attachEvent("onmousemove", moveHandler);
        elementToDrag.attachEvent("onmouseup", upHandler);
        elementToDrag.attachEvent("onlosecapture", upHandler);
    }
    else{
        var oldmovehandler = document.onmousemove;
        var olduphandler = document.onmouseup;
        document.onmousemove = moveHandler;
        document.onmouseup = upHandler;
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    else{
        event.returnValue=false;
    }
    function moveHandler(e){
        if (!e) {
            e=window.event;
        }
        elementToDrag.style.left=(e.clientX-deltaX)+"px";
        elementToDrag.style.top=(e.clientY-deltaY)+"px";
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        else{
            e.cancelBubble=true;
        }
    }

    function upHandler(e){
        var titleBar=document.getElementById("titlewl");
        var titleBarSecond=document.getElementById("titlew2");
        titleBar.className=="titlebaractive"?titleBar.className="titlebar":titleBar.className="titlebaractive";
        titleBarSecond.className=="titlebar"?titleBarSecond.className="titlebaractive":titleBarSecond.className="titlebar";
        if (!e) {
            e=window.event
        }
        if (document.removeEventListener) {
            document.removeEventListener("mouseup",upHandler,true);
            document.removeEventListener("mousemove",moveHandler,true);
        } else if(document.detachEvent){
            elementToDrag.detachEvent("onlosecapture", upHandler);
            elementToDrag.detachEvent("onmouseup", upHandler);
            elementToDrag.detachEvent("onmousemove", moveHandler);
            elementToDrag.releaseCapture();           
        }
        else{
            document.onmouseup = olduphandler;
            document.onmousemove = oldmovehandler;           
        }

        if (e.stopPropagation) {
            e.stopPropagation();
        }
        else{
            e.cancelBubble=true;
        }
    }
}