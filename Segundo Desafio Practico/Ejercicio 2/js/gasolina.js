function iniciar(){
    console.log("Hola Mundo");
    ActualizarPrecio(0);
    var radiofield=document.frm_triangulos.elements["radioEsp"];
    var button=document.getElementById("btnComprar");
    var Galones=document.getElementById("galones");
    if(Galones.addEventListener){
        var gas;
        Galones.addEventListener("change",function(){
            var TipGas=ActualizarChk(radiofield);
            console.log("Estoy cambiando!");
            switch (TipGas) {
                case "Regular":
                    gas=new Gasolina(3.05,TipGas);
                    gas.precio(Galones.value);
                    console.log(TipGas);
                    break;
                case "Especial":
                    gas=new Gasolina(3.27,TipGas);
                    gas.precio(Galones.value);
                    console.log(TipGas);
                    break;
                case "Diesel":
                    gas=new Gasolina(2.96,TipGas);
                    gas.precio(Galones.value);
                    console.log(TipGas);
                    break;
                default:
                    break;
            }
        },false);
    }
    if(button.addEventListener){
        var gas;
        button.addEventListener("click",function(){
            var TipGas=ActualizarChk(radiofield);
            console.log("Con botón!");
            switch (TipGas) {
                case "Regular":
                    gas=new Gasolina(3.05,TipGas);
                    gas.precio(Galones.value);
                    console.log(TipGas);
                    break;
                case "Especial":
                    gas=new Gasolina(3.27,TipGas);
                    gas.precio(Galones.value);
                    console.log(TipGas);
                    break;
                case "Diesel":
                    gas=new Gasolina(2.96,TipGas);
                    gas.precio(Galones.value);
                    console.log(TipGas);
                    break;
                default:
                    break;
            }
        },false);
    }
}

function ActualizarChk(Arreglo){
    var tipoGas="";
    console.log(Arreglo);
    for (let i = 0; i < Arreglo.length; i++) {
        console.log(Arreglo[i].value);
        if(Arreglo[i].checked){
            tipoGas=Arreglo[i].value;
        }
    }
    return tipoGas;
}

function Gasolina(costo,tipo){
    //Propiedades
    this.costo=costo;
    this.tipo=tipo;
    //Metodos
    this.precio=function(galones){
        var precio=galones*costo;
        console.log(costo+" "+tipo+" "+precio);
        ActualizarPrecio(precio);
    }
}

function ActualizarPrecio(pr3zio){
    var PrecioDial=document.getElementById("dial");
    PrecioDial.innerHTML="$"+pr3zio;
}

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", inicar);
}