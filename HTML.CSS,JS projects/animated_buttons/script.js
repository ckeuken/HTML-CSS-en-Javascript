var cartButtons = document.querySelectorAll(".cart-button");
var added = document.querySelector(".added");

cartButtons.forEach(button => {
    button.addEventListener("click", cartClick);
});

function cartClick() {
    let button = this;
    button.classList.toggle("clicked");
    added.innerHTML = "Added"; 
}

var heartButtons = document.querySelectorAll(".heart-button");
var added_wl = document.querySelector(".added_wl");

heartButtons.forEach(button =>{
    button.addEventListener("click", heartClick);
});

function heartClick() {
    let button = this;
    button.classList.toggle("clicked_button");
    added_wl.innerHTML = "Added";
}
    





