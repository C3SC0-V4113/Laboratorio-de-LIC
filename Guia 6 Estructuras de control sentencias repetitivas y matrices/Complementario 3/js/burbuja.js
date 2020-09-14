function inicializar(){
    //Inicializacion de variables
    var numeros=new Array();
    var i, max,temp,contenido="",tdelement,ordenamiento;
    var ORDEN;
    /*Validacion para que el número de elementos del arreglo sea
    numérico y mayor o igual a 2 */
    do{
        max=prompt('Cuántos número va a ingresar (Valor entero) :','');
        ordenamiento=prompt('Cual será el orden de los datos ("ASC" para Ascendente y "DESC" para Descendente)','');
        ORDEN=ordenamiento.toUpperCase();
        switch (ORDEN) {
            case ASC:
                console.log("Ascendente papu");
                break;
            case DESC:
                console.log("Descendente papu");
                break;
            default:
                console.log("¿tas tonto papu?");
                break;
        }
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
    /*Obteniendo el elemento donde se cargará el contenido
    generado dinámicamente desde JavaScript */
    var datos=document.getElementById('datos');
    with(document){
        contenido+="<h1>Números ingresados</h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        for ( i = 0; i < max; i++) {
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";            
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Lazo que ordena el arreglo mediante el método de la burbuja
        for (i = 0; i < max-1; i++) {
            for (let j = i+1; j < max; j++) {
                if(numeros[i]>numeros[j]){
                    temp=numeros[j];
                    numeros[j]=numeros[i];
                    numeros[i]=temp;
                }                
            }            
        }
        contenido += "<h1>Números ordenados ascendentemente</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        /*Lazo que muestra los elementos del arreglo que han sido ordenados
        con el metodo de burbuja */
        for (i = 0; i < max; i++) {
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";     
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
    }
    datos.innerHTML=contenido;
    //Capturando los elementos con clase Off
    tdelement=document.getElementsByClassName('Off');
    alert(tdelement.length);
    for (var i = 0; i < tdelement.length; i++) {
        tdelement[i].onmouseover=function(){
            this.className='On';
        }        
        tdelement[i].onmouseout=function () {
            this.className='Off';
        }
    }
}

window.onload=inicializar;