var salario, preciocasa, prima, cuotamensual;
 var annios;
 var h1, totalh1;
 salario = parseFloat(prompt('Ingrese su salario mensual',''));
 annios = 12*15; //numero de años a pagar por la casa
 preciocasa = parseFloat(prompt('Ingrese el precio de la casa', ''));
 if(salario <= 400){
 if(preciocasa > 8000){
 alert('Lo siento el valor de la casa es muy alto para su sueldo');
 }
 else{
 prima = (preciocasa*0.1);
 cuotamensual = (preciocasa-prima)/annios;
 document.write("<h1 class='moneyOff'>La prima que usted debe pagar por la casa es = $ " + Math.round(prima * Math.pow(10,2)) / Math.pow(10,2) + "</h1><hr>");
 document.write("<h1 class='moneyOff'>La cuota mensual a pagar durante 30 años es de = $ " + Math.round(cuotamensual * Math.pow(10,2)) / Math.pow(10,2) + "</h1><hr>");
 }
 }
 else{
 prima = (preciocasa*0.2);
 cuotamensual = (preciocasa-prima)/annios;
 document.write("<h1 class='moneyOff'>La prima que usted debe pagar por la casa es = $ " + Math.round(prima * Math.pow(10,2)) / Math.pow(10,2) + "</h1><hr>");
 document.write("<h1 class='moneyOff'>La cuota mensual a pagar durante 15 años es de = $ " + Math.round(cuotamensual * Math.pow(10,2)) / Math.pow(10,2) + "</h1><hr>");
 }
 //Buscar todos los elemento h1 dentro del documento
 h1 = document.getElementsByTagName('h1');
 //Obtener el total de los elementos h1 encontrados
 totalh1 = h1.length;
 //Crear un ciclo o lazo para asignar el manejador
 //de eventos onmouseover y onmouseout
 for(var i=0; i<totalh1; i++){
 h1[i].onmouseover = function(){
 this.className = 'moneyOn';
 }
 h1[i].onmouseout = function(){
 this.className = 'moneyOff';
 }
 }
