// Assignment code here
function arr() {
  numbers = [1,2,3,4,5,6,7,8,9,0];
  symbols = ["!","@","#","$","%","&","?"];
  lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
}
  
// Get references to the #generate element
var generateBtn = document.querySelector(".btn");
let pw = document.querySelector(".card-body");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
 generateBtn.addEventListener('click', (e) => {
  criteriaSelection();

function criteriaSelection() {
  const promptInput = window.prompt("How many characters would you like your password to be?");
  console.log(promptInput);

  if (promptInput <= 7) {
    alert("Password must be at least 8 characters)");
  } else if (promptInput >= 129) {
    alert("Password must be no more than 128 characters");
  } else {
    return promptInput;
  }

 let lowerCase = confirm("Would you like lower case characters?");
    if (confirm === "OK") {
      Math.random(lowerLetters);
      lowerCase = true;
    } else {
      lowerCase = false;
      return lowerCase;
    }
    

 var upperCase = confirm("Would you like upper case letters?");
    if (confirm === "OK") {
      Math.random(upperLetters);
      upperCase = true;
    } else {
     upperCase = false;
     return upperCase;
    }