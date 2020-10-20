ReglasEstilo=new Array();

function init(){
    var Cambio=document.getElementById("Boton");
    var Add=document.getElementById("Añadir");
    var Quit=document.getElementById("Quitar");
    if (Cambio.addEventListener) {
        Cambio.addEventListener("click",SelectorCSS,false);
    }
    if (Add.addEventListener) {
        Add.addEventListener("click",AñadirRegla,false);
    }
    if (Quit.addEventListener) {
        Quit.addEventListener("click",QuitarRegla,false);
    }
}

function SelectorCSS(){
    var cmbBox=document.frmEstilos.Estilos.options[document.frmEstilos.Estilos.selectedIndex].value;
    switch (cmbBox) {
        case "oscuro":
            Cambio("css/oscuro.css");
            break;
        case "claro":
            Cambio("css/claro.css");
            break;
        case "inferno":
            Cambio("css/hellfire.css");
            break;
        case "rosa":
            Cambio("css/rosa.css");
            break;
        default:
            Cambio("#");
            break;
    }
}

function AñadirRegla(){
    if (ReglasEstilo.length==0) {
        alert("No hay Reglas que agregar");
    }
    else{
        document.styleSheets[0].insertRule(ReglasEstilo.shift());
    }
}

function QuitarRegla(){
    var ultimaregla=0;
    var ListaReglas=document.styleSheets[0].cssRules;
    if (ListaReglas.length==0) {
        alert("No hay Reglas que quitar");
    } else {
        for (let i = 0; i < ListaReglas.length; i++) {
            ultimaregla=i;
        }
        var ReglaSelector=ListaReglas[ultimaregla].selectorText;
        var ReglaStyle=ListaReglas[ultimaregla].style.cssText;
        var Texto=ReglaSelector+" { "+ReglaStyle+" }";
        ReglasEstilo.push(Texto);
        document.styleSheets[0].deleteRule(ultimaregla);   
    }
}


function Cambio(Estilo){
    ReglasEstilo=new Array();
    for (let i = 0; i < document.getElementsByTagName.length; i++) {
        document.getElementsByTagName("link")[i].setAttribute("href", Estilo);
    }
}

if (window.addEventListener) {
    window.addEventListener("load",init,false);
} else if(window.attachEvent){
    window.attachEvent("onload",init);
}