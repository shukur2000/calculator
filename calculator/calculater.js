function add(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('good').innerHTML = `Result:${sum}`;

} 

function subtract(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sum = num1 - num2;
    document.getElementById('good').innerHTML = `Result:${sum}`;

} 

function multiply(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sum = num1 * num2;
    document.getElementById('good').innerHTML = `Result:${sum}`;

} 

function divide(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sum = num1 / num2;
    document.getElementById('good').innerHTML = `Result:${sum}`;

} 