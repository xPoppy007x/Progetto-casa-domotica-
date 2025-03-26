"use strict";

function drop_list(x) {
    x.classList.toggle("change");

    let drop = document.getElementById("burger_links");
 
    if(drop.style.display === "block") {
        drop.style.display = "none";
    } else {
        drop.style.display = "block";
    }
}