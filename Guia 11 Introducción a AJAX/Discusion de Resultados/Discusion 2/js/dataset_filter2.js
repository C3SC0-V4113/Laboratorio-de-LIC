var g_booklist = new Array();
var g_searchstr = '';
var g_lastcount = 0;
function get_booklist(){
 AJAX.execute('xml/amazon.xml', ajax_response);
}
function getChildrenByTagName(element,name){
 var list = new Array();
 name = name.toUpperCase();
 for(var i=0; i<element.childNodes.length; i++)
 if (element.childNodes[i].nodeName.toUpperCase()==name)
 list.push( element.childNodes[i] );
 return list;
}
function getTextByName(element, name){
 name = name.toUpperCase();
 for(var i=0; i<element.childNodes.length; i++)
 if (element.childNodes[i].nodeName.toUpperCase()==name)
 return element.childNodes[i].firstChild.nodeValue;
 return '';
}
function ajax_response(ajaxobj){
 var xml = ajaxobj.responseXML;
var doc = (xml.firstChild.nextSibling)? xml.firstChild.nextSibling :
xml.firstChild;
 var booksxml = getChildrenByTagName(doc, 'book');
 if (booksxml!= null && booksxml.length>0)
 {
 g_booklist=new Array();
 for(var i=0; i<booksxml.length; i++)
 {
 t = getTextByName(booksxml[i],'title');
 a = getTextByName(booksxml[i],'author');
 u = getTextByName(booksxml[i],'url');
 g_booklist.push( createBook(a,t,u) );
 }
 g_booklist.sort(sortByTitle);
 g_searchstr='';
 for (var i=0; i<g_booklist.length; i++)
g_searchstr+= ' '+g_booklist[i].author+'|'+g_booklist[i].title+'[|['+i+']|]';
 g_searchstr = g_searchstr.toLowerCase();
 showlist(g_booklist);
 }
}
function showlist(booklist){
 var dom_tracklist = document.getElementById('id_booklist');
 removeChildren( dom_tracklist );
 var count = (booklist.length > 15) ? 15 : booklist.length;
 for(var i=0; i<count; i++)
 {
 dom_tracklist.appendChild( createBookElement(booklist[i]) );
 }
 g_lastcount=count;
 var dom_tracklist = document.getElementById('id_title');
 removeChildren( dom_tracklist );
dom_tracklist.appendChild( document.createTextNode("showing " + count + " of "
+ booklist.length));
}
function createBookElement(bookobj){
 var tagText = bookobj.title + ' - ' + bookobj.author;
 var element;
 try {
 element = document.createElement("<li>");//IE
 } catch (e) {
 element = document.createElement( "li" );
 }
 element.appendChild(createLinkElement(bookobj.url, tagText));
 return element;
}
function createLinkElement(url,text){
 var element;
 try {
 element = document.createElement("<a href='" + url + "'>");//IE
 } catch (e) {
 element = document.createElement( "a" );
 element.setAttribute('href',url);
 }
 element.appendChild( document.createTextNode( text ) );
 return element;
}
function searchkeyup(e){
 e = fixevent(e);
 targ=findtarget(e);
 var searchtext = ' '+targ.value.toLowerCase();
 if (searchtext.length<=2){
 if (g_lastcount!= g_booklist.length){
 showlist(g_booklist);
 }
 return;
 }
 var booklist=new Array();
 console.log(g_searchstr);
 var results =g_searchstr.split(searchtext);
 console.log(results);
 for(var i=1; i<results.length; i++){
 var idx1 = results[i].indexOf('[|[');
 var idx2 = results[i].indexOf(']|]');
 if (idx1!=-1 && idx2!=-1 ){
 var idx = results[i].substring(idx1+3, idx2);
 console.log(idx);
 if (isInt(idx)){
 booklist.push( g_booklist[idx] );
 }
 }
 }
 showlist(booklist);
}
function isInt (str){
 var i = parseInt (str);
 if (isNaN (i))
 return false;
 if (i.toString() != str)
 return false;
 return true;
}
function fixevent(e) {
 return (!e) ? window.event : e;
}
function findtarget(e) {
 if (e.target) targ = e.target;
 else if (e.srcElement) targ = e.srcElement;
 // defeat Safari bug
 if(targ.nodeType == 3)
 targ = targ.parentNode;
 return targ;
}
function removeChildren(list){
 if (list==null) return;
 var child = list.firstChild;
 while(child!=null){
 list.removeChild(child);
 child = list.firstChild;
 }
}
function sortByTitle(a,b){
 if(a.title > b.title) return 1;
 if(a.title < b.title) return -1;
 return 0;
}
function sortByAuthor(a,b){
 if(a.author > b.author) return 1;
 if(a.author < b.author) return -1;
 return 0;
}
function createBook(author,title,url){
 var a = new Object();
 a.author = author;
 a.title = title;
 a.url = url;
 return a;
}
function print_r(obj){
 var str2='';
 for(s in obj){
 str2 += "Array[" + s + "]" + obj[s] + "\n";
 }
 return str2;
}
