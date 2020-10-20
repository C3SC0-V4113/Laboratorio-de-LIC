var CSSClass={};
CSSClass.is=function(e,c) {
    if (typeof e=="string") {
        e=document.getElementById(e);
    }
    var classes=e.className;
    if (!classes) {
        return false;
    }
    if (classes=c) {
        return true;
    }
    return e.className.search("\\b"+c+"\\b")!=-1;
};

CSSClass.add=function(e,c){
    console.log(typeof e!="string");
    console.log(CSSClass.is(e,c));
    if (typeof e=="string") {
        console.log("Si es string");
        e=document.getElementById(e);
    }
    if (CSSClass.is(e,c)) {
        console.log("Estoy dentro");
        return;
    }
    if (e.className) {
        console.log("Estoy dentro x2");
        c=" "+c;
    }
    e.className+=c;
    console.log(e.className);
};

CSSClass.remove=function(e,c){
    if (typeof e=="string") {
        e=document.getElementById(e);
    }
    e.className=e.className.replace(new RegExp("\\b"+c+"\\b\\s*","g"),"");
}