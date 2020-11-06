// Generate random password
Function generate(){

// set password length/complexity
let complexity = document.getElementById("slider").value;


// Password values
let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+="';

let password = '';

// create for loop to choose password characters
for(var i= 0; i <=complexity; i++){

    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length-1)));
}

// add password to textbox display area
document.getElementById('display').value = password;
