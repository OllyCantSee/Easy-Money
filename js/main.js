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
const savingsInput = document.getElementById("savings")

//-------------------
// Functions
// -------------------

function incomeCalculations(income, savingsValue) {
    
    const spendingPercent = calculateSpendingPercent(income, savingsValue);
    const remaining = 1 - spendingPercent;
    const stockVal = remaining * 0.67;
    const cashVal = remaining * 0.33;

    return {
        stocks: income * stockVal,
        cash: income * cashVal,
        spending: income * spendingPercent
    };
}

function calculateSpendingPercent(income, savings) {
    if (savings <= 0) return 0.10;

    const ratio = income / savings;

    if (ratio <= 0.10) return 0.08;
    if (ratio <= 0.20) return 0.012;
    if (ratio <= 0.30) return 0.015;
    if (ratio <= 0.50) return 0.018;

    return 0.20;
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
    const savingsValue = parseFloat(savingsInput.value.trim());

    if(isNaN(incomeValue) || incomeValue < MIN_INCOME) {
        errorMessage.textContent = "Gotta be more than 0!";
        return;
    }

    errorMessage.textContent = "";
    funMessage(incomeValue)

    const results = incomeCalculations(incomeValue, savingsValue);
    updateResults(results);
    
})

