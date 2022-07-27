
let a = prompt("Please enter first number","");
let b = prompt("Please enter second number","");

var c =parseInt(a) + parseInt(b);

console.log("The sum of "+ a + " and "+b+" is equal to "+ c);

// kms to miles

function convert(){
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;

    document.getElementById('res').innerText = `${miles} miles`;
}

// celsius to farenheit

function convert(){
    var celsius = document.getElementById('data').value;
    // const factor = 1.8 ;
    var  farenheit = (celsius * 1.8) +32 ;

    document.getElementById('res').innerText = `${farenheit} farenheit`;
}
