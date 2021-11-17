// Assignment code here
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var symbols = ["!","@","#","$","%","&","?"];
  var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


var generateBtn = document.querySelector(".btn");

 generateBtn.addEventListener('click', function() {
 
  var password = criteriaSelection();
  document.querySelector("#password").innerHTML = password;

 })

function criteriaSelection() {
  const promptInput = window.prompt("How many characters would you like your password to be?");
  console.log(promptInput);

  var arr = []

  if (promptInput <= 7 || promptInput >= 129 ) {
    return "Invalid response";
  } 


 let lowerCase = confirm("Would you like lower case characters?");
    if (lowerCase) {
      arr = arr.concat(lowerLetters);
      console.log(arr);
    
    }
 var upperCase = confirm("Would you like upper case letters?");
 if (upperCase) {
  arr = arr.concat(upperLetters);
  console.log(arr);

}
var sym = confirm("Would you like symbols letters?");
 if (sym) {
  arr = arr.concat(symbols);
  console.log(arr);

}
var num = confirm("Would you like numbers letters?");
if (num) {
 arr = arr.concat(numbers);
 console.log(arr);
}
if (arr.length === 0) {
  return "Please enter a criteria selection";
}
var password = "";
for (i = 0; i < promptInput; i++) {
  var index = Math.floor(Math.random() * arr.length);
  password += arr[index];
}

console.log(password);
return password


}