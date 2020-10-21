var valor;

function init(){
    var seleccion=document.getElementById("seleccionar");
    if (seleccion.addEventListener) {
        seleccion.addEventListener("click",mostrar,false);
    } else if(seleccion.attachEvent){
        seleccion.attachEvent("onclick",mostrar);
    }
}

function mostrar(){
    //Determine la opcion seleccionada
    var opcion=document.form.method.options[document.form.method.selectedIndex].value;
    switch (opcion) {
        case "api":
            /*Utilizando la API de LocalStorage, podemos guardar
            y luego recuperar un valor */
            localStorage.setItem("bienvenida","Bienvenidos a localStorage con API de JavaScript");
            valor=localStorage.getItem("bienvenida");
            break;
        case "array":
            /*Utilizar notacion de matrices o arreglos */
            localStorage["bienvenida"]="Bienvenidos, tambien podemos usar notación de matrices";
            valor=localStorage["bienvenida"];
            break;
        case "object":
            /*Tambien es válido utilizar
             notacion de propiedades de objetos */
            localStorage.bienvenida="Bienvenidos, igual podemos usarlo como propiedades del objeto";
            valor=localStorage.bienvenida;
            break;
        default:
            alert("Esta opcion no existe");
            break;
    }
    var contenido=document.getElementById("content");
    contenido.innerHTML="<p>\nUsando : <strong>" + opcion + "</strong> - " + valor + "\n\t</p>\n";
}

if (window.addEventListener) {
    window.addEventListener("load",init,false);
} else if(window.attachEvent){
    window.attachEvent("onload",init);
}