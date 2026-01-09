//-------------------
// Constants & DOM Elements
// -------------------

const PERCENTAGES = {stocks: 0.6, cash: 0.3, spending: 0.1};
const MIN_INCOME = 0.01

const incomeInput = document.getElementById("income");
const stocksOutput = document.getElementById("stocks-isa");
const cashOutput = document.getElementById("cash-isa");
const spendingOutput = document.getElementById("spending");
const errorMessage = document.getElementById("error-message");
const funText = document.getElementById("fun-text")

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

function funMessage(incomeValue) {
    if (incomeValue <= 10) {
        funText.textContent = "not really..."
    } else if (incomeValue <= 100) {
        funText.textContent = "yeah not bad..."
    } else if (incomeValue <= 1000) {
        funText.textContent = "yeah its good!"
    } else if (incomeValue <= 2000) {
        funText.textContent = "WOO, yes it was!"
    } else {
        funText.textContent = "GOD YES!"
    }
}

//-------------------
// Event Listeners
// -------------------

incomeInput.addEventListener('input', () => {
    const incomeValue = parseFloat(incomeInput.value.trim());

    if(isNaN(incomeValue) || incomeValue < MIN_INCOME) {
        errorMessage.textContent = "Gotta be more than 0!";
        return;
    }

    errorMessage.textContent = "";
    funMessage(incomeValue)

    const results = incomeCalculations(incomeValue);
    updateResults(results);
    
})

