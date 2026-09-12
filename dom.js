function toSubscribe() {
    const buttonElement = document.querySelector('.js-button');
    if (buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
        // buttonElement.classList.replace('subscribe-button','is-subscribed')
    } else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
        // buttonElement.classList.replace('is-subscribed','subscribe-button')
    }
}
function calculateWithEnterKey() {
    if (event.key === 'Enter') {
        totalAmount()
    }
}
function totalAmount() {
    let amount = Number(document.querySelector('.js-cost').value);
    if (amount < 0) {
        document.querySelector('.result').classList.add('error-message')
        document.querySelector('.result').innerHTML = 'Error: cost cannot be less than $0';
    } else if (amount === 0 || amount > 40) {
        document.querySelector('.result').classList.remove('error-message')
        document.querySelector('.result').innerHTML = `$${amount}`;
    } else if (0 <= amount <= 40 ) {
        amount = Math.round(amount * 100 + 1000) / 100
        // amount += 10;
        document.querySelector('.result').classList.remove('error-message')
        document.querySelector('.result').innerHTML = `$${amount}`;
    }
}