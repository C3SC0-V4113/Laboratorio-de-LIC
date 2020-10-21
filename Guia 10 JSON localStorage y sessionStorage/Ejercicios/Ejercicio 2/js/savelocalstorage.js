/*Verificarsi el navegador utilizado posee soporte para usar localStorage
Si no lo es advertir al usuario enviado una advertencia de no compatibilidad */
if (typeof(localStorage)=="undefined") {
    document.getElementById("notCompatibleMsg").style.display="block";
} else {
    document.getElementById("isCompatibleMsg").style.display="block";
}

/*Obtener todos los elementos del documento que se requieren
 utilizando el modelo del DOM Nivel 2 */
var storedTextContainer=document.getElementById("webStorageStoredText");
var storedText=localStorage.getItem("webStorageTestInput")
var inputBox=document.getElementById("webStorageInput");
var saveBtn=document.getElementById("webStorageSaveBtn");
var clearBtn=document.getElementById("clearWebStorage");

//Verificar si el dato almacenado en el objeto localstorage es nulo
if (storedText!=null) {
    storedTextContainer.innerHTML= "<strong>Dato cargado desde almacenamiento local:</strong> " + storedText;
    inputBox.value=storedText;
}

saveBtn.onclick=function(){
    var valueToSave =inputBox.value.replace(/<\/?[^>]+>/gi, '');
    localStorage.setItem('webStorageTestInput',valueToSave);
    storedTextContainer.innerHTML="Se ha almacenado correctamente '" +valueToSave + ".' Actualice la página para que observe que el dato almacenado es mostrado en el campo de formulario.";
}

clearBtn.onclick=function(){
    if (storedText!=null) {
        localStorage.clear();
        inputBox.value="";
        storedTextContainer.innerHTML="Almacenamiento Local Liberado";
    }
}