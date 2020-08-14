const password_length =  document.querySelector('#password_length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const symbols = document.querySelector('#symbols')
const numbers = document.querySelector('#numbers');
const generate_password = document.querySelector('#generate_password');
const password_strength = document.querySelector('#password_strength')
const password = document.querySelector('#password_text');
const copy = document.querySelector('#copy');
const message = document.querySelector('#message');
const strengthMessage = document.querySelector('#strength');


generate_password.addEventListener("click",verifyInputs);
copy.addEventListener("click",copyToClipboard);

function verifyInputs(){
    if(password_length.value==0){
        message.innerHTML = "Password length cannot be zero!";
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
  
    const upper = (uppercase.checked===true) ? ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] : null;
    const lower = (lowercase.checked===true) ? ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] : null;
    const nums = (numbers.checked===true) ? ["0","1","2","3","4","5","6","7","8","9"] : null;
    const symb = (symbols.checked===true) ? ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"] : null;
    let combination = [];
    let passwordString = "";

    if(upper!==null){
        console.log('is this working?');
        combination.push(...upper);
    }
    if(lower!==null){
        combination.push(...lower);
    }
    if(nums!==null){
        combination.push(...nums);
    }
    if(symb!==null){
        combination.push(...symb);
    }
    console.log(length);
    for(let i=0; i<length;i++){
        passwordString += combination[Math.floor(Math.random() * (combination.length))];
    }
    password.textContent = passwordString;
    getPasswordStrengh(passwordString);
}

function getPasswordStrengh(passwordStr){
    strengthMessage.removeAttribute("class");
    let score = 0;
    if(password_length.value<8){
        strengthMessage.textContent = "Weak";
        strengthMessage.classList.add("weak");
    }
    else{
        if(password_length.value>8){
            score++;
        }
        if(password_length.value>12){
            score++;
        }
        if(passwordStr.match(/\d+/)){ //matching numbers
            score++;
        }
        if(passwordStr.match(/[^\w\s]/)){ //matching symbols
            score+=2;
        }
        if(passwordStr.match(/[a-z]/)){ //matching lower case letters
            score++;
        }
        if(passwordStr.match(/[A-Z]/)){ //matching upper case letters
            score++;
        }
    
        if(score==7){
            strengthMessage.textContent = "Very Strong";
            strengthMessage.classList.add("very_strong");
            
        }
        else if(score>=5){
            strengthMessage.textContent = "Strong";
            strengthMessage.classList.add("strong");
        }
        else if(score>=3){
            strengthMessage.textContent = "Medium";
            strengthMessage.classList.add("medium");
        }
        else{
            strengthMessage.textContent = "Weak";
            strengthMessage.classList.add("weak");
        }
    }
}

function copyToClipboard(){
  const passwordStr = password.textContent; 
  const el = document.createElement('textarea');
  el.value = passwordStr;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}