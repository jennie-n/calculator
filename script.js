// operate()
// evaluates the answer
// includes error checking for division by 0 and multiple decimal points
function operate(){
    let entered = document.getElementById("result").value;

    let decimalCount = 0;
    for(let i=0; i<entered.length; i++){ // count # of decimals
        if(entered.charAt(i) == "."){
            decimalCount++;
        }
    }

    let answer = eval(entered);
    answer = round(answer);
    if(answer == "Infinity" || decimalCount > 2){
        document.getElementById("result").value = "Not calculable";
    } else {
        document.getElementById("result").value = answer;
    }
}

// round()
// if applicable (decimal number with more than 5 numbers after the decimal), rounds the answer to the nearest 5 decimal places
function round(notRounded){
    let decimalNumber = 0; // is input a decimal number?
    let i;
    for(i=0; i<notRounded.length; i++){
        if(notRounded.charAt(i) == "."){
            decimalNumber = 1;
            break;
        }
    }
    // break lands here
    if(decimalNumber == 0){ // if not a decimal number, return input
        return notRounded;
    }

    if(notRounded.length - i > 6){ // if input is a decimal number with more than 5 numbers after the decimal
        if(notRounded.charAt(i+5) < 5){ // round down
            return notRounded.substring(0, i+5);
        } else { // round up
            let substitution = Number(notRounded.charAt(i+5)) + 1;
            notRounded.charAt(i+5) = substitution;
            return notRounded.substring(0, i+5);
        }
    } else { // if input has <=5 numbers behind decimal
        return notRounded;
    }
}

// display()
// populate the display when the number buttons are clicked
function display(justEntered){
    document.getElementById("result").value += justEntered;
}

// backspace()
// undoes the last button pressed by the user
function backspace(){
    document.getElementById("result").value = document.getElementById("result").value.substring(0, document.getElementById("result").value.length - 1);
}

// clear()
// clears the display
function clr(){
    document.getElementById("result").value = "";
}