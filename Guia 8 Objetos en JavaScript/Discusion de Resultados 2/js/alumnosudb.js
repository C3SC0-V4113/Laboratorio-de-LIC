//Variable para determinar si un año es bisiesto o no
var bisiesto=false;
//Arreglo de Objetos
var SuperArreglo=new Array();
//Registrar evento click al presionar el botón de envio
function iniciar(){
    var dia,mes;
    var btnenviar=document.getElementById("btnSend");
    /*Al producirse un click sobre el botón de envío
    invocar los metodos del objeto carro que mostrarán
    los valores ingresados en el formulario */
    if (btnenviar.addEventListener) {
        btnenviar.addEventListener("click",function(){
            dia=document.frmmat.seldia.options[frmmat.seldia.selectedIndex].value;
            mes=document.frmmat.selmes.options[frmmat.selmes.selectedIndex].value;
            edad(dia,mes,document.frmmat.txtano.value);
            var chkvalue,selvalue,nuevoalumno;
            var radiofield=document.frmmat.elements["chkgender"];
            for (let i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue=radiofield[i].value;
                }
            }
            selvalue=document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno=new alumnoUDB(document.frmmat.txtname.value,document.frmmat.txtlastname.value,document.frmmat.txtemail.value,document.frmmat.txtpass.value,edad(dia,mes,document.frmmat.txtano.value),chkvalue,selvalue);
            nuevoalumno.matricular();
            SuperArreglo.push(nuevoalumno);
            console.log(SuperArreglo);
            nuevoalumno.imprimir(SuperArreglo);
        },false);
    }
    else{
        btnenviar.attachEvent("onclick",function(){
            dia=document.frmmat.seldia.options[frmmat.seldia.selectedIndex].value;
            mes=document.frmmat.selmes.options[frmmat.selmes.selectedIndex].value;
            edad(dia,mes,document.frmmat.txtano.value);
            var chkvalue,selvalue,nuevoalumno;
            var radiofield=document.frmmat.elements["chkgender"];
            for (let i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue=radiofield[i].value;
                }
            }
            selvalue=document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno=new alumnoUDB(document.frmmat.txtname.value,document.frmmat.txtlastname.value,document.frmmat.txtemail.value,document.frmmat.txtpass.value,edad(dia,mes,document.frmmat.txtano.value),chkvalue,selvalue);
            nuevoalumno.matricular();
            SuperArreglo.push(nuevoalumno);
            console.log(SuperArreglo);
            nuevoalumno.imprimir(SuperArreglo);
        });
    }

    /*Si se cambia de mes en el campo select name=Selmes
    invocar a la funcion llenarDias para volver a rellenar el campo
    select dependiente de los días de acuerdo al mes seleccionado */
    var selmes=document.getElementById("mes")
    if (selmes.addEventListener) {
        selmes.addEventListener("change",function(){
            mes=document.frmmat.selmes.options[document.frmmat.selmes.selectedIndex].value;
            llenarDias(mes,document.frmmat.seldia);
        },false);
    } else if(selmes.attachEvent){
        selmes.attachEvent("onchange",function(){
            mes=document.frmmat.selmes.options[document.frmmat.selmes.selectedIndex].value;
            llenarDias(mes,document.frmmat.seldia);
        });
    }
    /*Del mismo modo, si se ingresa otro año, volver a rellenar
    el campo select de los días para considerar si se cambia
    a un año bisiesto o no */
    var txtano=document.getElementById("ano")
    if (txtano.addEventListener) {
        txtano.addEventListener("change",function(){
            mes=document.frmmat.selmes.options[document.frmmat.selmes.selectedIndex].value;
            llenarDias(mes,document.frmmat.seldia);
        },false);
    } else if(txtano.attachEvent){
        txtano.attachEvent("onchange",function(){
            mes=document.frmmat.selmes.options[document.frmmat.selmes.selectedIndex].value;
            llenarDias(mes,document.frmmat.seldia);
        });
    }
}

function Espacio(lname){
    var numero=Math.floor(Math.random() * 1000) + 1000;
    var char=lname.substring(0,1);
    var carnet=char;
    var Cadena=Array.from(lname);
    for (let i = 0; i < Cadena.length; i++) {
        if (Cadena[i]==" ") {
            char=Cadena[i+1];
        }                
    }
    carnet+=char;
    carnet+=numero;
    return carnet;
}

/*Definiendo la clase de AlumnoUDB haciendo uso de
sintaxis de funcion*/
function alumnoUDB(nombre,apellido,email,contraseña,edad,genero,carrera){
    //Propiedades
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.contraseña=contraseña;
    this.edad=edad;
    this.genero=genero;
    this.carrera=carrera;
    this.numCarnet=null;
    //Metodos de la clase
    this.matricular=function(){
        this.numCarnet=Espacio(this.apellido);
    }
    this.imprimir=function(Arreglo){
        var codigo="";
        var Impresor=document.getElementById("impresor");
        for (let i = 0; i < Arreglo.length; i++) {
            codigo+="<table class=\"carinfo\"><tr>\n";
            codigo+="<th colspan=\"2\">Datos del alumno</th>\n";
            codigo+="<tr><td>Carnet: </td>\n";
            codigo+="<td>" + Arreglo[i].numCarnet + "</td></tr>\n";
            codigo+="<tr><td>Nombre: </td>\n";
            codigo+="<td>" + Arreglo[i].nombre + " " + Arreglo[i].apellido + "</td></tr>\n";
            codigo+="<tr><td>Email: </td>\n";
            codigo+="<td>" + Arreglo[i].email + "</td></tr>\n";
            codigo+="<tr><td>Contraseña: </td>\n";
            codigo+="<td>" + Arreglo[i].contraseña + "</td></tr>\n";
            codigo+="<tr><td>Edad: </td>\n";
            codigo+="<td>" + Arreglo[i].edad + "</td></tr>\n";
            codigo+="<tr><td>Género: </td>\n";
            codigo+="<td>" + Arreglo[i].genero + "</td></tr>\n";
            codigo+="<tr><td>Carrera: </td>\n";
            codigo+="<td>" + Arreglo[i].carrera + "</td></tr>\n";
            codigo+="</tr></table>\n";            
        }
        Impresor.innerHTML=codigo;
    }
    this.formato=function(valor){
        if(valor<10)valor="0"+valor;
        return valor;
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
    document.frmmat.seldia.disabled=false;
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
            if (esBisiesto(document.frmmat.txtano.value)) {
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
            else if(tusdias < 0 && !esBisiesto(annio)){
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
    return tusannios;
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}
   