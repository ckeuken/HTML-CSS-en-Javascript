const items = document.querySelectorAll(".content");

items.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.transition = "opacity 0.5s";
        item.style.opacity = "1";
        item.style.backgroundColor = "hsl(34, 78%, 90%)";
        item.style.width = "100%";
    });

    item.addEventListener("mouseout", function() {
        item.style.opacity = "0";
    });
})



