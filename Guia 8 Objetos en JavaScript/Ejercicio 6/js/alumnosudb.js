//Registrar evento click al presionar el botón de envio
function iniciar(){
    var btnenviar=document.getElementById("btnSend");
    /*Al producirse un click sobre el botón de envío
    invocar los metodos del objeto carro que mostrarán
    los valores ingresados en el formulario */
    if (btnenviar.addEventListener) {
        btnenviar.addEventListener("click",function(){
            var chkvalue,selvalue,nuevoalumno;
            var radiofield=document.frmmat.elements["chkgender"];
            for (let i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue=radiofield[i].value;
                }
            }
            selvalue=document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno=new alumnoUDB(document.frmmat.txtname.value,document.frmmat.txtlastname.value,document.frmmat.txtage.value,chkvalue,selvalue);
            nuevoalumno.matricular();
            nuevoalumno.imprimir();
        },false);
    }
    else{
        btnenviar.attachEvent("onclick",function(){
            var chkvalue,selvalue,nuevoalumno;
            var radiofield=document.frmmat.elements["chkgender"];
            for (let i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue=radiofield[i].value;
                }
            }
            selvalue=document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno=new alumnoUDB(document.frmmat.txtname.value,document.frmmat.txtlastname.value,document.frmmat.txtage.value,chkvalue,selvalue);
            nuevoalumno.matricular();
            nuevoalumno.imprimir();
        });
    }
}

/*Definiendo la clase de AlumnoUDB haciendo uso de
sintaxis de funcion*/
function alumnoUDB(nombre,apellido,edad,genero,carrera){
    //Propiedades
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.carrera=carrera;
    this.numCarnet=null;
    //Metodos de la clase
    this.matricular=function(){
        var fecha=new Date();
        var year=fecha.getFullYear();
        var day=fecha.getDate();
        var sec=fecha.getSeconds();
        this.numCarnet=this.nombre.substring(0,1)+this.apellido.substring(0,1)+this.formato(sec)+this.formato(day)+year;
    }
    this.imprimir=function(){
        document.write("<!DOCTYPE html>\n");
        document.write("<html lang=\"es\">\n");
        document.write("<head>\n\t");
        document.write("<title>Alumno matriculado</title>\n");
        document.write("<meta charset=\"utf-8\" />");
        document.write("<link rel=\"stylesheet\" href=\"css/infoalumno.css\"/>\n");
        document.write("</head>\n");
        document.write("<body>\n");
        document.write("<table class=\"carinfo\"><tr>\n");
        document.write("<th colspan=\"2\">Datos del alumno</th>\n");
        document.write("<tr><td>Carnet: </td>\n");
        document.write("<td>" + this.numCarnet + "</td></tr>\n");
        document.write("<tr><td>Nombre: </td>\n");
        document.write("<td>" + this.nombre + " " + this.apellido + "</td></tr>\n");
        document.write("<tr><td>Edad: </td>\n");
        document.write("<td>" + this.edad + "</td></tr>\n");
        document.write("<tr><td>Género: </td>\n");
        document.write("<td>" + this.genero + "</td></tr>\n");
        document.write("<tr><td>Carrera: </td>\n");
        document.write("<td>" + this.carrera + "</td></tr>\n");
        document.write("</tr></table>\n");
        document.write("</head>\n");
        document.write("</html>\n");       
    }
    this.formato=function(valor){
        if(valor<10)valor="0"+valor;
        return valor;
    }
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}
   