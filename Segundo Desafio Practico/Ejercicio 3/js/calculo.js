//Registrar evento click del raton al presionar los botones de envío
function iniciar(){
    var btnPotencia=document.getElementById("area");
    if(btnPotencia.addEventListener){
        btnPotencia.addEventListener("click",calcularPotencia,false);
    }
    else{
        btnPotencia.attachEvent("onclick",calcularPotencia);
    }
}

function calcularPotencia(){
    var rect=new Rectangulo(document.frm_potencia.txtbase.value,document.frm_potencia.txtpotencia.value,"");
    rect.mostrar();
    return false;
}

//Creando una clase Rectangulo
function Rectangulo(base,potencia,resultado){
    var Impresor=document.getElementById("impresor");
    //Propiedades de la clase
    this.base=parseFloat(base);
    this.potencia=parseFloat(potencia);
    this.resultado=Math.pow(base,potencia);
    //Metodos de la clase
    this.carea=new Function("return this.resultado");
    this.mostrar=function(){
        Impresor.innerHTML="La potencia es: "+this.resultado;
        console.log(this.base+" "+this.potencia+" "+this.resultado);
    }
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load",iniciar,false);
}
else if(window.attachEvent){
    window.attachEvent("onload",iniciar);
}