
function init(){
    console.log("Hola");
    var caja=document.getElementById("equisde");
    var boton1=document.createElement("input");
    boton1.setAttribute("type","button");
    boton1.setAttribute("value","Soy Boton");
    var boton2=document.createElement("input");
    boton2.setAttribute("type","button");
    boton2.setAttribute("value","Soy Boton");
    caja.appendChild(boton1);
    caja.appendChild(boton2);

    Evento();
}

if (window.addEventListener) {
    window.addEventListener("load",init);
}

function Evento(){
    botones=document.getElementsByTagName("input");
    console.log(botones);
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click",Mensaje);
    }
    console.log(botones);
}

function Mensaje(){
    alert("FUNCIONA");
}