function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnArrow = document.getElementById("btn");
    var winkelw = document.getElementById("winkelw");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnArrow.innerHTML = "&#8675";
        moreText.style.display = "none";
        winkelw.style.display = "inline-block";
    } else {
        dots.style.display = "none";
        btnArrow.innerHTML = "&#8673";
        moreText.style.display = "inline";
        winkelw.style.display = "none";
    }
}