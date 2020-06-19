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
    const expenseTable = document.getElementById("expenseTable");

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
            budgetValue.value = null;
            updateBalance();
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
            expenseInfo.value = null;
            expenseValue.value = null;
            updateBalance();
            addTable(recordExpense);
        }
    })

    function checkInput(val) {
        if (val == null || val <= 0) {
            return false;
        }
        return true;
    }

    function updateBalance() {
        expense = log.reduce((total, item) => {
            return total + parseInt(item.amount)
        }, 0)
        valExpenses.innerHTML = expense;
        balance = budget - expense;
        valBalance.innerHTML = balance;
        updateGraphics();
    }

    function addTable(record) {
        const postRecord = document.createElement("div");
        const editButton = document.createElement("a");
        const deleteButton = document.createElement("a");
        expenseTable.append(postRecord);
        postRecord.innerHTML = `<div class = "title"> ${record.name} </div>
                                 <div class = "value"> $${record.amount} </div>`; //Try using div instead of span for positioning
        postRecord.className = "flex2-inner-item";
        postRecord.append(editButton);
        postRecord.append(deleteButton);
        postRecord.dataset.index = record.counter;
        editButton.href = "#";
        deleteButton.href = "#";
        // editButton.innerHTML = `<img src = "./images/edit.png">`;
        // deleteButton.innerHTML = `<img src = "./images/delete.png">`;
        editButton.className = "editBtn";
        deleteButton.className = "deleteBtn";
        counter++;
        editButton.onclick = () => {
            editRecord();
        };
        deleteButton.onclick = () => {
            deleteRecord();
        };
    }

    function editRecord() {
        const element = event.target;
        recordIndex = element.parentElement.dataset.index;
        const logRecord = log.find((item) => {
            return item.counter == recordIndex;
        })
        expenseInfo.value = logRecord.name;
        expenseValue.value = logRecord.amount;
        log.splice(log.indexOf(logRecord), 1);
        element.parentElement.remove();
        updateBalance();
    }

    function deleteRecord() {
        const element = event.target;
        recordIndex = element.parentElement.dataset.index;
        const logRecord = log.find((item) => {
            return item.counter == recordIndex;
        })
        log.splice(log.indexOf(logRecord), 1);
        element.parentElement.remove();
        updateBalance();
    }

    function updateGraphics() {
        balanceHeader = document.querySelector("#balanceHeader");
        mainIcon = document.querySelector("#mainIcon");
        if (balance < 1) {
            balanceHeader.style.color = "red";
            mainIcon.src = `./images/broke.jpg`
        } else {
            balanceHeader.style.color = "green"
            mainIcon.src = `./images/loaded.jpg`;
        }
    }
})

// correct table CSS