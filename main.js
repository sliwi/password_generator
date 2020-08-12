const password_length =  document.querySelector('#password_length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const symbols = document.querySelector('#symbols')
const numbers = document.querySelector('#numbers');
const generate_password = document.querySelector('#generate_password');
const password = document.querySelector('#password');
const copy = document.querySelector('#copy');
const message = document.querySelector('#message');

generate_password.addEventListener("click",verifyInputs);

function verifyInputs(){
    if(password_length.value==0){
        message.innerHTML = "Password length cannot be zero!";
        message.classList.add("alert");
        setTimeout(removeMessage, 5000);
    }
    else if(uppercase.value==lowercase.value==symbols.value==numbers.value==false){
        message.innerHTML = "At least one checkbox must be checked!";
        message.classList.add("alert");
        setTimeout(removeMessage, 5000);
    }
    else{
        generatePassword();
    }
}

function removeMessage(){
    message.removeChild(message.firstChild);
    message.classList.remove("alert");
}

function generatePassword(){
    const length = password_length.value;
    const upper = uppercase.value;
    const lower = lowercase.value;
    const symb = symbols.value;
    const num = numbers.value;
}