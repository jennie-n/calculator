// operate()
// evaluates the answer
function operate(){
    let entered = document.getElementById("result").value;
    let answer = eval(entered);
    if(answer == "Infinity"){
        document.getElementById("result").value = "Not calculable";
    } else {
        document.getElementById("result").value = answer;
    }
}

// display()
// populate the display when the number buttons are clicked
function display(justEntered){
    document.getElementById("result").value += justEntered;
}

// clear()
// clears the display
function clr(){
    document.getElementById("result").value = "";
}