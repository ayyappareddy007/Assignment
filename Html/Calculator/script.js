let displayCell = document.getElementById('display-cell');
let currentInput = '0';

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    displayCell.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    displayCell.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        displayCell.textContent = currentInput;
    } catch (error) {
        displayCell.textContent = 'Error';
    }
}
