/*Crear una variable de Bool para comprobar si se usa Internet Explorer */
var xmlhttp=false;

/*Comprobar si se esta usando IE */
try {
    /*Si la version de Internet Explorer es superior a la 5.0 */
    xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    /*Si no, utilizar el tradicional objeto ActiveX */
    try {
        /*Si se está usando IE */
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    } catch (error) {
        /*En caso contrario no se esta usando IE */
        xmlhttp=false;
    }
}

/*Si no se está usando IE, crear una instancia ActiveX del objeto */
if (!xmlhttp&&typeof XMLHttpRequest !="undefined") {
    xmlhttp=new XMLHttpRequest();
}

function makerequest(serverPage,objID){
    var obj=document.getElementById(objID);
    xmlhttp.open("GET",serverPage);
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4&&xmlhttp.status==200) {
            obj.innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}