var aleatorios;
var min, max, cantidad;
var disparador, listado;
function init(){
    /*Declaracion del arreglo  matriz de forma
    literak que contendrá los números aleatorios */
    aleatorios=[];
    /*Declaracion y asignacion de los limites entre
    los cuales estarán comprendidos los números aleatorios */
    min=parseInt(prompt("Ingrese el limite inferior",""));
    max=parseInt(prompt("Ingrese el limite superior",""));
    cantidad=parseInt(prompt("Indique la cantidad de números aleatorios a generar",""));
    disparador=document.getElementById("generador");
    listado=document.getElementById("listanumeros");
    if(disparador.addEventListener){
        disparador.addEventListener("click",function(evt){
            aleatorio(min,max,cantidad);
            listado.innerHTML="Los números aleatorios son: "+aleatorios.toString();
        },false);
    }
    else if(disparador.attachEvent){
        disparador.attachEvent("onclick",function(evt){
            aleatorio(min,max,cantidad);
            listado.innerHTML="Los números aleatorios son: "+aleatorios.toString();
        });
    }
}

function aleatorio(minimo,maximo,cantidad) {
    /*Generando un número aleatorio teniendo el cuidado
    que esté comprendido entre el minimo y el maximo */
    var numero=Math.floor(Math.random()*(maximo-minimo+1))+minimo;
    /*Verificar que no se haya llegado a la
    cantidad de numeros aleatorios maximo establecido */
    if (aleatorios.length<cantidad) {
        aleatorios.push(numero);
        aleatorio(minimo,maximo,cantidad);
    }
}

window.onload=init;