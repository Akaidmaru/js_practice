/*
Data types on JavaScript
*/
// String
var name = "Carlos";
console.log(name);

name

name = 10.5;

console.log(name)

console.log(typeof name)

// integer

var number = 1000;
console.log(number)

// object

var object = {
    name: 'Juan',
    last_name: 'Perez',
    phone: '55443322',
};

console.log(typeof object);

// boolean

var flag = true;
console.log(typeof flag);


// function

function my_function() {
    
}

console.log(typeof my_function);

// symbol
var symbol = Symbol("my symbol");

console.log(symbol)

// class

class Person{
    constructor(name, last_name){
        this.name - name;
        this.last_name = last_name;
    }
}

console.log(typeof Person);

// undefined

var x;
console.log(x);