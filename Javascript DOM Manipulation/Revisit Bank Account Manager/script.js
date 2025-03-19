let dailyWithdrawalLimit = 500;
let dailyWithdrawnAmount = 0;
let transactions = [];

document.getElementById('deposit').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('amount').value);
    var balanceElement = document.getElementById('balance');
    var feedbackElement = document.getElementById('feedback');
    var balance = parseFloat(balanceElement.innerText);

    if (isNaN(amount) || amount <= 0) {
        feedbackElement.innerText = 'Please enter a valid amount to deposit.';
        feedbackElement.style.color = 'red';
    } else {
        balance += amount;
        balanceElement.innerText = balance.toFixed(2);
        feedbackElement.innerText = `Successfully deposited ${amount.toFixed(2)}.`;
        feedbackElement.style.color = 'green';
        transactions.push({ type: 'Deposit', amount: amount.toFixed(2) });
        updateTransactionHistory();
    }
});

document.getElementById('withdraw').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('amount').value);
    var balanceElement = document.getElementById('balance');
    var feedbackElement = document.getElementById('feedback');
    var balance = parseFloat(balanceElement.innerText);

    if (isNaN(amount) || amount <= 0) {
        feedbackElement.innerText = 'Please enter a valid amount to withdraw.';
        feedbackElement.style.color = 'red';
    } else if (amount > balance) {
        feedbackElement.innerText = 'Insufficient balance.';
        feedbackElement.style.color = 'red';
    } else if (dailyWithdrawnAmount + amount > dailyWithdrawalLimit) {
        feedbackElement.innerText = 'Daily withdrawal limit reached!';
        feedbackElement.style.color = 'red';
    } else {
        balance -= amount;
        dailyWithdrawnAmount += amount;
        balanceElement.innerText = balance.toFixed(2);
        feedbackElement.innerText = `Successfully withdrew ${amount.toFixed(2)}.`;
        feedbackElement.style.color = 'green';
        transactions.push({ type: 'Withdraw', amount: amount.toFixed(2) });
        updateTransactionHistory();
    }
});

function updateTransactionHistory() {
    var transactionHistoryElement = document.getElementById('transaction-history');
    transactionHistoryElement.innerHTML = '';
    transactions.forEach(transaction => {
        var transactionElement = document.createElement('li');
        transactionElement.innerText = `${transaction.type}: $${transaction.amount}`;
        transactionHistoryElement.appendChild(transactionElement);
    });
}