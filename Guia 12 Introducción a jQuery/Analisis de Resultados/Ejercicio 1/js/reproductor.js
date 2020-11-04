function ajaxRequest(){
    //Crear array() con cadenas para creación de objeto ActiveX
    //en caso de navegadores antiguos de Internet Explorer
    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; 
    //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
    if(window.ActiveXObject){ 
        for(var i=0; i<activexmodes.length; i++){
            try{
                return new ActiveXObject(activexmodes[i]);
            }
            catch(e){
                return false;
            }
        }
    }
    // Si se está usando Chrome, Mozilla, Safari, Opera, etc.
    else if (window.XMLHttpRequest){ 
        console.log("Creando Peticion");
        return new XMLHttpRequest();
    }
    else{
        return false;
    }
}

var request = new ajaxRequest();
request.onreadystatechange = function(){
    if(request.readyState==4){
        if(request.status==200 || window.location.href.indexOf("http")==-1){
        //Recibir resultado como un objeto de JavaScript usando la función eval()
        //var jsondata = eval("("+request.responseText+")");
        //Recibir resultado como un objeto de JavaScript usando el método parse()
        alert("Peticion realizada con exito "+request.readyState+" ; "+request.status);
            var jsondata = JSON.parse(request.responseText);
            console.log(jsondata);
            var encabezado="<header class='inside-plus'>";
            encabezado+="<div id='logo'><img src='junk/speakker-dark.png' alt='Speakker - A ProjekktorXL Projekkt'>";
            encabezado+="<h1>Reproductor Speakker</h1>";
            encabezado+="</div></header>";
            var pagina="<p>Esta es una pequeña demostración de un reproductor de audio en web llamado Speakker implementado con la librería jQuery. Este reproductor usa una lista de reproducción con JSON que puede verificar en el archivo <a href='playlist.json'>playlist.json</a> para que puede tener una idea de cómo personalizar otra lista más acorde a su gusto musical. Puede encontrar más información sobre cómo hacer su propia lista. <a href='http://www.projekktor.com/docs/playlists'>aquí</a>. Si desea chequear un poco la documentación de este reproductor ve a <a href='http://www.projekktor.com/docs/api'>este sitio</a>.</p><p> Speakker es un producto de libre distribución. De modo que si te gusta lo que ves puedes hacer una: <a href='http://www.projekktor.com/donate.php'>donación</a>.</p>";
            var acerca="<p class='left'> Speakker es un producto de last.fm-resque audio player construido sobre la base del famoso reproductor de vídeo <a href='http://www.projekktor.com' title='projekktor website'>projekktor</a>.</p><p class='separator'>&copy; 2011-2012 <a href='http://www.porkhead.org'>Porkhead.org</a>&amp; <a href='http://www.spinningairwhale.com'>Spinning Airwhale</a></p>"
            var cabeza=document.getElementById("encabezado");
            var entorno=document.getElementById("entorno");
            var about=document.getElementById("about");
            cabeza.innerHTML=encabezado;
            entorno.innerHTML=pagina;
            about.innerHTML=acerca;
        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}

request.open("GET", "./playlist.json", true);
request.send(null);