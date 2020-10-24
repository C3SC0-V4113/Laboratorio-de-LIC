/*Este módulo de JavaScript no obstruviso añade manejadores de evento
a los enlaces presentes en el documento de modo que muestren textos de 
ayuda cuando el ratón se posicione encima de éstos por un tiempo de 
medio segundo. Si el enlace apunta a un documento en el mismo servidor 
el texto de ayuda incluirá el tipo, tamaño y fecha obtenidos con una 
petición XMLHttpRequest */

/*Funcion anonima que engloba toda la lógica del script */
(function(){
    /*Creando un Tooltip */
    console.log("Al inicio de linkdetails");
    var tooltip=new Tooltip();

    /*Llamar a init al inicializarse el documento */
    if (window.addEventListener) {
        window.addEventListener("load",init,false);
    } else if(window.attachEvent){
        window.attachEvent("onload",init);
    }

    function init() {
        var links=document.getElementsByTagName("a");
        /*Se recorren todos los enlaces */
        for (let i = 0; i < links.length; i++) {
            if (links[i].href) {
                addTooltipToLink(links[i]);
            }
        }
    }

    function addTooltipToLink(link){
        /*Manejadores de Eventos */
        if (link.addEventListener) {
            link.addEventListener("mouseover",mouseover,false);
            link.addEventListener("mouseout",mouseout,false);
        } else if (link.attachEvent) {
            link.attachEvent("mouseover",mouseover);
            link.attachEvent("mouseout",mouseout);
        }
        /*Variable con setTimeout/clearTimeout */
        var timer;
        function mouseover(event){
            /*Manejo del evento de ratón para cualquier navegador */
            var e=event||window.event;
            /*Obtener las posiciones especificas del ratón cuando se posiciona
            encima de los enlaces convirtiendo a coordenadas del documento añadiendo
            un desplazamiento */
            var x=e.clientX+Geometry.getHorizontalScroll()+20;
            var y=e.clientY+Geometry.getVerticalScroll()+12;

            console.log("X= "+x+"    Y= "+y+"       Evento: "+event+"       Temporizador: "+timer);
    
            /*Si existe algún tooltip pendiente de cancelar se limpia */
            if (timer) {
                window.clearTimeout(timer);
            }
            /*Programar el temporizador para que aparezca transcurrido medio
            segundo */
            timer=window.setTimeout(showTooltip,500);
    
            function showTooltip(){
                /*Si es un enlace HTTP, y si es del mismo host del que es el script
                podemos usar XMLHttpRequest para obtener la informacion sobre el */
                console.log("Protocolo: "+link.protocol+" Host: "+link.host+" locacion host "+location.host);
                if (link.protocol=="http:"&& link.host==location.host) {
                    console.log("AQUI ESTOY, CON LA MIRADA PERDIDA");
                    /*Hacer un XMLHttpRequest para los encabezados de los enlaces */
                    HTTP.getHeaders(link.href,function(headers){
                        /*Usar encabezados HTTP para crear la cadena de texto */
                        var tip="URL: "+link.href+"<br>"+"Type: "+headers["content-type"]+"<br>"+"Size: "+headers["content-length"]+"<br>"+"Date: "+headers["last-modified"];
                        console.log(tip);
                        /*Desplegar el texto anterior  como un tooltip */
                        tooltip.show(tip,x,y);
                    });
                } else {
                    /*De otra manera. si es un link fuer del sitio, el tooltip será
                    solo un URL del enlace */
                    tooltip.show("URL: "+link.href,x,y);
                }
            }
        }
        function mouseout(e){
            /*Cuando el ratón se retire del enlace, se limpiara cualquier tooltip pendiente
            o esconderlo si se está mostrando */
            if (timer) {
                window.clearTimeout(timer);
            }
            timer=null;
            tooltip.hide();
        }
    }
})();