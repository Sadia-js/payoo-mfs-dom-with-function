// get input value of inputFields
function getInputFieldValueById(id){ 
    const inputText = document.getElementById(id).value;
    return inputText;
}

// convert string into number
function setValueIntoNumber(value){
    const number = Number(value);
    return number;
}


//get value of elements 
function getInsideTextById(id){
    const getText = document.getElementById(id).innerText;
    return getText;
}

