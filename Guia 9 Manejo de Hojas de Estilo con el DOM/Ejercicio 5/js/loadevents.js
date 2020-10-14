function init(){
    console.log("En clase Carga");
    var divw1=document.getElementById("titlewl");
    var divw2=document.getElementById("titlew2");
    if (divw1.addEventListener) {
        divw1.addEventListener("mousedown",function(event){
            console.log(this.parentNode);
            console.log(event);
            drag(this.parentNode,event);
        },false);
    }
    if (divw2.addEventListener) {
        divw2.addEventListener("mousedown",function(event){
            console.log(this.parentNode);
            console.log(event);
            drag(this.parentNode,event);
        },false);
    }
}

if (window.addEventListener) {
    window.addEventListener("load",init,false);
} else if(window.attachEvent){
    window.attachEvent("onload",init);
}
