//Creando el objeto
var book=new Object();

//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var showinfo=document.getElementById("mostrar");
    if (showinfo.addEventListener) {
        showinfo.addEventListener("click",function(){
            createObject(document.frmbook);
        },false);
    }
    else if(showinfo.attachEvent){
        showinfo.attachEvent("onclick",function(){
            createObject(document.frmbook);
        });
    }
}

//Creando el nuevo objeto
function createObject(form){
    book.autor=form.txtautor.value;
    book.titulo=form.txtitulo.value;
    book.editorial=form.seleditorial.options[form.seleditorial.selectedIndex].text;
    book.edicion=form.seledicion.options[form.seledicion.selectedIndex].text;
    book.pais=form.txtpais.value;
    showProperties(book,"Infobook");
}

function showProperties(objeto, objName){
    var infBook="";
    var tblBook="";
    for(var i in objeto){
        infBook=infBook+objName+"."+i+"="+objeto[i]+"\n";
    }
    if(!confirm(infBook+"\n\n¿Es esta información correcta?")){
        frmbook.txtautor.value="";
        frmbook.txtitulo.value="";
        frmbook.seleditorial.value="a";
        frmbook.seledicion.value="a";
        frmbook.txtpais.value="";
    }
    tblBook += "<!DOCTYPE html>\n";
    tblBook += "<html lang=\"es\">\n";
    tblBook += "<head>\n\t";
    tblBook += "<title>Información del libro</title>\n";
    tblBook += "<meta charset=\"utf-8\" />";
    tblBook += "<link rel=\"stylesheet\" href=\"css/infolibro.css\"/>\n";
    tblBook += "</head>\n";
    tblBook += "<body>\n";
    tblBook += "<table class=\"bookinfo\">";
    tblBook += "<thead>\n\t<tr>\n\t\t";
    tblBook += "<th>Título</th>\n\t\t";
    tblBook += "<th>Autor</th>\n\t\t";
    tblBook += "<th>Editorial</th>\n\t\t";
    tblBook += "<th>Edición</th>\n\t\t";
    tblBook += "<th>País</th>\n\t\t";
    tblBook += "</tr>\n\t</thead>\n";
    tblBook += "<tbody>\n\t";
    tblBook += "<tr>\n\t\t";
    tblBook += "<td>" + book.titulo + "</td>\n\t\t";
    tblBook += "<td>" + book.autor + "</td>\n\t\t";
    tblBook += "<td>" + book.editorial + "</td>\n\t\t";
    tblBook += "<td>" + book.edicion + "</td>\n\t\t";
    tblBook += "<td>" + book.pais + "</td>\n\t\t";
    tblBook += "</tr></tbody>\n";
    tblBook += "</table>\n";
    tblBook += "</head>\n";
    tblBook += "</html>\n";
    document.write(tblBook);   
}

//Asociando funcion que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load",iniciar,false);
} else if(window.attachEvent){
    window.attachEvent("onload",iniciar);
}