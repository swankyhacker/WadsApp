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

    class record {
        constructor(name, amount, counter) {
            this.name = name;
            this.amount = amount;
            this.counter = counter;
        }
    }

    log = [];
    counter = 0;

    budgetBtn.addEventListener("click", () => {
        if (checkInput(budgetValue.value) == false) {
            errBudget.style.display = "inline";
            budgetValue.value = null;
            setTimeout(() => {
                errBudget.style.display = "none";
            }, 3000);
        } else {
            budget = parseInt(budgetValue.value);
            valBudget.innerHTML = budget
            budgetValue.innerHTML = null;
            updateBalance(log);
        }
    })

    expenseBtn.addEventListener("click", () => {
        if (checkInput(expenseValue.value) == false || expenseInfo.value === "") {
            errExpense.style.display = "inline";
            expenseValue.value = null;
            setTimeout(() => {
                errExpense.style.display = "none";
            }, 3000);
        } else {
            recordExpense = new record(expenseInfo.value, expenseValue.value, counter);
            log.push(recordExpense);
            counter++;
            expenseValue.value = null;
            expenseInfo.value = null;
            updateBalance(log);
            updateTable(recordExpense);
        }
    })

    function checkInput(val) {
        if (val == null || val <= 0) {
            return false;
        }
        return true;
    }

    function updateBalance(log) {
        expense = 0;
        for (let i = 0; i < log.length; i++) {
            expense += parseInt(log[i].amount);
        }
        console.log(expense);
        valExpenses.innerHTML = expense;
        balance = budget - expense;
        valBalance.innerHTML = balance;
    }

    function updateTable(record) {
        // create div elements to add to new blue flexbox
        // use dataset attribute to uniquely identify each div
    }

})