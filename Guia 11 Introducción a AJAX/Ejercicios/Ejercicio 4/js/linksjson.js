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
            var rssentries = jsondata.items;
            var output = "<ul>";
            for(var i=0; i<rssentries.length; i++){
                output += "<li>";
                output += "<a href=\"" + rssentries[i].link + "\" title=\"" + rssentries[i].title + "\">";
                output += "<img src=\"" + rssentries[i].logo + "\">";
                output += "<h3>" + rssentries[i].title + "</h3>";
                output += "<p>" + rssentries[i].description + "</p>";
                output += "</a>";
                output += "</li>";
            }
            output += "</ul>";
            document.getElementById("result").innerHTML = output
        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}

request.open("GET", "json/linksdata.json", true);
request.send(null);