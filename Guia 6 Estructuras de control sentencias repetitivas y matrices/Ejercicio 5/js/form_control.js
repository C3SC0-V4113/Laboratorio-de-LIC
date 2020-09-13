function init(){
    console.log('Hola Mundo');
    var form=document.getElementById('form');
    form.onsubmit=function(){
        console.log('Dentro de funcion sin nombre dentro de otra funcion antes de correr');    
        createform(document.frmConf.selcontrol.value,document.frmConf.txtnum.value);
        console.log('Dentro de funcion sin nombre dentro de otra funcion');    
    }
}

function createform(control,numero){
    var htmlform,tag,i;
    //Referenciar al elemento de la página web dondde se mostrará el formulario creado
    var formview=document.getElementById('view');
    htmlform= "<div class=\"dynamic-form\">";
    htmlform+= "<form name=\"miform\">\n";
    htmlform+= "<fieldset>\n";
    htmlform += "<legend><span class=\"number\">1</span> Formulario dinámico</legend>";
    with(document){
        //Dependiendo del tipo de control
        switch (control) {
            case "text":
                for (let i = 0; i < numero; i++) {
                    tag="<input type=\"" + control + "\" name=\"" + control + (i+1) +"\" required placeholder=\"Ingrese su texto " + control + "\" /><br>\n";
                    htmlform+=tag;
                }
                break;
            case "password":
                for (let i = 0; i < numero; i++) {
                    tag="<input type=\"" + control + "\" name=\"" + control + (i+1) +"\" required placeholder=\"Ingrese su contraseña " + control + "\" /><br>\n";
                    htmlform+=tag;
                }
                break;
            case "textarea":
                for (let i = 0; i < numero; i++) {
                    tag="<textarea name=\"" + control + (i+1) + "\" required placeholder=\"Ingrese los datos en el campo " + control + "\"></textarea><br />\n";
                    htmlform += tag;
                }
                break;
            case "checkbox":
                for (let i = 0; i < numero; i++) {
                    tag= "<div>\n<input type=\"" + control + "\" name=\"" + control + (i+1) + "\" id=\"" + control + (i+1) + "\" />\n";
                    tag+= "<label for=\"" + control + (i+1) + "\">\n";
                    tag+= control + (i+1) + "</label>\n</div>" + "\n";
                    htmlform += tag;
                }
                break;
            case "radio":
                for (let i = 0; i < numero; i++) {
                    tag= "<div>\n<label for=\"" + control + (i+1) + "\">\n";
                    tag+="\t<input type=\"" + control + "\" name=\"" + control + "\"id=\"" + control + (i+1) + "\" />\n";  
                    tag+="\t<span>" + control + (i+1) + "</span>\n</label>\n</div>" + "\n";                                   
                    htmlform += tag;
                }
                break;
            case "file":
                for (let i = 0; i < numero; i++) {
                    tag=  "<label class=\"custom-file-input file-blue\"><br />\n";
                    tag+="\t<input type=\"file\" name=\"" + control + (i+1) + "\" /><br/>\n";                    
                    tag+= "</label><br />\n";
                    htmlform += tag;
                }
                break;
            case "button":
                for (let i = 0; i < numero; i++) {
                    tag="<button name=\"" + control + (i+1) + "\">" + control + (i+1) + "</button><br />\n";                    
                    htmlform += tag;
                }
                break;
            default:
                alert('No ha seleccionado el tipo de control');
                break;
        }
        htmlform += "</fieldset>\n";
        htmlform += "</form>\n";       
    }
    htmlform += "</div>";
    formview.innerHTML = htmlform;
}

window.onload=init;