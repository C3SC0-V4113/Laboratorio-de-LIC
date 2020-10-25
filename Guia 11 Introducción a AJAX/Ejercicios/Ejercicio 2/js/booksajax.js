/*Variable para el objeto XMLHttpRequest */
var solicitudAsinc;

/*Establecer los manejadores de evento para las imágenes con
las portadas de los libros */

function registrarManejadores(){
    var img;
    var contentbook;
    /*Creando el contenido y borrandolos al producirse los eventos
    mouseover y mouseout sobre las imagenes capturadas por su id */
    /*Primera Imagen */
    img=document.getElementById("csstecprof");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/css.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/css.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Segunda Imagen */
    img=document.getElementById("java8");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/java8.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/java8.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Tercera Imagen */
    img=document.getElementById("jsninja");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/jsninja.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/jsninja.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Cuarta Imagen */
    img=document.getElementById("nodejs");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/nodejs.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/nodejs.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Quinta Imagen */
    img=document.getElementById("phppract");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/phppract.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/phppract.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Sexta Imagen */
    img=document.getElementById("proghtml5");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/proghtml5.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/proghtml5.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
}
/*Fin de la funcion que registra eventos sobre las imágenes */

function obtenerContenido(url){
    /*Intentar crear objeto XMLHttpRequest y realizar la peticion */
    try{
        /*Crear objeto peticion XMLHttpRequest
        Cambiar esto por una funcion multinavegador para construir el objeto XMLHttpRequest */
        solicitudAsinc=new XMLHttpRequest();
        /*Registrar el manejador de eventos */
        if (solicitudAsinc.addEventListener) {
            solicitudAsinc.addEventListener("readystatechange",cambiarEstado,false);
        } else if(solicitudAsinc.attachEvent){
            solicitudAsinc.attachEvent("readystatechange",cambiarEstado);
        }
        /*Preparar la solicitud */
        solicitudAsinc.open("GET",url,true);
        /*Enviar la solicitud */
        solicitudAsinc.send(null);
    }
    catch(e){
        alert("No se procesó la peticion AJAX");
    }
}

function borrarContenido(){
    var contenido=document.getElementById("descriptions");
    contenido.innerHTML="";
}

function cambiarEstado(){
    var contenido;
    if (solicitudAsinc.readyState==4 && solicitudAsinc.status==200) {
        contenido=document.getElementById("descriptions");
        contenido.innerHTML=solicitudAsinc.responseText;
    }
}

if (window.addEventListener) {
    window.addEventListener("load",registrarManejadores,false);
} else if(window.attachEvent){
    window.attachEvent("onload",registrarManejadores);
}