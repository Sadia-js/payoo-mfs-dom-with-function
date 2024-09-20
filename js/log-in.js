document.getElementById('log-in-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = getInputFieldValueById('phone-number'); 
    const entryPinCode = getInputFieldValueById('entry-pin-code');

    if(entryPinCode === '1234' && phoneNumber === '24'){
        window.location.href = "./home.html";
    }
    else{
        alert('Incorrect Access. Try Again!');
    }
})