// Assignment code here

function generatePassword() {
  alert("Let's get started! Please select your password criterias when prompted");

  var option1 = confirm("Would you like your password to be between 8 to 128 characters?");
  var option2 = confirm("Would you like to include uppercase characters?");
  var option3 = confirm("Would you like to include lowercase characters?");
  var option4 = confirm("Would you like to include numeric characters?");
  var option5 = confirm("Would you like to include special characters?");

  var length = "\n a length of 8 to 128 characters";
  var uppercase = "\n uppercase characters";
  var lowercase = "\n lowercase characters";
  var numeric = "\n numeric characters";
  var special = "\n special characters";

  var criterias = [option1, option2, option3, option4, option5];

  var output = [];

  for (var option = 0; option < criterias.length; option++) {

    if (option === 0) {
      if (criterias[option]) {
        output.push(length);
      }
    }
    
    else if (option === 1) {
      if (criterias[option]) {
        output.push(uppercase);
      }
    }

    else if (option === 2) {
      if (criterias[option]) {
        output.push(lowercase);
      }
    }

    else if (option === 3) {
      if (criterias[option]) {
        output.push(numeric);
      }
    }

    else if (option === 4) {
      if (criterias[option]) {
        output.push(special);
      }
    }
  }  

  var confirmCriteria = confirm("Your password will include: " + output.toString());

  if (confirmCriteria) {
    var min = 8;
    var max = 128; 

    min = Math.ceil(min);                                                   //See README - Generates a random number for password length
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  else {
    generatePassword();
  }


}

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