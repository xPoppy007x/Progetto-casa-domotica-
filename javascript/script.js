"use strict";

function drop_list(x) {
    x.classList.toggle("change");

    let drop = document.getElementsByClassName("nav_link");
 
    if(drop.style.display === "block") {
        drop.style.display = "none";
    } else {
        drop.style.display = "block";
    }
}