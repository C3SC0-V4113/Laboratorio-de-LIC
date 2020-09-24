/*Mostrar latecla presionad. En una aplicación real no deberia hacerlo
Probablemente sería buena idea mostrar unicamente en el caso que
se ingresen teclas que no sean múmeros */
function showChar(e) {
    var code;
    if (!e) {
        var e =window.event;
    }
    if (e.keyCode) {
        code=e.keyCode;
    }
    else if (e.which) {
        code=e.which;
    }
    var character=String.fromCharCode(code);
}

/*Dejar pasar unicamente números enteros y bloquear
cualquier otro caracter */
function numbersOnly(field,event) {
    var key,keychar;
    showChar(event);
    if (window.event) {
        key=window.event.keyCode;
    }
    else if (event) {
        key=event.which;
    }
    else{
        return true;
    }
    keychar=String.fromCharCode(key);
    /*Comprobar caracteres especiales como espacios en blanco
    y comprobar números */
    if ((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27)) {
        return true;
    } else if((("0123456789").indexOf(keychar)>-1)){
        window.status="";
        return true;
    }
    else{
        window.status="Este campo solo acepta números";
        return false;
    }
}