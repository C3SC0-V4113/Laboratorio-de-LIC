contador=0;

function iniciar(){
    var n1,n2,operacion;
    //Obteniendo los botones de operacion
    var CampoTexto=document.frmCalculadora.txt_entrada;
    var BotonIgual=document.frmCalculadora.igual;
    var BotonMas=document.frmCalculadora.suma;
    var BotonRes=document.frmCalculadora.resta;
    var BotonDiv=document.frmCalculadora.div;
    var BotonPro=document.frmCalculadora.mul;
    var BotonInv=document.frmCalculadora.inv;
    var BotonResi=document.frmCalculadora.res;
    var BotonPow=document.frmCalculadora.pow;
    var BotonPow2=document.frmCalculadora.pow2;
    var BotonRoot=document.frmCalculadora.root;
    var BotonRoot2=document.frmCalculadora.root2;
    var BotonReseti=document.frmCalculadora.ac;
    var BotonDel=document.frmCalculadora.del;
    //Obteniendo los botones de números
    var Numeral1=document.frmCalculadora.no1;
    var Numeral2=document.frmCalculadora.no2;
    var Numeral3=document.frmCalculadora.no3;
    var Numeral4=document.frmCalculadora.no4;
    var Numeral5=document.frmCalculadora.no5;
    var Numeral6=document.frmCalculadora.no6;
    var Numeral7=document.frmCalculadora.no7;
    var Numeral8=document.frmCalculadora.no8;
    var Numeral9=document.frmCalculadora.no9;
    var Numeral0=document.frmCalculadora.no0;
    var Punto=document.frmCalculadora.punto;
    //Funciones numerales
    Numeral1.addEventListener("click",function(){
        Agregar(CampoTexto,1)
    },false);
    Numeral2.addEventListener("click",function(){
        Agregar(CampoTexto,2)
    },false);
    Numeral3.addEventListener("click",function(){
        Agregar(CampoTexto,3)
    },false);
    Numeral4.addEventListener("click",function(){
        Agregar(CampoTexto,4)
    },false);
    Numeral5.addEventListener("click",function(){
        Agregar(CampoTexto,5)
    },false);
    Numeral6.addEventListener("click",function(){
        Agregar(CampoTexto,6)
    },false);
    Numeral7.addEventListener("click",function(){
        Agregar(CampoTexto,7)
    },false);
    Numeral8.addEventListener("click",function(){
        Agregar(CampoTexto,8)
    },false);
    Numeral9.addEventListener("click",function(){
        Agregar(CampoTexto,9)
    },false);
    Numeral0.addEventListener("click",function(){
        Agregar(CampoTexto,10)
    },false);
    Punto.addEventListener("click",function(){
        if(contador<1){
            Agregar(CampoTexto,11)
        }
    },false);
    //Funciones operacionales
    BotonIgual.addEventListener("click",function(){
        n2=CampoTexto.value;
        Operar(n1,n2,operacion);
        Limpiar(CampoTexto);
    },false);
    BotonMas.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=1;
        Limpiar(CampoTexto);
    },false);
    BotonRes.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=2;
        Limpiar(CampoTexto);
    },false);
    BotonDiv.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=3;
        Limpiar(CampoTexto);
    },false);
    BotonPro.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=4;
        Limpiar(CampoTexto);
    },false);
    BotonInv.addEventListener("click",function(){
        n1=CampoTexto.value;
        Operar(0,n1,5);
        Limpiar(CampoTexto);
    },false);
    BotonResi.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=6;
        Limpiar(CampoTexto);
    },false);
    BotonPow.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=7;
        Limpiar(CampoTexto);
    },false);
    BotonPow2.addEventListener("click",function(){
        n1=CampoTexto.value;
        Operar(0,n1,8);
        Limpiar(CampoTexto);
    },false);
    BotonRoot.addEventListener("click",function(){
        n1=CampoTexto.value;
        operacion=9;
    },false);
    BotonRoot2.addEventListener("click",function(){
        n1=CampoTexto.value;
        Operar(0,n1,10);
        Limpiar(CampoTexto);
    },false);
    BotonReseti.addEventListener("click",function(){
        n1="",n2="",operacion="";
    },false);
    BotonDel.addEventListener("click",function(){
        Borrar(CampoTexto);
    },false);
}

function Operar(numero1,numero2,operacion){
    var resultado="";
    var CampoRespuesta=document.frmCalculadora.txt_salida;
    switch (operacion) {
        case 1:
            resultado=parseFloat(numero1)+parseFloat(numero2);
            CampoRespuesta.value=resultado;
            break;
        case 2:
            resultado=parseFloat(numero1)-parseFloat(numero2);
            CampoRespuesta.value=resultado;
            break;
        case 3:
            resultado=parseFloat(numero1)/parseFloat(numero2);
            CampoRespuesta.value=resultado;
            break;
        case 4:
            resultado=parseFloat(numero1)*parseFloat(numero2);
            CampoRespuesta.value=resultado;
            break;
        case 5:
            resultado=Math.pow(parseFloat(numero2),-1);
            CampoRespuesta.value=resultado;
            break;
        case 6:
            resultado=parseFloat(numero1)%parseFloat(numero2);
            CampoRespuesta.value=resultado;
            break;
        case 7:
            resultado=Math.pow(parseFloat(numero1),parseFloat(numero2));
            CampoRespuesta.value=resultado;
            break;
        case 8:
            resultado=Math.pow(parseFloat(numero2),2);
            CampoRespuesta.value=resultado;
            break;
        case 9:
            resultado=Math.pow(parseFloat(numero1),Math.pow(parseFloat(numero2),-1));
            CampoRespuesta.value=resultado;
            break;
        case 10:
            resultado=Math.sqrt(numero2);
            CampoRespuesta.value=resultado;
            break;
        default:
            CampoRespuesta.value="Escoja una operacion válida";
            break;
    }
}

function Agregar(Controlador,operacion){
    switch (operacion) {
        case 1:
            Controlador.value+="1";
            break;
        case 2:
            Controlador.value+="2";
            break;
        case 3:
            Controlador.value+="3";
            break;
        case 4:
            Controlador.value+="4";
            break;
        case 5:
            Controlador.value+="5";
            break;
        case 6:
            Controlador.value+="6";
            break;
        case 7:
            Controlador.value+="7";
            break;
        case 8:
            Controlador.value+="8";
            break;
        case 9:
            Controlador.value+="9";
            break;
        case 10:
            Controlador.value+="0";
            break;
        case 11:
            Controlador.value+=".";
            contador++;
            break;
        default:
            break;
    }
}

function Borrar(Controlador){
    var ingresado=Controlador.value;
    var cadena=Array.from(ingresado);
    cadena.pop();
    egresado="";
    for (let i = 0; i < cadena.length; i++) {    
        egresado+=cadena[i];    
    }
    Controlador.value=egresado;
}

function Limpiar(Controlador){
    contador=0;
    Controlador.value="";
}
window.onload=iniciar;