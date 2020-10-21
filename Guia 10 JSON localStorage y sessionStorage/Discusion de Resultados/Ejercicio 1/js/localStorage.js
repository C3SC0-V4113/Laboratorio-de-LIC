var ArregloObjetos=[];
function init(){
    var Boton=document.getElementById("EnvioPapu");
    var Parrafo=document.getElementById("countabajo");
    var TiempoRestante=5;
    var Cuenta=setInterval(function(){
        if (TiempoRestante<=0) {
            clearInterval(Cuenta);
            Parrafo.innerHTML = "Proceda";
        } else {
            Parrafo.innerHTML = "Quedan "+TiempoRestante + " segundos restantes";
        }
        TiempoRestante-=1;
        CuentaAtras(TiempoRestante);
    },1000);
    if (Boton.addEventListener) {
        Boton.addEventListener("click",Añadir,false);
    }
}

function Añadir(){
    console.log("Dentro de funcion añadir");
}

function CuentaAtras(Numero){
    var Boton=document.getElementById("EnvioPapu");
    if (Numero==-1) {
        Boton.setAttribute("class","btn btn-primary mb-2");
        Boton.disabled=false;
    }
    else{
        Boton.setAttribute("class","btn btn-primary mb-2 disabled");
        Boton.disabled=true;
        console.log("Hello there");
    }
}

if (window.addEventListener) {
    window.addEventListener("load",init,false);
} else if(window.attachEvent){
    window.attachEvent("onload",init);
}