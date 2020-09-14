var compra=new Array();
var producto;
var precio;
var formview,htmlform;

function init(){
    console.log('Hola Mundo');
    var form=document.getElementById('form');
    formview=document.getElementById('view');
    form.onsubmit=function(){
        enListar(document.frmConf.txtPro.value,document.frmConf.txtPre.value)
        console.log(compra);
        imprimir(compra);
    }
}

function enListar(pro,pre){
    var conjunto=[pro,pre]
    compra.push(conjunto);
}

function imprimir(productos){
    with(document){
        htmlform=+write("<table class=\"zui-table zui-table-rounded\">");
        htmlform=+write("<thead>");
    htmlform=+write("<tr><th>Productos</th>");
    htmlform=+write("<th>Precio</th>");
    htmlform=+write("</thead>");
    htmlform=+write("<tbody>");
    /*htmlform=+write("<tr><td>Votos a favor </td><td class=\"number\">" + cont1 + "</td>");
    htmlform=+write("<td class=\"number\">" + per1*100 + " %</td></tr>");
    htmlform=+write("<tr><td>Votos en contra </td><td class=\"number\">" + cont2 + "</td>");
    htmlform=+write("<td class=\"number\">" + per2*100 + " %</td></tr>");
    htmlform=+write("<tr><td>Se abstienen de opinar </td><td class=\"number\">" + cont3 + "</td>");
    htmlform=+write("<td class=\"number\">" + per3*100 + " %</td></tr>");*/
    for (let i = 0; i < productos.length; i++) {
        for (let j = 0; j < 1; j++) {
            var po=productos[i][j];   
            if(j=1){
                var pe=productos[i][j];
            }
            htmlform=+write("<tr><td>"+po+"</td><td class=\"number\">" + pe + "</td>");
            console.log(po+', '+pe)
        }
    }
    htmlform=+write("</tbody>");
    htmlform=+write("<tfoot>");
    htmlform=+write("<tr><th>Totales</th>");
    /*htmlform=+write("<th class=\"number\">" + parseInt(cont1+cont2+cont3) +"</th>");
    htmlform=+write("<th class=\"number\">" + (parseFloat(per1+per2+per3))*100 + "%</th>");*/
    htmlform=+write("</tfoot>");
    htmlform=+write("</table>");
    }
    formview.innerHTML=htmlform;
}

window.onload=init;