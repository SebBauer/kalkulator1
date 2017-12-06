'use sctrict';

var suma = document.getElementById('suma');
suma.onclick = function(e){
    
    e.preventDefault();
    var numOne = parseFloat(document.getElementById('number1').value);
    var numTwo = parseFloat(document.getElementById('number2').value);

    wynik.innerText = numOne + numTwo;
};

var odejmowanie = document.getElementById('odejmowanie');
odejmowanie.onclick = function(e){

    e.preventDefault();
    var numOne = parseFloat(document.getElementById('number1').value);
    var numTwo = parseFloat(document.getElementById('number2').value);

    wynik.innerText = numOne - numTwo;
};

var mnozenie = document.getElementById('mnozenie');
mnozenie.onclick = function(e){

    e.preventDefault();
    var numOne = parseFloat(document.getElementById('number1').value);
    var numTwo = parseFloat(document.getElementById('number2').value);

    wynik.innerText = numOne * numTwo;
};

var dzielenie = document.getElementById('dzielenie');
dzielenie.onclick = function(e){

    e.preventDefault();
    var numOne = parseFloat(document.getElementById('number1').value);
    var numTwo = parseFloat(document.getElementById('number2').value);

    wynik.innerText = numOne / numTwo;
};