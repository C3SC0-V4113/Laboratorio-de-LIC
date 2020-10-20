function initAll(){
    var Envio=document.getElementById("Envio");
    var radioButtons=document.getElementsByTagName("input");
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].type=="radio") {
            if (radioButtons[i].addEventListener) {
                radioButtons[i].addEventListener("click",chgChart,false);
            }
        }
    }
    if (Envio.addEventListener) {
        Envio.addEventListener("click",chgChart,false);
    }
}

var bChart=new Object();
bChart.name="Uso anual de navegadores";
bChart.years=new Array();
bChart.fieldnames=new Array("Firefox","Chrome","Internet Explorer","Safari","Opera");
bChart.field1 = new Array();
bChart.field2 = new Array();
bChart.field3 = new Array();
bChart.field4 = new Array();
bChart.field5 = new Array();
bChart.fields = new Array(bChart.field1, bChart.field2, bChart.field3, bChart.field4,bChart.field5);

function chgChart(){
    var Año=document.getElementById("idAño").value;
    var FF=document.getElementById("FF").value;
    var CH=document.getElementById("CH").value;
    var IE=document.getElementById("IE").value;
    var SA=document.getElementById("SA").value;
    var OP=document.getElementById("OP").value;
    bChart.years.push(Año);
    bChart.field1.push(FF);
    bChart.field2.push(CH);
    bChart.field3.push(IE);
    bChart.field4.push(SA);
    bChart.field5.push(OP);

    console.log(bChart);

    //Dibujo de Graficos
   var radioButtons=document.getElementsByTagName("input");
   var currDirection=getButton("direction");
   var imgSrc="img/"+getButton("color");
   var thisChart=bChart;
   var chartBody="<h2>"+thisChart.name+"</h2>\n<table>\n";
   for (let i = 0; i < thisChart.years.length; i++) {
       chartBody+="<thead>\n";
       if (currDirection=="horizontal") {
           chartBody+="<tr>\n<th rowspan='" + (thisChart.fields.length+1) + "'class='horiz'>";
           chartBody += thisChart.years[i] + "\n";
           chartBody += "</th>\n";
           chartBody += "<td colspan='2'></td></tr>";
           for (let j = 0; j < thisChart.fieldnames.length; j++) {
               chartBody += "<tr>\n<td class='horiz'>";
               chartBody += thisChart.fieldnames[j] + "\n";
               chartBody += "</td><td>";
               chartBody += "<img src='" + imgSrc + "' height='15' ";
               chartBody += "width='" + thisChart.fields[j][i]*6 + "' ";
               chartBody += "alt='Barras horizontales' />";
               chartBody += "&nbsp;&nbsp;" + thisChart.fields[j][i] + "</td>\n</tr>\n";
           }
       }
       else{
           chartBody += "<tr>\n<th rowspan='2' class='vert'>";
           chartBody += thisChart.years[i];
           chartBody += "</th>";
           for (let j = 0; j < thisChart.fieldnames.length; j++) {
               chartBody += "<td class='vert'>\n";
               chartBody += "<img src='" + imgSrc + "' alt='Barras verticales' ";
               chartBody += "hspace='10' width='15' ";
               chartBody += "height='" + thisChart.fields[j][i]*3 + "' />\n</td>\n";     
           }
           chartBody+= "</tr>\n<tr>\n";
           for (let j = 0; j < thisChart.fieldnames.length; j++) {
               chartBody += "<td class='vert'>\n";
               chartBody += thisChart.fields[j][i] + "<br />\n";
               chartBody += thisChart.fieldnames[j] + "<br /><br /></td>\n";
           }
           chartBody+="</tr>\n";
       }
       chartBody+= "</thead>\n";
   }
   chartBody+="</table>";
   document.getElementById("chartArea").innerHTML=chartBody;

   function getButton(buttonset){
       for (let i = 0; i < radioButtons.length; i++) {
           if (radioButtons[i].name==buttonset && radioButtons[i].checked) {
               return radioButtons[i].value;
           }
       }
       return -1;
   }
}

if (window.addEventListener) {
    window.addEventListener("load",initAll,false);
} else if(window.attachEvent){
    window.attachEvent("onload",initAll);
}
