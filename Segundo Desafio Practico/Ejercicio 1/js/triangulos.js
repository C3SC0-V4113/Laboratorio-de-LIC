function iniciar(){
    console.log("Hola mundo");
    ActualizarNumeros(0,0,0,0);
    var SuperArreglo=new Array();
    var btnCalcular=document.getElementById("btnClasificar");
    if (btnCalcular.addEventListener) {
        btnCalcular.addEventListener("click",function(){
            lado1=document.getElementById("lado1");
            lado2=document.getElementById("lado2");
            lado3=document.getElementById("lado3");
            var nuevotriangulo=new Triangulos(lado1.value,lado2.value,lado3.value);
            lado1.value="";
            lado2.value="";
            lado3.value="";
            nuevotriangulo.TipoTriangulo();
            nuevotriangulo.CalcularPerimetro();
            SuperArreglo.push(nuevotriangulo);
            nuevotriangulo.Imprimir(SuperArreglo);
        },false);
    }
}

function Triangulos(lado1,lado2,lado3,tipo,perimetro){
    //Propiedades
    this.lado1=parseFloat(lado1);
    this.lado2=parseFloat(lado2);
    this.lado3=parseFloat(lado3);
    //Metodos
    this.TipoTriangulo=function(){
        this.tipo=calcularTipo(this.lado1,this.lado2,this.lado3);
    };
    this.CalcularPerimetro=function(){
        this.perimetro=(this.lado1+this.lado2+this.lado3);
    }
    this.Imprimir=function(Arreglo){
        var ImpresorT=document.getElementById("Triantator1");
        var ImpresorIso=document.getElementById("Triantator2");
        var ImpresorEqui=document.getElementById("Triantator3");
        var ImpresorEsca=document.getElementById("Triantator4");
        var contIso=0,contEsca=0,contEqui=0;
        var HTMLFull="",HTMLIso="",HTMLEsca="",HTMLEqui="";
        HTMLFull+="<table class=\"table\">\n";
        HTMLFull+="<thead>\n";
        HTMLFull+="<tr>\n";
        HTMLFull+="<th scope=\"col\">#</th>\n";
        HTMLFull+="<th scope=\"col\">Lado 1</th>\n";
        HTMLFull+="<th scope=\"col\">Lado 2</th>\n";
        HTMLFull+="<th scope=\"col\">Lado 3</th>\n";
        HTMLFull+="<th scope=\"col\">Perimetro</th>\n";
        HTMLIso=HTMLEsca=HTMLEqui=HTMLFull;
        HTMLFull+="<th scope=\"col\">Tipo</th>\n";
        HTMLFull+="</tr>\n";
        HTMLFull+="</thead>\n";
        HTMLFull+="<tbody>\n";
        HTMLIso+="</tr>\n";
        HTMLIso+="</thead>\n";
        HTMLIso+="<tbody>\n";
        HTMLEsca+="</tr>\n";
        HTMLEsca+="</thead>\n";
        HTMLEsca+="<tbody>\n";
        HTMLEqui+="</tr>\n";
        HTMLEqui+="</thead>\n";
        HTMLEqui+="<tbody>\n";
        for (let i = 0; i < Arreglo.length; i++) {
            HTMLFull+="<tr>\n";
            HTMLFull+="<th scope=\"row\">"+(i+1)+"</th>\n";
            HTMLFull+="<td>"+Arreglo[i].lado1+"</td>\n";    
            HTMLFull+="<td>"+Arreglo[i].lado2+"</td>\n";    
            HTMLFull+="<td>"+Arreglo[i].lado3+"</td>\n";    
            HTMLFull+="<td>"+Arreglo[i].perimetro+"</td>\n";    
            HTMLFull+="<td>"+Arreglo[i].tipo+"</td>"
            HTMLFull+="</tr>\n";
            switch (Arreglo[i].tipo) {
                case "Equilatero":
                    contEqui++;
                    HTMLEqui+="<tr>\n";
                    HTMLEqui+="<th scope=\"row\">"+contEqui+"</th>\n";
                    HTMLEqui+="<td>"+Arreglo[i].lado1+"</td>\n";    
                    HTMLEqui+="<td>"+Arreglo[i].lado2+"</td>\n";    
                    HTMLEqui+="<td>"+Arreglo[i].lado3+"</td>\n";    
                    HTMLEqui+="<td>"+Arreglo[i].perimetro+"</td>\n";    
                    HTMLEqui+="</tr>\n";
                    break;
                case "Isosceles":
                    contIso++;
                    HTMLIso+="<tr>\n";
                    HTMLIso+="<th scope=\"row\">"+contIso+"</th>\n";
                    HTMLIso+="<td>"+Arreglo[i].lado1+"</td>\n";    
                    HTMLIso+="<td>"+Arreglo[i].lado2+"</td>\n";    
                    HTMLIso+="<td>"+Arreglo[i].lado3+"</td>\n";    
                    HTMLIso+="<td>"+Arreglo[i].perimetro+"</td>\n";    
                    HTMLIso+="</tr>\n";
                    break;
                case "Escaleno":
                    contEsca++;
                    HTMLEsca+="<tr>\n";
                    HTMLEsca+="<th scope=\"row\">"+contEsca+"</th>\n";
                    HTMLEsca+="<td>"+Arreglo[i].lado1+"</td>\n";    
                    HTMLEsca+="<td>"+Arreglo[i].lado2+"</td>\n";    
                    HTMLEsca+="<td>"+Arreglo[i].lado3+"</td>\n";    
                    HTMLEsca+="<td>"+Arreglo[i].perimetro+"</td>\n";    
                    HTMLEsca+="</tr>\n";
                    break;
                default:
                    break;
            }            
        }
        HTMLFull+="</tbody>\n";
        HTMLFull+="</table>";
        HTMLEqui+="</tbody>\n";
        HTMLEqui+="</table>";
        HTMLIso+="</tbody>\n";
        HTMLIso+="</table>";
        HTMLEsca+="</tbody>\n";
        HTMLEsca+="</table>";
        ImpresorT.innerHTML=HTMLFull;
        ImpresorEqui.innerHTML=HTMLEqui;
        ImpresorEsca.innerHTML=HTMLEsca;
        ImpresorIso.innerHTML=HTMLIso;
        ActualizarNumeros(Arreglo.length,contIso,contEsca,contEqui);
    }
}

function ActualizarNumeros(n1,n2,n3,n4){
    var ContTotal=document.getElementById("Contador1");
    var ContIso=document.getElementById("Contador2");
    var ContEqui=document.getElementById("Contador3");
    var ContEsca=document.getElementById("Contador4");
    var Texto=document.getElementById("mayorquemenorque");
    var Numeros=[n4,n3,n2];
    Texto.innerHTML=MayorMenor(Numeros);
    ContTotal.innerHTML=n1;
    ContIso.innerHTML=n2;
    ContEsca.innerHTML=n3;
    ContEqui.innerHTML=n4;
}

function MayorMenor(Arreglo){
    max=0;
    posmax=0;
    min=10000000000000000;
    posmin=0;
    var resultado="";
    for (let i = 0; i < Arreglo.length; i++) {
        if (parseInt(Arreglo[i])<min) {
            min=parseInt(Arreglo[i]);
            posmin=i;
        }
        if (parseInt(Arreglo[i])>max) {
            max=parseInt(Arreglo[i]);
            posmax=i;
        }        
    }
    if(max==min){
        resultado="La cantidad de triangulos está equilibrada";
    }
    else{
        switch (posmax) {
            case 0:
                resultado="El máximo conjunto es el de los Equilateros";
                break;
            case 1:
                resultado="El máximo conjunto es el de los Escalenos";
                break;
            case 2:
                resultado="El máximo conjunto es el de los Isosceles";
                break;
            default:
                break;
        }
        switch (posmin) {
            case 0:
                resultado+=" y el minimo conjunto es el de los Equilateros";
                break;
            case 1:
                resultado+=" y el minimo conjunto es el de los Escalenos";
                break;
            case 2:
                resultado+=" y el minimo conjunto es el de los Isosceles";
                break;
            default:
                break;
        }
    }
    return resultado;
}

function calcularTipo(l1,l2,l3){
    var tipo="";
    if (l1==l2&&l1==l3&&l2==l3) {
        tipo="Equilatero";
    }
    else if(l1==l2||l1==l3||l2==l3){
        tipo="Isosceles";
    }
    else{
        tipo="Escaleno";
    }
    return tipo;
}

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}