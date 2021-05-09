// Assignment code here

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = window.prompt ("How many charracters would you like for your password? Please choose between 8 to 128");
  
  var confirmLength = parseInt (passwordLength);
  console.log(confirmLength);

  if (passwordLength <8 || passwordLength >128 || isNaN(passwordLength)) {
    var userA= window.alert("User Error, Invalid Choice. PLease Try Again");
    return;
  } 

  var validInput = [];
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz" .split ("");
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split ("");
  var numberCharacters = "0123456789" .split ("");
  var specialCharacters = "!”#$%^&*()_+-,./:;'<>?@[]\`{}~" .split ("");   


  var lowerCaseConfirm = window.confirm("Would you like to include Lower Case in your password?");
  if(lowerCaseConfirm === true) {
    for(i=0; i<lowerCaseCharacters.length; i++) {
      validInput.push(lowerCaseCharacters[i]);
    }
  }
  var upperCaseConfirm = window.confirm("Would you like to include Upper Case in your password? ");
  if(upperCaseConfirm === true) {
    for(i=0; i<upperCaseCharacters.length; i++) {
      validInput.push(upperCaseCharacters[i]);
    }
  }
  var numberCaseConfirm = window.confirm("woudl you like to include Numbers in your password?");
  if(numberCaseConfirm === true) {
    for(i=0; i<numberCharacters.length; i++) {
      validInput.push(numberCharacters[i]);
    }
  }
  var specialCharactersConfirm = window.confirm("Would you like to include Special Vharacters in your password?");
  if(specialCharactersConfirm === true) {
    for(i=0; i<specialCharacters.length; i++) {
      validInput.push(specialCharacters[i]);
    }
  }

  var pG = "";
  for(i=0; i<confirmLength; i++) {
    validInput[Math.floor(Math.random()*validInput.length)];
    pG += validInput[Math.floor(Math.random()*validInput.length)];
  }
  return pG;
  console.log(pG);
}

  



// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
