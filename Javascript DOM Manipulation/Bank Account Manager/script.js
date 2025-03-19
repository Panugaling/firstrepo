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
    } else {
        balance -= amount;
        balanceElement.innerText = balance.toFixed(2);
        feedbackElement.innerText = `Successfully withdrew ${amount.toFixed(2)}.`;
        feedbackElement.style.color = 'green';
    }
});