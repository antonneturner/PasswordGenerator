// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  // prompt user for password length between 8 and 128
  //  ask  for confirm lowercase or uppercase and special character
  //pw is generated that matches criteria
  var lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "Z",
  ];
  var UpperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var passwordArray = prompt("what would you like your password length to be?");
  passwordSize = parseInt(passwordSize);

  var lowerCaseType = false;
  var UpperCaseType = false;
  var specialCaseType = false;
  var numberType = false;

  if (passwordSize >= 8 && passwordSize <= 128) {
    lowerCaseType = confirm("is this password lowercase ?");
    console.log("lowercase", lowerCaseType);
    UpperCaseType = confirm(" is this password Uppercase ?");
    console.log("uppercase", UpperCaseType);
    specialCaseType = confirm(" does this password have special characters ?");
    console.log("specialcase", specialCaseType);
    numberType = confirm("does this password have numbers ?");
    console.log("number", numberType);
  } else {
    alert("password must be between 8 and 128");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
