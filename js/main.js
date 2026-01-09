//-------------------
// Constants & DOM Elements
// -------------------

const PERCENTAGES = {
    stocks: 0.6,
    cash: 0.3,
    spending: 0.1
};

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
    stocksOutput.textContent = `Stocks & Shares ISA: £${results.stocks.toFixed(2)}`;
    cashOutput.textContent = `Cash ISA: £${results.cash.toFixed(2)}`;
    spendingOutput.textContent = `Spending Money: £${results.spending.toFixed(2)}`;
}

//-------------------
// Event Listeners
// -------------------

form.addEventListener('submit', function(event){
    event.preventDefault();
    const incomeValue = parseFloat(incomeInput.value.trim());

    errorMessage.textContent = "";

    if(isNaN(incomeValue) || incomeValue <= 0) {
        errorMessage.textContent = "Please add an income greater than 0";
        return;
    }

    const results = incomeCalculations(incomeValue);
    updateResults(results);
    
})

