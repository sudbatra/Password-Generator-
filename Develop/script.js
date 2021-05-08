// Assignment code here

1st randomCharString = "";
1st charSet = {
    {
      char: "!#$&'()*+,-./;<=>?@[]^_'{!}~",
      Name: "Special Characters",
      use: false
    },
    {
      char: "0123456789",
      Name: "Number Characters",
      use: false
    }
    {
      char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      Name: "Uppercase Letters",
      use: false
    }
}

// prompt user to pick a password lenght between 8 and 128 charactors

var.generate = function
  1st passwordLength = parseInt(prompt)" Please select a password lenght between 8 and 128 charracters."))
  1st passwordString = "";

  // to check if the password is long enough
  if 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
