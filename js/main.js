//-------------------
// Constants & DOM Elements
// -------------------

const PERCENTAGES = {
    stocks: 0.6,
    cash: 0.3,
    spending: 0.1
};

const MIN_INCOME = 0.01
const form = document.getElementById("income-form");
const incomeInput = document.getElementById("income");

const stocksOutput = document.getElementById("stocks-isa");
const cashOutput = document.getElementById("cash-isa");
const spendingOutput = document.getElementById("spending");

const errorMessage = document.getElementById("error-message");

//-------------------
// Functions
// -------------------

function incomeCalculations(income) {
    return {
        stocks: income * PERCENTAGES.stocks,
        cash: income * PERCENTAGES.cash,
        spending: income * PERCENTAGES.spending
    };
}

function updateResults(results) {
    stocksOutput.textContent = `£${results.stocks.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    cashOutput.textContent = `£${results.cash.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    spendingOutput.textContent = `£${results.spending.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

//-------------------
// Event Listeners
// -------------------

incomeInput.addEventListener('input', function(event){
    const incomeValue = parseFloat(incomeInput.value.trim());

    if(isNaN(incomeValue) || incomeValue < MIN_INCOME) {
        errorMessage.textContent = "Please add an income greater than 0";
        return;
    }
    
    errorMessage.textContent = "";

    const results = incomeCalculations(incomeValue);
    updateResults(results);
    
})

