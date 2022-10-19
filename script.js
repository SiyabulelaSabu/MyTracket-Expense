//KEEP DATA FOR THE 
let DataTable = []

let amount = document.getElementById('amount')
let transaction = document.getElementById('transaction')

//VARABLES
let expense = 0;
let income = 0;
let total = 0;

function isValid (value) {
    if (!value) {
        return false
    }
    return true;
}

//ADD FUNCTION EXPENSE
function addExpense() {

    if  (isValid(amount) && isValid(AddtransactionName)) {
        DataTable.push({
        list: DataTable.length -1,
        transaction: AddtransactionName,
        type: 'Expense',
        amount,    
        });
    }
}

function addIncome() {

    if  (isValid(amount) && isValid(AddtransactionName)) {
        DataTable.push({
        list: DataTable.length -1,
        transaction: AddtransactionName,
        type: 'Income',
        amount,    
        });
    }
}
