var numeros=new Array();
var max;
function inicializar(){
    //Inicializacion de variables
    var i,tdelement;
    /*Validacion para que el número de elementos del arreglo sea
    numérico y mayor o igual a 2 */
    do{
        max=prompt('Cuántos número va a ingresar (Valor entero) :','');
        //Verificar que se ingrese un dato numérico
        if(isNaN(max)){
            alert('El valor digitado no es numérico');
            continue;
        }
        //Verificar que el valor ingresado sea mayor o igual que 2
        if(max<2){
            alert('El arreglo debe ser de dimensión 2 o superior');
        }
    }while(isNaN(max)||max<2);
    //Lazo para solicitar el ingreso de los elementos del arreglo
    for (i = 0; i < max; i++) {
        numeros[i]=parseInt(prompt("Número "+(parseInt(i)+1),""));
    }
    ActualizarArray();
    //Capturando los elementos con clase Off
    tdelement=document.getElementsByClassName('Off');
    for (var i = 0; i < tdelement.length; i++) {
        tdelement[i].onmouseover=function(){
            this.className='On';
        }        
        tdelement[i].onmouseout=function () {
            this.className='Off';
        }
    }
}

function ActualizarArray(){
    console.log('Empezando Actualización');
    var contenido="";
    /*Obteniendo el elemento donde se cargará el contenido
    generado dinámicamente desde JavaScript */
    var datos=document.getElementById('datos');
    with(document){
        contenido+="<h1>Números ingresados (Arreglo sin modificar)</h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        for ( i = 0; i < numeros.length; i++) {
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";            
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        numeros.reverse();
        contenido+="<h1>Arreglo Aplicando reversible()</h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        for ( i = 0; i < numeros.length; i++) {
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";            
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Lazo que ordena el arreglo mediante el método de la burbuja
    }
    datos.innerHTML=contenido;
}

window.onload=inicializar;