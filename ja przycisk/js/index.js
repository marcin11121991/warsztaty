"use strict";

//
//function ustawTlo() {
//    var allParagraphs = document.getElementsByTagName("p");
//    allParagraphs[0].style.backgroundColor = "yellow";
//    allParagraphs[1].style.backgroundColor = "red";
//}


function pobierzImie(event) {
  event.preventDefault();
    //   console.log(form);
    var form = document.getElementById("formularz");
    for (var i = 0; i < form.lenght; i++) {
      //  console.log(form.elements[i].value);
        if (form.elements[i].value != 'Submit') {
            console.log(form.elements[i].value);
        }
    }

}
