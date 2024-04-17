const display = document.getElementById("display");

// Adds the value of each button press
function appendToDisplay(input) {
    display.value+= input;
}

// Delete a character
function deleteCharacter() {
    display.value = display.value.slice(0,-1)
}

// Clears the display
function clearDisplay() {
    display.value = "";
}

// Calculate the display value
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }

}