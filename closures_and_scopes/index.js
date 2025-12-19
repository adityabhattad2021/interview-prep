function foo() {
    console.log("This foo function was called");
}

var bar = function(){
    console.log("The bar function was called");
}


foo();
bar();


// Js does not have block scope it has function scope (only applicable to `var`)
var name = "Aditya";

if(100 === 100){
    var team = "Wealth";
}

(function (){
    var team = "Comsumer Payments";
})()


console.log(name);
console.log(team);
