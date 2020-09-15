var num,resultado;
function init(){
    console.log('Hola Mundo');
    Abs();
    Round();
    Ceil();
    Floor();
    Exp();
    Log();
    Random();
}

function Abs(){
    var form=document.getElementById('formAbs');
    var formview=document.getElementById('viewAbs');
    form.onsubmit=function(){
        if (!isNaN(document.frmAbs.txt_Abs.value)) {
            num=parseFloat(document.frmAbs.txt_Abs.value);
            console.log(num);
            resultado=Math.abs(num);
            var html="<p>El valor aplicando Math.abs() es: "+resultado+" </p>";
            formview.innerHTML=html;
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function Round(){
    var form=document.getElementById('formRound');
    var formview=document.getElementById('viewRound');
    form.onsubmit=function(){
        if (!isNaN(document.frmRound.txt_Round.value)) {
            num=parseFloat(document.frmRound.txt_Round.value);
            console.log(num);
            resultado=Math.round(num);
            var html="<p>El valor aplicando Math.Round() es: "+resultado+" </p>";
            formview.innerHTML=html;
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function Ceil(){
    var form=document.getElementById('formCeil');
    var formview=document.getElementById('viewCeil');
    form.onsubmit=function(){
        if (!isNaN(document.frmCeil.txt_Ceil.value)) {
            num=parseFloat(document.frmCeil.txt_Ceil.value);
            console.log(num);
            resultado=Math.ceil(num);
            var html="<p>El valor aplicando Math.Ceil() es: "+resultado+" </p>";
            formview.innerHTML=html;
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function Floor(){
    var form=document.getElementById('formFloor');
    var formview=document.getElementById('viewFloor');
    form.onsubmit=function(){
        if (!isNaN(document.frmFloor.txt_Floor.value)) {
            num=parseFloat(document.frmFloor.txt_Floor.value);
            console.log(num);
            resultado=Math.floor(num);
            var html="<p>El valor aplicando Math.Floor() es: "+resultado+" </p>";
            formview.innerHTML=html;
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function Exp(){
    var form=document.getElementById('formExp');
    var formview=document.getElementById('viewExp');
    form.onsubmit=function(){
        if (!isNaN(document.frmExp.txt_Exp.value)) {
            num=parseFloat(document.frmExp.txt_Exp.value);
            console.log(num);
            resultado=Math.exp(num);
            var html="<p>El valor aplicando Math.Exp() es: "+resultado+" </p>";
            formview.innerHTML=html;
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function Log(){
    var form=document.getElementById('formLog');
    var formview=document.getElementById('viewLog');
    form.onsubmit=function(){
        if (!isNaN(document.frmLog.txt_Log.value)) {
            num=parseFloat(document.frmLog.txt_Log.value);
            console.log(num);
            resultado=Math.log(num);
            var html="<p>El valor aplicando Math.Log() es: "+resultado+" </p>";
            formview.innerHTML=html;
        } else {
            alert("Inserte valores que correspondan a los espacios");
        }
    }
}

function Random(){
    var form=document.getElementById('formRandom');
    var formview=document.getElementById('viewRandom');
    form.onsubmit=function(){
        resultado=(Math.random() * 100);
        var html="<p>El valor aplicando Math.Random() entre 0 y 100 es: "+resultado+" </p>";
        formview.innerHTML=html;
    }
}

window.onload=init;