// HTML ELEMENTS
// Amount text field and input range
const amountInput = document.getElementById('amount-input');
const amountRange = document.getElementById('amount-range');

// Time text field and input range
const timeInput = document.getElementById("time-input");
const timeRange = document.getElementById("time-range");

// Output text field
const calculatorOutput = document.getElementById("calculator-output");

// INITIAL VALUES
//Define const for min and max  range values
const amountMinRange = 10000;
const amountMaxRange = 50000;

const timeMinRange = 12;
const timeMaxRange = 72;

const fee = 0.8;

initializeElementValues();

// Define initial values for HTML elements
function initializeElementValues() {
    amountRange.min = amountMinRange;
    amountRange.max = amountMaxRange;
    amountRange.value = amountMinRange;

    timeRange.min = timeMinRange;
    timeRange.max = timeMaxRange;
    timeRange.value = timeMinRange;

    amountInput.innerHTML = formatNumber(amountRange.value) || amountMinRange;
    timeInput.innerHTML = timeRange.value || timeMinRange;

    updateOutput(amountRange.value, timeRange.value);
}


amountRange.oninput = function() {
    amountInput.innerHTML = formatNumber(this.value);
    updateOutput(amountRange.value, timeRange.value);
}

timeRange.oninput = function() {
    timeInput.innerHTML = this.value;
    updateOutput(amountRange.value, timeRange.value);
}

// Calculate payment
function updateOutput(amount, time) {
    const p = parseInt(amount); 
    const t = parseInt(time) / 2; // Time in months

    const tm = parseFloat(fee / 24); // Monthly fee
    const tmi = parseFloat(tm * 1.16); // Monthly fee + IVA

    let m = (p * (tmi) * (Math.pow(1 + tmi,2 * t)))/(Math.pow(1 + tmi,2 * t) - 1); 
    calculatorOutput.innerHTML =  formatNumber(m.toFixed(2));
}

function formatNumber(number) {
    return "$ " + new Intl.NumberFormat("en-US").format(number);
}