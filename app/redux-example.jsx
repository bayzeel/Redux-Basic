var redux = require("redux");

console.log("Starting redux example");

function add (a, b) {
    return a + b;
}

var a = 3;
function add2 () {
    return a + b;
}

function changeProp (obj) {
    return {
        ...obj,
        name: "Jen"
    };
}

var startingValue = {
    name: "Vasyl",
    age: 25
};

var res = changeProp(startingValue);

console.log(startingValue);
console.log(res);