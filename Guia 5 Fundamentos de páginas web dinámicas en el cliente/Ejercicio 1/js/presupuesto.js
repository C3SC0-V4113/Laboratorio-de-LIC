function init(){
    //prompt() permite obtener entrada de datos del usuario
    var presupuesto=prompt('Ingrese el presupuesto anual','');
    var derma,trau,pedi,i;
    var div=document.getElementById('distribucion');
    //REALIZANDO LOS CÁLCULOS PARA DISTRIBUCION DEL PRESUPUESTO
    derma=presupuesto*0.4;
    trau=presupuesto*0.35;
    pedi=presupuesto*0.25;
    //CREANDO EL CÓDIGO QUE SE INSERTARA DENTRO DEL ELEMENTO dib id=distribucion
    var html="<ul>\n\t<li>\n";
    html+="\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Dermatología es: $ " + derma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Traumatología es: $ " + trau + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\tEl presupuesto asignado para Pediatría es: $ " + pedi + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html+="</ul>\n";

    //Insertando dentro del elemento div el código asignado en la variable html
    div.innerHTML=html;

    console.log('hola');
    //Hacer referenciaa los elementos h1 dentro de la página web
    var links=document.getElementsByTagName('a');
    //Recorrer todos los elementos a y asignar el manejador de evento mediante una funcion anónima
    for (let i = 0; i < links.length; i++) {
        links[i].onmouseover=function(){
            console.log('corriendo el hover');
            this.className='move-right-hover';
        };
        links[i].onmouseout=function(){
            console.log('corriendo el move-right');
            this.className='move-right';
        };
    };
}

window.onload=init;