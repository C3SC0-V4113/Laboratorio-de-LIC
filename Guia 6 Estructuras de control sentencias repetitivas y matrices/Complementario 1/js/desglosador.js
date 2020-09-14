var datos=document.getElementById('datos');
var num,n,imp=new Array(),par=new Array(),sumimp=0,sumpar=0,sum,mayor=0,menor=10,contenido="";
function inicializar(){
    num=prompt("Ingrese el número a analizar","");
    if(isNaN(num)){
        alert('Ingrese un número entero');
    }
    else{
        alert('Analizaremos esto UwU');
        var lista=Array.from(num);
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            console.log(element);
            parimp(element);
            mayorcito(element);
            menorcito(element);
        }
        with(document){
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>Números ingresados</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            for ( i = 0; i < lista.length; i++) {
                contenido += "\t\t\t<td class=\"Off\">" + lista[i] + "</td>\n";            
            }
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>Cantidad de números</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            contenido += "\t\t\t<td class=\"Off\">" + lista.length + "</td>\n";            
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>Los elementos pares</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            for ( i = 0; i < par.length; i++) {
                contenido += "\t\t\t<td class=\"Off\">" + par[i] + "</td>\n";            
            }
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>La Suma de los números pares</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            contenido += "\t\t\t<td class=\"Off\">" + sumpar + "</td>\n";            
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>Los elementos impares</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            for ( i = 0; i < imp.length; i++) {
                contenido += "\t\t\t<td class=\"Off\">" + imp[i] + "</td>\n";            
            }
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>La Suma de los números impares</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            contenido += "\t\t\t<td class=\"Off\">" + sumimp + "</td>\n";            
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>El número mayor</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            contenido += "\t\t\t<td class=\"Off\">" + mayor + "</td>\n";            
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            /*------------------------------------------------------------------------------------------------------ */
            contenido+="<h1>El número menor</h1>\n";
            //Lazo para ingresar los elementos ingresados en el arreglo
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            //Lazo que muestra los elementos del arreglo en una tabla
            contenido += "\t\t\t<td class=\"Off\">" + menor + "</td>\n";            
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        }
        datos.innerHTML=contenido;
    
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
}

function parimp(elemento){
    if (elemento%2==0) {
        par.push(elemento);
        sumpar+=parseInt(elemento);
    }
    else{
        imp.push(elemento);
        sumimp+=parseInt(elemento);
    }
}

function mayorcito(numero){
    if (numero>mayor) {
        mayor=numero;
    }
}
function menorcito(numero){
    if (numero<menor) {
        menor=numero;
    }
}

window.onload=inicializar;