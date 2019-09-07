// add()
// adds two numbers
function add(a, b){
    return a+b;
}

// subtract()
// subtracts two numbers
function subtract(a, b){
    return a-b;
}

// multiply()
// multiplies two numbers
function multiply(a, b){
    return a*b;
}

// divide()
// divides a by b
function divide(a, b){
    return a/b;
}

// operate()
// input: operator, number, number
// calls the appropriate function on the numbers
function operate(operator, a, b){
    if(operator == "+"){
        return add(a, b);
    } else if(operator == "-"){
        return subtract(a, b);
    } else if(operator == "*"){
        return multiply(a, b);
    } else if(operator == "/"){
        return divide(a, b);
    } else {
        return ("Sorry, I can't understand.");
    }
}

// display()
// populate the display when the number buttons are clicked
function display(){

}