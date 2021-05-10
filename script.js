// Assignment code here

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(!password) {
    return
  }
  passwordText.value = password;

}
// create new fucntion 
function generatePassword() {
  var passwordLength = window.prompt ("How many charracters would you like for your password? Please choose between 8 to 128");
  
  // variable to confirm length of the password
  var confirmLength = parseInt (passwordLength);
  console.log(confirmLength);

  if (passwordLength <8 || passwordLength >128 || isNaN(passwordLength)) {
    var userA= window.alert("User Error, Invalid Choice. PLease Try Again");
    return;
  } 

  // different variables that will help generate the password
  var validInput = [];
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz" .split ("");
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split ("");
  var numberCharacters = "0123456789" .split ("");
  var specialCharacters = "!”#$%^&*()_+-,./:;'<>?@[]\`{}~" .split ("");   

  // variable for lowercase
  var lowerCaseConfirm = window.confirm("Would you like to include Lower Case in your password?");
  if(lowerCaseConfirm === true) {
    for(i=0; i<lowerCaseCharacters.length; i++) {
      validInput.push(lowerCaseCharacters[i]);
      console.log(lowerCaseCharacters[i]);
    }
  }

  // variable for uppercase
  var upperCaseConfirm = window.confirm("Would you like to include Upper Case in your password? ");
  if(upperCaseConfirm === true) {
    for(i=0; i<upperCaseCharacters.length; i++) {
      validInput.push(upperCaseCharacters[i]);
      console.log(upperCaseCharacters[i]);
    }
  }

  // variable for number
  var numberCaseConfirm = window.confirm("woudl you like to include Numbers in your password?");
  if(numberCaseConfirm === true) {
    for(i=0; i<numberCharacters.length; i++) {
      validInput.push(numberCharacters[i]);
      console.log(numberCharacters[i]);
    }
  }

  // variable for special charracters 
  var specialCharactersConfirm = window.confirm("Would you like to include Special Characters in your password?");
  if(specialCharactersConfirm === true) {
    for(i=0; i<specialCharacters.length; i++) {
      validInput.push(specialCharacters[i]);
      console.log(specialCharacters[i]);
    }
  }

  // added a else statement, if user does not select any variable mentioned above, user gets an underfined error
  
  
  else if(lowerCaseConfirm == false && upperCaseConfirm == false && numberCaseConfirm == false && specialCharactersConfirm == false) {
    var invalidChoice = window.alert("Please choose atleast one Character Field!");
    return;
  } 
  

  // this variable generates password
  var passwordGenerated = "";
  for(i=0; i<confirmLength; i++) {
    validInput[Math.floor(Math.random()*validInput.length)];
    passwordGenerated += validInput[Math.floor(Math.random()*validInput.length)];
  }
  return passwordGenerated;
  console.log(passwordGenerated);
}

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
