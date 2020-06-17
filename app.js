document.addEventListener("DOMContentLoaded", () => {
    let budgetValue = document.getElementById("budgetValue");
    const budgetBtn = document.getElementById("budgetBtn");
    let expenseInfo = document.getElementById("expenseInfo");
    let expenseValue = document.getElementById("expenseValue");
    const expenseBtn = document.getElementById("expenseBtn");
    let valBudget = document.getElementById("valBudget");
    let valExpenses = document.getElementById("valExpenses");
    let valBalance = document.getElementById("valBalance");
    const errBudget = document.getElementById("errBudget");
    const errExpense = document.getElementById("errExpense");

    let budget = 0;
    let expense = 0;
    let balance = 0;

    expenseLog = {
        name: "",
        amount: 0
    }

    budgetBtn.addEventListener("click", () => {
        if (checkInput(budgetValue.value) == false) {
            errBudget.style.display = "inline";
            budgetValue.value = null;
            setTimeout(() => {
                errBudget.style.display = "none";
            }, 3000);
        } else {
            budget = budgetValue.value;
            budgetValue.value = null;
            valBudget.innerHTML = budget;
        }
    })

    expenseBtn.addEventListener("click", () => {
        if (checkInput(expenseValue.value) == false) {
            errExpense.style.display = "inline";
            expenseValue.value = null;
            setTimeout(() => {
                errExpense.style.display = "none";
            }, 3000);
        } else {

        }
    })

    function checkInput(val) {
        if (val == null || val <= 0) {
            return false;
        }
        return true;
    }



})