var compra=new Array();
var producto;
var precio;
var formview,htmltabla,etiqueta="";

function init(){
    console.log('Hola Mundo');
    var form=document.getElementById('form');
    formview=document.getElementById('view');
    form.onsubmit=function(){
        if (document.frmConf.txtPro.value!=""&&document.frmConf.txtPre.value!=""&&!isNaN(document.frmConf.txtPre.value)) {
            enListar(document.frmConf.txtPro.value,document.frmConf.txtPre.value)
            console.log(compra);
            imprimir(compra);
            form.reset();
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function enListar(pro,pre){
    var conjunto=[pro,pre]
    compra.push(conjunto);
}

function imprimir(productos){
    var total=0;
    with(document){
        htmltabla="<table class=\"zui-table zui-table-rounded\">";
        htmltabla+="<thead>";
        htmltabla+="<tr><th>Productos</th>";
        htmltabla+="<th>Precio</th>";
        htmltabla+="</thead>";
        htmltabla+="<tbody>";
        for (let i = 0; i < productos.length; i++) {
            for (let j = 0; j < 1; j++) {
                var po=productos[i][j];   
                if(j=1){
                    var pe=productos[i][j];
                }
                etiqueta="<tr><td>"+po+"</td><td class=\"number\">" +"$"+ pe + "</td>";
                htmltabla+=etiqueta;
                total+= parseFloat(pe);
                console.log(po+', '+pe)
            }
        }
        htmltabla+="</tbody>";
        htmltabla+="<tfoot>";
        htmltabla+="<tr><th>Totales</th>";
        htmltabla+="<th class=\"number\">" +"$"+ total +"</th>";
        htmltabla+="</tfoot>";
        htmltabla+="</table>";
    }
    formview.innerHTML=htmltabla;
}

window.onload=init;