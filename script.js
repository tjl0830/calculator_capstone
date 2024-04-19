const displayInput = document.getElementById("display-input");
const displayOutput = document.getElementById("display-output");

// Adds the value of each button press
function appendToDisplay(input) {
    displayInput.value+= input;
}

// Delete a character
function deleteCharacter() {
    displayInput.value = display.value.slice(0,-1)
}

// Clears the display
function clearDisplay() {
    displayInput.value = "";
    displayOutput.value = "";
}

// Calculate the display value
function calculate() {
    try {
        displayOutput.value = eval(displayInput.value);
    }
    catch {
        displayOutput.value = "Error";
    }

}