(function ($) {
    //Creación del método galeria
    $.fn.galeria = function () {
        //Se define una plantilla donde se crea la estructura
        //que deseamos tenga la galería. En el div id="panel"
        //se define un parámetro ({imagenes}) que será utilizado
        //para cargar las imágenes de la galería
        var plantilla = '<div id="thumbs"></div>' +
            '<div id="panel">{imagenes}</div>' +
            '<div id="titulo"></div>';
        //Reemplazando el parámetro {imagenes} por el contenido real
        plantilla = plantilla.replace("{imagenes}", $(this).html());
        $(this).html(plantilla);
        var html_ul = "<ul>";
        $("#panel img").each(function () {
            html_ul += '<li><a href="javascript:void(0);">';
            html_ul += '<img src="' + $(this).attr('src') + '" />';
            html_ul += '</a>';
        });
        html_ul += "</ul>";
        $("#thumbs").html(html_ul);
        //Mostrar imágenes de tamaño completo en el panel principal
        //de la garlería
        $("#panel img:eq(0)").show();
        $("#thumbs a").click(function () {
            show($(this).find("img").attr("src"));
        });
        //Hacer aparecer una imagen la primera vez que se carga la página
        $("#thumbs a:eq(0)").click();
        //Aparecer y desaparecer los títulos de las imágenes
        $("#panel").mouseover(function () {
            $("#titulo").fadeIn(750);
        });
        $("#panel").mouseout(function () {
            $("#titulo").fadeOut(750);
        });
    }
    //Función que mostrará las imágenes de la galería en el panel
    function show(src) {
        var image = $('#panel img[src="' + src + '"]');
        //Ocultar imágenes presentes en el panel antes de mostrar la actual
        $("#panel img").fadeOut();
        //Mostrar la imagen actual sobre la que se hizo clic
        image.show();
        //Hacer que se agregue un efecto de animación cuando aparezca
        //cada imagen de la galería.
        $("#panel").animate({
            'width': image.innerWidth(),
            'height': image.innerHeight()
        }, 1000, function () {
            image.fadeIn(1000);
            $("#titulo").html("<span>" + image.attr('title') + "</span>");
            $("#titulo").css({
                'background': 'rgba(50,50,50,0.8)',
                'color': 'white',
                'height': "25px",
                'position': 'relative',
                'top': '-25px',
                'width': image.innerWidth()
            });
        });
    }
})(jQuery);
