var caret = document.getElementsByClassName("caret");
var i;

var btn = document.getElementById("btn");


for(i = 0; i < caret.length; i++) {
    caret[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

function mySnackbar() {
    var snack = document.getElementById("snackbar");
    snack.className = "show";
    setTimeout(function() {snack.className = snack.className.replace("show", "");}, 5000);    
}




