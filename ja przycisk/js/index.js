"use strict";


function ustawTlo(){
    var allParagraphs = document.getElementsByTagName("p");
    allParagraphs[0].style.backgroundColor="yellow";
    allParagraphs[1].style.backgroundColor="red";
}


function pobierzImie(event) {
    event.preventDefault();
    var form = document.getElementById("formularz");
    console.log(form);
    
}