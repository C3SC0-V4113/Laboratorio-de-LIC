var ArregloPersonas=[];
var TiempoRestante=0;
function init(){
    var Boton=document.getElementById("EnvioPapu");
    var Recibo=document.getElementById("ReciboPapu");
    var Parrafo=document.getElementById("countabajo");
    TiempoRestante=5;
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
    if(Recibo.addEventListener){
        Recibo.addEventListener("click",Restaurar,false);
    }
}

function Añadir(){
    var Nombre=document.getElementById("Nombre");
    var Pais=document.Formulario.SelectorCombo.options[document.Formulario.SelectorCombo.selectedIndex];
    var Biografia=document.getElementById("Biografia");
    /*Creando el arreglo con los datos */
    var Persona=new Object();
    Persona.nombre=Nombre.value;
    Persona.pais=Pais.value;
    Persona.bio=Biografia.value;
    ArregloPersonas.push(Persona);

    console.log("Guardando arreglo de datos en sessionStorage");
    sessionStorage.setItem("personas",JSON.stringify(ArregloPersonas));
    ////////////////////////////
    var Parrafo=document.getElementById("countabajo");
    TiempoRestante=5;
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
    Limpiar(Nombre,Pais,Biografia);
}

function Restaurar(){
    var DivImpresor=document.getElementById("Impresor");
    DivImpresor.innerHTML="";
    console.log("Restaurando arreglo de datos desde sessionStorage");
    var Arreglo=JSON.parse(sessionStorage.getItem("personas"));
    if (Arreglo!=null) {
        for (let i = 0; i < Arreglo.length; i++) {
            var Persona=Arreglo[i];
            DivImpresor.innerHTML+="<p>Nombre: " + Persona.nombre + ", Pais: " + Persona.pais + " Biografia: "+ Persona.bio +"</p>";               
        }
    }
    else{
        alert("No hay nada que restaurar");
    }
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

function Limpiar(nombre,pais,bio){
    nombre.value="";
    pais=document.Formulario.SelectorCombo.options[document.Formulario.SelectorCombo.selectedIndex=0];;
    bio.value="";
}

if (window.addEventListener) {
    window.addEventListener("load",init,false);
} else if(window.attachEvent){
    window.attachEvent("onload",init);
}