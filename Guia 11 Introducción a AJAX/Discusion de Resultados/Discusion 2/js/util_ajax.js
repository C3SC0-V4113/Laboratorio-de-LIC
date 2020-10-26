function xml_text_node(elem,nam){
    try {
        return elem.getElementsByTagName(nam)[0].firstChild.nodeValue;
    } catch (e) {
        return "";
    }
}

var AJAX={
    XMLHTTPFactories:[
        function(){return new XMLHttpRequest()},
        function(){return new ActiveXObject("Msxml2.XMLHTTP")},
        function(){return new ActiveXObject("Msxml3.XMLHTTP")},
        function(){return new ActiveXObject("Microsoft.XMLHTTP")}
    ],
    createXMLHTTPObject: function(){
        xmlhttp=null;
        for (let i = 0; i < AJAX.XMLHTTPFactories.length; i++) {
            try {
                xmlhttp=AJAX.XMLHTTPFactories[i]();
            } catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    },
    objectToURL:function(url,query_str_obj){
        url_str=url+"?";
        for(property in query_str_obj){
            url_str+=property+"="+encodeURIComponent(query_str_obj[property])+"&";
        }
        return url_str;
    },
    execute: function(url,functionCallBack){
        request=new Object();
        request.ajaxRequest=AJAX.createXMLHTTPObject();
        request.sendRequest=function(){
            /*Segun la guia, este codigo es inutil, porque siempre se crea
            un request nuevo, pero ya que estamos solo copiemoslo */
            if (request.ajaxRequest.readyState==1) {
                alert("error: Aun se procesa una peticion anterior");
                return;
            }
            request.ajaxRequest.open("GET",url);
            request.ajaxRequest.onreadystatechange=function(){
                if (request.ajaxRequest.readyState==4 && request.ajaxRequest.status==200) {
                    functionCallBack(request.ajaxRequest);
                }
            }
            request.ajaxRequest.send(null);
        }
        request.sendRequest();
        return request;
    }
};