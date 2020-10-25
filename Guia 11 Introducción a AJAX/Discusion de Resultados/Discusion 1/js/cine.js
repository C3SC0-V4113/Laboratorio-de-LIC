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
            var jsondata = JSON.parse(request.responseText);
            var Titulo=jsondata.title;
            var pagDescripcion=jsondata.description;
            var encabezado="<h1>"+Titulo+"</h1>";
            encabezado+="<p>"+pagDescripcion+"</p>";
            console.log(Titulo+" "+pagDescripcion);
            var rssentries = jsondata.items;
            var output = "";
            for(var i=0; i<rssentries.length; i++){
                output += "<img src=\"" + rssentries[i].logo + "\""+" id=\"" + i + "\""+"onclick=\"sacarInformacion(this.id);\" >";
            }

            console.log(output);
            document.getElementById("Encabezado").innerHTML=encabezado;
            document.getElementById("Contenido").innerHTML = output;
        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}

request.open("GET", "json/peliculas.json", true);
request.send(null);

function sacarInformacion(id){
    contenedorfinal=document.getElementById("Informacion");
    if(request.readyState==4){
        if(request.status==200 || window.location.href.indexOf("http")==-1){
            var jsondata = JSON.parse(request.responseText);
            var items=jsondata.items[parseInt(id)];
            console.log(jsondata.items[parseInt(id)].Titulo);
            var texto="<h2>"+items.Titulo+"</h2>";
            texto+="<p>Sinopsis: "+items.Sinopsis+"</p><br>";
            texto+="<p>Director: "+items.Director+"</p><br>";
            texto+="<p>Reparto: </p><br>";
            texto+="<ul>";
            var ArregloReparto=items.Reparto.split(";");
            console.log(ArregloReparto);
            for (let i = 0; i < ArregloReparto.length; i++) {
                texto+="<li>"+ArregloReparto[i]+"</li>";
            }
            texto+="</ul>";
            contenedorfinal.innerHTML=texto;
        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}