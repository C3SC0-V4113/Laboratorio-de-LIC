console.log("Al inicio de http");
/*Asegurarse que no ha sido cargado elobjeto HTTP*/
var HTTP;
if(HTTP && (typeof HTTP!="object"||HTTP.NAME)){
    throw new Error("Namespace 'HTTP' already exist");
}

/*Crear el objeto HTTP como un espacio de nombres
y especificar alguna meta-informacion */
HTTP={};
/*El nombre de este espacio de nombres */
HTTP.NAME="HTTP";
/*La version del espacio de nombres
en este caso la version del protocolo HTTP */
HTTP.VERSION=1.2;

/*Crear un listado de los distintos objetos XMLHttpRequest
de acuerdo al navegador que se esté utilizando */
HTTP._factories=[
    function(){
        return new XMLHttpRequest();
    },
    function(){
        return new ActiveXObject("Msxm12.XMLHTTP");
    },
    function(){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
];

/*Si se encuentra un objeto XMLHttpRequest que funciona correctamente
se almacena en HTTP._factory */
HTTP._factory=null;

/*Crear y retornar un objeto XMLHttpRequest. La primera vez que invocamos
al objeto XMLHttpRequest probamos con toda la lista de fabricantes de 
navegadores definidos en HTTP._factories hasta que encontramos uno que retorne
un valor nonull sin lanzar una excepcion. Una vez que se retorna un objeto XMLHttpRequest
que funcione se almacena para su futuro uso */

HTTP.newRequest=function(){
    if (HTTP._factory!=null) {
        return HTTP._factory();
    }
    for (let i = 0; i < HTTP._factories.length; i++) {
        try {
            var factory=HTTP._factories[i];
            var request=factory();
            if (request!=null) {
                HTTP._factory=factory;
                return request;
            }
        } catch (error) {
            continue;
        }
    }
    /*Si estamos aqui, ninguna de nuestras fabricas candidatas lo lograron,
    se lanza una excepcion ahora y para cualquier llamado futuro */
    HTTP._factory=function(){
        throw new Error("XMLHttpRequest no soportado");
    }
    HTTP._factory();
}

/*Usa XMLHttpRequest para buscar el contenido de una direccion especifica usando
una sentencia HTTP GET. Cuando la respuesta se reciba, pasarla como texto plano
a la respectiva funcion de llamada

ESTA FUNCION NO BLOQUEA Y NO TIENE UN VALOR DE RETORNO
*/
HTTP.getText=function(url,llamada){
    var peticion=HTTP.newRequest();
    peticion.onreadystatechange=function(){
        if (peticion.readyState==4 && peticion.status==200) {
            llamada(peticion.responseText);
        }
    }
    peticion.open("GET",url);
    peticion.send(null);
};

/*Usa XMLHttpRequest para buscar el contenido de una direccion especifica usando
una sentencia HTTP GET. Cuando la respuesta se reciba, pasarla como XML Document Object
a la respectiva funcion de llamada

ESTA FUNCION NO BLOQUEA Y NO TIENE UN VALOR DE RETORNO
*/
HTTP.getXML=function(url,llamada){
    var peticion=HTTP.newRequest();
    peticion.onreadystatechange=function(){
        if (peticion.readyState==4 && peticion.status==200) {
            llamada(peticion.responseXML);
        }
    }
    peticion.open("GET",url);
    peticion.send(null);
};

/*Usa una peticion HTTP HEAD para obtener los encabezados para una ruta URL especifica.
Cuando los encabezados sean recibidos, se convertiran con HTTP.parseHeaders() y se envia
el obejto resultante a la funcion de invocacion respectiva. Si el servidor retorna
un error de codigo, invoca el errorHandler especifico en su lugar. Si no hay un errorHandler
especificado, se envia null a la funcion de invocacion */
HTTP.getHeaders=function(url,llamada,errorHandler){
    var peticion=HTTP.newRequest();
    peticion.onreadystatechange=function(){
        console.log("Estado de Peticion: "+peticion.readyState+" Estatus: "+peticion.status);
        if (peticion.readyState==4) {
            if (peticion.status==200) {
                llamada(HTTP.parseHeaders(peticion));
            }
            else{
                if (errorHandler) {
                    errorHandler(peticion.status,peticion.statusText);
                } else {
                    llamada(null);
                }
            }
        }
    }
    console.log(llamada(HTTP.parseHeaders(peticion)));
    peticion.open("HEAD",url);
    peticion.send(null);
};

/*Convierte las respuestas de los encabezados de un objeto XMLHttpRequest para retornar
los nombres de los encabezados y sus valores como nombres de propiedades o valores de un
nuevo objeto */

HTTP.parseHeaders=function(peticion){
    var TextoEncabezados=peticion.getAllResponseHeaders();
    console.log("Texto encabezado: "+TextoEncabezados);
    var Encabezados={};
    var ls=/^\s*/;
    var ts=/\s*$/;

    /*Dividir los encabezados por lineas */
    var lineas=TextoEncabezados.split("\n");
    /*Bucle en cada linea */
    for (let i = 0; i < lineas.length; i++) {
        var linea=lineas[i];
        if (linea.length==0) {
            /*Si no tiene longuitud, solo se omite */
            continue;
        }
        /*Cortar cada linea hasta el primer dos puntos y quitar los espacios en blanco */
        var pos=linea.indexOf(":");
        var name=linea.substring(0,pos).replace(ls, "").replace(ts,"");
        var valor=linea.substring(pos+1).replace(ls,"").replace(ts,"");
        /*Almacenar los encabezados nombre/valor en parejas, en un objeto de JavaScript */
        Encabezados[name]=valor;
    }
    console.log(Encabezados);
    return Encabezados;
};

/*Enviar una peticion HTTP POST a una URL especifica, usando los nombres y valores de propiedades
de valores de objetos como peticiones de un cuerpo. Convertir la respuesta
del servidor acorde a tipo de contenido y enviar el resultado de valor a la funcion
invocadora. Si un error de HTTP ocurre, llamar al errorHandler respectivo, o enviar null
a la funcion invocadora si no hay un errorHandler especificado */
HTTP.post=function(url, valores,llamada,errorHandler){
    var peticion=HTTP.newRequest();
    peticion.onreadystatechange=function(){
        if (peticion.readyState==4) {
            if (peticion.status==200) {
                llamada(HTTP._getResponse(peticion));
            }
            else{
                if (errorHandler) {
                    errorHandler(peticion.status,peticion.statusText);
                }
                else{
                    llamada(null);
                }
            }
        }
    }
    peticion.open("POST",url);
    /*Este encabezado dice al servidor como interpretar el cuerpo de la peticion */
    peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
    /*Codificar las propiedades de los obejtos valores y enviarlas como el cuerpo lo pida */
    peticion.send(HTTP.encodeFormData(valores));
};

/*Codificar las propiedades name/valor parejas del objeto como si fueran de 
un form de HTML, usando formato application/x-www-form-urlencoded */

HTTP.encodeFormData=function(datos){
    var pares=[];
    /*Expresion regular que encaja con los espacios codificados */
    var regexp=/%20/g;
    for(var name in datos){
        var valores=datos[name].toString();
        /*Crear una pareja name/valor, pero codificar name y valor primero
        La funcion global encodeURIComponent hace casi, lo que queremos,
        pero codifica espacios de %20 en lugar de "+". Se tiene que arreglar con un
        String.replace() */
        var pareja=encodeURIComponent(name).replace(regexp,"+")+"="+encodeURIComponent(valores).replace(regexp,"+");
        pares.push(pareja);
    }
    /*Concatena todos los pares name/valores, separandolos con "&" */
    return pares.join("&");
};

/*Convierte una respuesta HTTP basada en su encabezado tipo de contenido
y retorna un objeto convertido */
HTTP._getResponse=function(peticion){
    console.log("EN GETRESPONSE");
    /*Busca contenido de tipo retornado por el servidor */
    switch (peticion.getRespondeHeader("content-type")) {
        case "text/xml":
            /*Si es un objeto de documento XML, se usa el conversor */
            console.log(peticion.responseXML);
            return peticion.responseXML;
        case "text/json":
        case "application/json":
        case "text/javascript":
        case "application/javascript":
        case "application/x-javascript":
            /*Si la respuesta es un codigo de JavaScript, o un valor codificado JSON,
            llamar a eval() en el texto para "parse" a un valor de JavaScript.
            NOTA: solo hacer esto con codigo de JavaScript de servidores de confianza! */
            console.log(peticion.responseText);
            return eval(peticion.responseText);
    
        default:
            /*De otra manera, tratar la respuesta como texto plano y retornar un String */
            console.log(peticion.responseText);
            return peticion.responseText;
    }
};

/*Enviar una peticion de HTTP GET por una URL especifica. Si la respuesta es satisfactoria,
se convertira a un objeto basado en el Content-Type encabezado y se envia a la funcion invocadora.
Argumentos Adicionales pueden especificarse como propiedades de las opciones de Objeto

Si una respuesta erronea es recibida (Como por ejemplo, un 404 Not Found), el codigo de
estatus y un mensaje son enviados a las optiones de la funcion errorHandler.
Si el error no es especificado, la funcion invocadora se le envia un null

Si el objeto options.parameters es especificado, sus propiedades son tomadas
como los names y valores de los parametros de la peticion. Estos son convertidos a un
string de URL codificada con HTTP.encodeFormData() y son adjuntados al URL con un "?".

Si una funcion options.progresssHandler es especificada, es llamada cada vez que
la propiedad readyState esta establecida con un valor menor de 4. Cada llamada al
progresssHandler un valor entero es pasado que determina la cantidad de veces que se ha llamado

Si un valor options.timeout es especificado, el XMLHttpRequest is abortado si no se ha completado
antes de la cantidad de milisegundos que han pasado. Si el tiempo pasa y un options.timeoutHandler 
es especificado, la funcion es llamada con la URL pedida y su argumento
*/
HTTP.get=function(url,llamada,opciones){
    var peticion=HTTP.newRequest();
    var n=0;
    var temporizador;
    if (opciones.timeout) {
        temporizador=setTimeout(function(){
            peticion.abort();
            if (opciones.timeoutHandler) {
                opciones.timeoutHandler(url);
            }
        },opciones.timeout);
    }
    peticion.onreadystatechange=function(){
        if (peticion.readyState==4) {
            if (temporizador) {
                clearTimeout(temporizador);
            }
            if (peticion.status==200) {
                llamada(HTTP._getResponse(peticion));
            } 
            else {
                if (opciones.errorHandler) {
                    opciones.errorHandler(peticion.status,peticion.statusText);
                } else {
                    llamada(null);
                }
            }
        } else if(opciones.progressHandler){
            opciones.progressHandler(++n);
        }
    }
    var objetivo=url;
    if (opciones.parameters) {
        objetivo+="?"+HTTP.encodeFormData(opciones.parameters);
    }
    peticion.open("GET", objetivo);
    peticion.send(null);
};

HTTP.getTextWithScript=function(url,llamada){
    /*Crear un nuevo elemento script y añadirlo al documento */
    var script=document.createElement("script");
    document.body.appendChild(script);

    /*Obtener un nombre unico de funcion */
    var funcname="func"+HTTP.getTextWithScript.counter++;

    /*Definir una funcion con ese nombre, usando esta funcion como un espacio
    de nombre conveniente. El script generado en el servidor invoca la funcion */
    HTTP.getTextWithScript[funcname]=function(text){
        /*Pasar el texto a la funcion invocadora */
        llamada(text);
        /*Limpiar la etiqueta del script y generar una funcion */
        document.body.remove(script);
        delete HTTP.getTextWithScript[funcname];
    }
    /*Codificar la URL que queremos buscar y el nombre de la funcion como argumento
    para el jsquoter.php del script del lado del server. Establecer la propiedad src de 
    la etiqueta script para buscar la URL */
    script.src="jsquoter.php"+"?url="+encodeURIComponent(url)+"&func="+encodeURIComponent("HTTP.getTextWithScript."+funcname);
}

/*Usamos esto para generar una unica funcion de retrollamada en casi de que haya
más de una solicitud al mismo tiempo. */
HTTP.getTextWithScript.counter=0;