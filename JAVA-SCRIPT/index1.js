// variable = A container that stores a value.
//            Behaves as if it is the value it contains.

// 1. declaration   let x
// 2. assignment x = 100

let x;
x = 100;
// age = 20; not possible
let age1 = 20;

console.log(x);
console.log(age1);
console.log(typeof(age1))
console.log(`Hello World I am ${age1} years old`);


// string, number, boolean, null, undefined, object (arrays are objects)
y = "I am a String";
console.log(y);

let num = 456;
num += 10;    // num = num + 10;
console.log(num);       

let multilineStr = `This is  
a multi line  
string`;
console.log(multilineStr); 

let online = true;
console.log(`bro is online -: ${online}`);

// Displaying some Variables on web page.

let fullName = "Paa Bhai";
let age = 20;
let student = false;

document.getElementById("p1").textContent = `your full name is ${fullName}`
document.getElementById("p2").textContent = age
document.getElementById("p3").textContent = student