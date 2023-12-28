let button = document.getElementById("incr-click");
let num = document.getElementById("number");
let count = 0

function increment () {
    count++;
    num.innerHTML = count;

}

button.addEventListener("click", increment);