/*!
 * Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const btn = document.getElementsByClassName("mt-auto");
// console.log(btn);
// console.log(btn.length);

for (let i = 0; i < btn.length; i++) {
    var button = btn[i];
    button.addEventListener("click", function () {
        console.log(button);
        update();
    });
}

function update() {
    var total = 0;
    var cart = document.getElementsByClassName("cartadd")[0];
    var add = parseInt(cart.innerText) + parseInt(1);
    total = total + add;
    console.log(total);
    document.getElementsByClassName("cartadd")[0].innerText = total;
}
