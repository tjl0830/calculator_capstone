const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value+= input;
}

function deleteCharacter() {
    display.value = display.value.slice(0,-1)
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }

}