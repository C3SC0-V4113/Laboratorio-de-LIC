/*Registra evento click al presionar botones de envio
y evento change al cambiar de opcion en el elemento select */
function iniciar(){
    var select=document.getElementById("selfab");
    var button=document.getElementById("enviar");
    /*Al producirse en evento change en el elemento select
    invocar a la funcion addOptions para volver a llenar
    el select dependiente con los datos adecuados */
    if (select.addEventListener) {
        select.addEventListener("change",function(){
            addOptions(marcas[this.options[this.selectedIndex].text],document.frmcar.selmod);
        },false);
    }
    else{
        select.attachEvent("onchange", function(){
            addOptions(marcas[this.options[this.selectedIndex].text], document.frmcar.selmod);
        });
    }
    /*Al producirse un click sobre el botón de envío
    invocar los métodos del objeto carro que mostrarán
    los valores ingresados en el formulario */
    if(button.addEventListener){
        button.addEventListener("click",function(){
            var seleccion=showRadioSelected(document.frmcar.radcolor);
            carro.pedido(document.frmcar.selfab.value,document.frmcar.selmod.value,seleccion,document.frmcar.txtanio.value);
            carro.mostrar();
        },false);
    }
    else{
        button.attachEvent("onclick",function(){
            var seleccion=showRadioSelected(document.frmcar.radcolor);
            carro.pedido(document.frmcar.selfab.value,document.frmcar.selmod.value,seleccion,document.frmcar.txtanio.value);
            carro.mostrar();
        });
    }
}

//Inicializando matriz para manejar las marcas y sus respectivos modelos
var marcas=new Array(7);
marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder", "Patrol", "X-Trail", "Frontier"];
marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg", "Saveiro"];
marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy", "Avalanche", "Trailblazer"];
marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot", "RidgeLine"];
marcas["Mitsubishi"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander", "L200"];

//Creando el objeto carro con el constructor Objet()
var carro=new Object();
//Propiedades
carro.fabricante="";
carro.modelo="";
carro.color="";
carro.anio="";
//Metodos del objeto
carro.pedido=function(fab,mod,col,an){
    carro.fabricante=fab;
    carro.modelo=mod;
    carro.color=col;
    carro.anio=an;
}

carro.mostrar=function(){
    document.write("<!DOCTYPE html>\n");
    document.write("<html lang=\"es\">\n");
    document.write("<head>\n\t");
    document.write("<title>Datos del carro</title>\n");
    document.write("<meta charset=\"utf-8\" />");
    document.write("<link rel=\"stylesheet\" href=\"css/carinfo.css\"/>\n");
    document.write("</head>\n");
    document.write("<body>\n");
    document.write("<table class=\"carinfo\"><tr>\n");
    document.write("<th colspan=\"2\">Datos del carro</th>\n");
    document.write("<tr><td>Fabricante: </td>\n");
    document.write("<td>" + carro.fabricante + "</td></tr>\n");
    document.write("<tr><td>Modelo: </td>\n");
    document.write("<td>" + carro.modelo + "</td></tr>\n");
    document.write("<tr><td>Color: </td>\n");
    document.write("<td>" + carro.color + "</td></tr>\n");
    document.write("<tr><td>Año: </td>\n");
    document.write("<td>" + carro.anio + "</td></tr>\n");
    document.write("</tr></table>\n");
    document.write("</head>\n");
    document.write("</html>\n");   
}

function showRadioSelected(radiogroup){
    var seleccionado;
    var numradios=radiogroup.length;
    console.log(numradios);
    for (let i = 0; i < numradios; i++) {
        if(radiogroup[i].checked){
            seleccionado=radiogroup[i].value;
        }
    }
    return seleccionado;
}

function removeOptions(optionMenu){
    for (let i = 0; i < optionMenu.options.length; i++) {
        optionMenu.options[i]=null;
    }
}

function addOptions(optionList,optionMenu) {
    var i=0;
    removeOptions(optionMenu);
    //Limpia las opciones
    for (let i = 0; i < optionList.length; i++) {
        optionMenu[i]=new Option(optionList[i],optionList[i]);
    }
}

//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load",iniciar,false);
} else if(window.attachEvent){
    window.attachEvent("onload",iniciar);
}