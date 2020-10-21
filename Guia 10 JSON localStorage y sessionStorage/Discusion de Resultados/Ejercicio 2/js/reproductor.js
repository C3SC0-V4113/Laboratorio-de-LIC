function init(){
    var nombres={
        "Personas":[
            {"imagen" : "img/juan-robles.jpg", "nombre" : "Juan","apellido" : "Robles","duracion" : 0.5,"titulo" : "Unknown Mother Goose"},
            {"imagen" : "img/lilian-rosales.jpg","nombre" : "Lilian","apellido" : "Rosales","duracion" : 0.5,"titulo" : "DUNE"},
            {"imagen" : "img/gustavo-gonzalez.jpg","nombre" : "Gustavo","apellido" : "Gonzalez","duracion" : 0.5,"titulo" : "Rolling Girl"},
            {"imagen" : "img/genesis-deras.jpg","nombre" : "Génesis","apellido" : "Deras","duracion" : 0.5,"titulo" : "Cleric Beast"},
            {"imagen" : "img/reina-benitez.jpg","nombre" : "Reina","apellido" : "Benitez","duracion" : 0.5,"titulo" : "Matryoshka"},
            {"imagen" : "img/hugo-perez.jpg","nombre" : "Hugo","apellido" : "Pérez","duracion" : 0.5,"titulo" : "Lady Maria"}       
        ]
    };
    var imgElem=document.getElementById("box");
    if (imgElem.addEventListener) {
        imgElem.addEventListener("click",function(){
            toggle("box");
        },false);
    } else if(imgElem.attachEvent){
        imgElem.attachEvent("onclick",function(){
            toggle("box");
        });
    }
    var div=document.getElementById("Impresor");
    div.innerHTML=volcarDatos(nombres.Personas);
}

function Reproducir(objeto){
    var repro=document.getElementById("Repro");
    var Caja=document.getElementById(objeto);
    console.log(Caja);
    repro.innerHTML=Caja.innerHTML;
}

/*Obteniendo el elemento contenedor donde se cargarán
todos los datos del objeto JSON */


function volcarDatos(datos){
    var total=datos.length;
    data="<ul class=\"grid\">\n";
    for (let i = 0; i < total; i++) {
        data += "<li class=\"box\" >\n";
        data += "<div class=\"box-shadow\"></div>\n";
        data += "<div class=\"box-gradient\" onclick=\"Reproducir(this.id)\" id=\"cajaNO"+i+"\">\n";
        data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +datos[i].nombre + " " + datos[i].apellido + "\" class=\"avatar\" />\n<br>";
        data += "Titulo: " + datos[i].titulo + "\n</p>\n";
        data += "<h4>\nArtista: " + datos[i].nombre + " " + datos[i].apellido + "\n</h4>\n";
        data += "<p>\nDuracion: " + datos[i].duracion + "\n<br />\n";
        data += "</div>\n";
        data += "</li>\n";
    }
    data+="</ul>\n"
    return data;
}

function toggle(id) {
    var el=document.getElementById(id);
    var img=document.getElementById("arrow");
    var box=el.getAttribute("class");
    if (box=="hide") {
        el.setAttribute("class","show");
        delay(img,"img/arrowright.png",400);
    } else {
        el.setAttribute("class","hide");
        delay(img,"img/arrowleft.png",400);
    }
}

function delay(elem,src,delayTime){
    window.setTimeout(function(){
        elem.setAttribute("src",src);
    },delayTime);
}

if (window.addEventListener) {
    window.addEventListener("load",init,false);
} else if(window.attachEvent){
    window.attachEvent("onload",init);
}