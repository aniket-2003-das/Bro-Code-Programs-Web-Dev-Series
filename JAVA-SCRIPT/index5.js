// const = a variable that can't be changes one assigned a value.

const PI = 3.14159;
let radius;
let circumfrence;

// PI = 657; // not possible.
// radius = window.prompt("enter the radius of the circle");
// radius = Number(radius);
// circumfrence = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumfrence + "cm";
}