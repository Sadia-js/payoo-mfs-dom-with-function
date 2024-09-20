// for log out
document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href = "/index.html";
})

// add money in account
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    const amountDeposit = getInputFieldValueById('amount-deposit');
    if(isNaN(amountDeposit)){
        alert('Please Enter Digits over Add Amount!');
        return;
    }
    const amountPin = getInputFieldValueById('amount-pin');
    if(amountPin === '1234'){
        const currentAmount = getInsideTextById('total-money');
        const totalBalance = setValueIntoNumber(currentAmount);
        const depositBalance =  setValueIntoNumber(amountDeposit);
    
        const newAmount = totalBalance + depositBalance;
        document.getElementById('total-money').innerHTML = newAmount;
           // add transactions history
           const div = document.createElement('div');
           div.innerHTML = 
           `
            <h3 id="Total Balance" class="text-2xl font-bold">Total Amount : ${newAmount}</h3>
            <p id="deposit" class="text-xl py-4 font-semibold">Cash Out Money : ${amountDeposit}</p>
           `
           document.querySelector('#transaction-container').prepend(div);
    }
    else{
        alert('Failed to add money.Please Try again!')
    }
})

