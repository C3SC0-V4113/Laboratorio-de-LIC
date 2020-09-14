function inicializar(){
    //Inicializacion de variables
    var numeros=new Array();
    var i, max,temp,contenido="",tdelement,ordenamiento;
    var ORDEN=0;
    /*Validacion para que el número de elementos del arreglo sea
    numérico y mayor o igual a 2 */
    do{
        max=prompt('Cuántos número va a ingresar (Valor entero) :','');
        ordenamiento=prompt('Cual será el orden de los datos ("ASC" para Ascendente y "DESC" para Descendente)','');
        ORDEN=0;
        //Verificar el tipo de Ordenamiento
        switch (ordenamiento.toUpperCase()) {
            case 'ASC':
                ORDEN=1;
                break;
            case 'DESC':
                ORDEN=2;
                break;
            default:
                alert('Se debe escoger un orden válido');
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
    }while(isNaN(max)||max<2||ORDEN==0);

    //Lazo para solicitar el ingreso de los elementos del arreglo
    for (i = 0; i < max; i++) {
        num=prompt("Número "+(parseInt(i)+1),"");
        if(isNaN(num)){
            numeros[i]=0;
        }
        else{
            numeros[i]=parseInt(num);
        }
        /*numeros[i]=parseInt(prompt("Número "+(parseInt(i)+1),""));*/
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
        if(ORDEN==1){
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
        }
        else{
            //Lazo que ordena el arreglo mediante el método de la burbuja
            for (i = 0; i < max-1; i++) {
                for (let j = i+1; j < max; j++) {
                    if(numeros[i]<numeros[j]){
                        temp=numeros[j];
                        numeros[j]=numeros[i];
                        numeros[i]=temp;
                    }                
                }            
            }
            contenido += "<h1>Números ordenados descendentemente</h1>\n";
        }
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