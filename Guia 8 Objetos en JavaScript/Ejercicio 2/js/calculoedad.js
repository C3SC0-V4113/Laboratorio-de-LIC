//Variable para determinar si un año es bisiesto o no
var bisiesto=false;
//Registrar evento click al presiona el botón de envío
function iniciar(){
    var dia,mes;
    var btncalculadora=document.getElementById("calcular");
    /*Al producirse un click sobre el botón de envío
    invocar a la función edad para calcularla con
    los datos ingresados */
    if (btncalculadora.addEventListener) {
        btncalculadora.addEventListener("click",function(){
            dia=document.frmFechaNac.seldia.options[frmFechaNac.seldia.selectedIndex].value;
            mes=document.frmFechaNac.selmes.options[frmFechaNac.selmes.selectedIndex].value;
            edad(dia,mes,document.frmFechaNac.txtano.value);
        },false);
    }
    else{
        alert(mes);
        btncalculadora.attachEvent("onclick",function(){
            dia = document.frmFechaNac.seldia.options[frmFechaNac.seldia.selectedIndex].value;
            mes = document.frmFechaNac.selmes.options[frmFechaNac.selmes.selectedIndex].value;
            edad(dia, mes, document.frmFechaNac.txtano.value);           
        });
    }
    /*Si se cambia de mes en el campo select name=Selmes
    invocar a la funcion llenarDias para volver a rellenar el campo
    select dependiente de los días de acuerdo al mes seleccionado */
    var selmes=document.getElementById("mes")
    if (selmes.addEventListener) {
        selmes.addEventListener("change",function(){
            mes=document.frmFechaNac.selmes.options[document.frmFechaNac.selmes.selectedIndex].value;
            llenarDias(mes,document.frmFechaNac.seldia);
        },false);
    } else if(selmes.attachEvent){
        selmes.attachEvent("onchange",function(){
            mes=document.frmFechaNac.selmes.options[document.frmFechaNac.selmes.selectedIndex].value;
            llenarDias(mes,document.frmFechaNac.seldia);
        });
    }
    /*Del mismo modo, si se ingresa otro año, volver a rellenar
    el campo select de los días para considerar si se cambia
    a un año bisiesto o no */
    var txtano=document.getElementById("ano")
    if (txtano.addEventListener) {
        txtano.addEventListener("change",function(){
            mes=document.frmFechaNac.selmes.options[document.frmFechaNac.selmes.selectedIndex].value;
            llenarDias(mes,document.frmFechaNac.seldia);
        },false);
    } else if(txtano.attachEvent){
        txtano.attachEvent("onchange",function(){
            mes=document.frmFechaNac.selmes.options[document.frmFechaNac.selmes.selectedIndex].value;
            llenarDias(mes,document.frmFechaNac.seldia);
        });
    }
}

//Funcion para determinar si un año es o no bisiesto
function esBisiesto(anno){
    if (anno%4==0 && (anno%400==0||anno%100!=0)) {
        bisiesto=true;
    } else {
        bisiesto=false;
    }
    return bisiesto;
}

//Funcion para limpiar el menú de seleccion Dias
function quitarDias(menuDias){
    for (let i = 0; i < menuDias.options.length; i++) {
        menuDias.options[i]=null;
    }
}

//Función para llenar la caja de texto de los días
function llenarDias(mes,menuDias){
    document.frmFechaNac.seldia.disabled=false;
    var i;
    quitarDias(menuDias);
    switch (mes) {
        case 'Enero':
        case 'Marzo':
        case 'Mayo':
        case 'Julio':
        case 'Agosto':
        case 'Octubre':
        case 'Diciembre':
            for (let i = 0; i < 31; i++) {
                menuDias[i]=new Option(parseInt(i+1),parseInt(i+1));
            }
            break;
        case 'Abril':
        case 'Junio':
        case 'Septiembre':
        case 'Noviembre':
            for (let i = 0; i < 30; i++) {
                menuDias[i]=new Option(parseInt(i+1),parseInt(i+1));
            }
            break;
        case 'Febrero':
            if (esBisiesto(document.frmFechaNac.txtano.value)) {
                for (let i = 0; i < 29; i++) {
                    menuDias[i]=new Option(parseInt(i+1),parseInt(i+1));
                }
            } else {
                for (let i = 0; i < 28; i++) {
                    menuDias[i]=new Option(parseInt(i+1),parseInt(i+1));                    
                }
            }
            break;
        default:
            break;
    }
}

//Funcion para obtener la edad exacta de la persona
function edad(dia,mes,annio){
    var tusdias,tusmeses,tusannios;
    var fecActual=new Date();
    var year=fecActual.getFullYear();
    var month=parseInt(fecActual.getMonth())+1;
    var day=fecActual.getDate();
    tusdias=day-dia;

    switch (mes) {
        case 'Enero':
            mes = 1;
            if(tusdias < 0){
            tusdias = day - dia + 31;
            month--;
            }
            break;
        case 'Febrero':
            mes = 2;
 if(tusdias < 0 && esBisiesto(annio)){
 tusdias = day - dia + 29;
 month--;
 }
 else
 if(tusdias < 0 && !esBisiesto(annio)){
 tusdias = day - dia + 28;
 month--;
 }
 break;
 case 'Marzo':
 mes = 3;
 if(tusdias < 0){
 tusdias = day - dia + 31;
 month--;
 }
 break;
 case 'Abril':
 mes = 4;
 if(tusdias < 0){
 tusdias = day - dia + 30;
 month--;
 }
 break;
 case 'Mayo':
 mes = 5;
 if(tusdias < 0){
 tusdias = day - dia + 31;
 month--;
 }
 break;
 case 'Junio':
 mes = 6;
 if(tusdias < 0){
 tusdias = day - dia + 30;
 month--;
 }
 break;
 case 'Julio':
 mes = 7;
 if(tusdias < 0){
 tusdias = day - dia + 31;
 month--;
 }
 break;
 case 'Agosto':
 mes = 8;
 if(tusdias < 0){
 tusdias = day - dia + 31;
 month--;
 }
 break;
 case 'Septiembre':
 mes = 9;
 if(tusdias < 0){
 tusdias = day - dia + 30;
 month--;
 }
 break;
 case 'Octubre': 
 mes = 10;
 if(tusdias < 0){
 tusdias = day - dia + 31;
 month--;
 }
 break;
 case 'Noviembre':
 mes = 11;
 if(tusdias < 0){
 tusdias = day - dia + 30;
 month--;
 }
 break;
 case 'Diciembre':
 mes = 12;
 if(tusdias < 0){
 tusdias = day - dia + 31;
 month--;
 }
 break;
        default:
            break;
    }
    tusmeses=month-mes;
    if (tusmeses<0) {
        tusmeses=month-mes+12;
        year--;
    }
    tusannios=year-annio;
    alert("Tu edad exacta es:\n"+tusannios+" años,\n"+tusmeses+" meses, y\n"+tusdias+" días.");
}

//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load",iniciar,false);
} else {
    window.attachEvent("onload",iniciar);
}