// cash-out from account
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputFieldValueById('cash-out-money');
    if(isNaN(amount)){
        alert('Please Enter Digits over Cash Out Field!');
        return;
    }
    const pinNumber = getInputFieldValueById('cash-out-pin');
    if(pinNumber === '1234'){
        const currentAmount = getInsideTextById('total-money');
        const totalAmount = setValueIntoNumber(currentAmount);
        const cashOutMoney = setValueIntoNumber(amount);
        if(currentAmount < cashOutMoney){
            alert('Failed to Cash Out!');
            return;
        }
        const newAmount = totalAmount - cashOutMoney;
        document.getElementById('total-money').innerText = newAmount; 
         // add transactions history
        const div = document.createElement('div');
        div.innerHTML = 
        `
         <h3 id="Total Balance" class="text-2xl font-bold">Total Amount : ${newAmount}</h3>
         <p id="deposit" class="text-xl py-4 font-semibold">Cash Out Money : ${amount}</p>
        `
        document.querySelector('#transaction-container').prepend(div);
    }
    else{
        alert('Failed to cash out.Please Try again!');
    }
})