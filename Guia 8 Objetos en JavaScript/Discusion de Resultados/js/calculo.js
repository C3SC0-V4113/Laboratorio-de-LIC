//Registrar evento click del raton al presionar los botones de envío
function iniciar(){
    var Impresor=document.getElementById("impresor");
    var btnPotencia=document.getElementById("area");
    if(btnPotencia.addEventListener){
        btnPotencia.addEventListener("click",calculararea,false);
    }
    else{
        btnPotencia.attachEvent("onclick",calculararea);
    }
}

function calculararea(){
    var rect=new Rectangulo(document.frmrectangulo.txtbase.value,document.frmrectangulo.txtaltura.value,"");
    rect.mostrar(rect.carea(),"potencia");
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
    //Definidos usando el constructor Function()
    this.carea=new Function("return this.resultado");
    this.mostrar=new Function("valor","tipoc","'El '+tipoc+' es: '+valor");
    Impresor.innerHTML="<p>La potencia es: "+this.resultado+"</p>";
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load",iniciar,false);
}
else if(window.attachEvent){
    window.attachEvent("onload",iniciar);
}