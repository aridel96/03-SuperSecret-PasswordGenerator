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
  var characters = [];

  for (var option = 0; option < criterias.length; option++) {

    if (option === 0) {
      if (criterias[option]) {
        output.push(length);

        var min = 8;
        var max = 128; 
      }
    }
    
    else if (option === 1) {
      if (criterias[option]) {
        output.push(uppercase);

        var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

        for (letter = 0; letter < uppercaseLetters.length; letter++) {
          characters.push(uppercaseLetters[letter]);
        }
      }
    }

    else if (option === 2) {
      if (criterias[option]) {
        output.push(lowercase);

        var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

        for (letter = 0; letter < lowercaseLetters.length; letter++) {
          characters.push(lowercaseLetters[letter]);
        }
      }
    }

    else if (option === 3) {
      if (criterias[option]) {
        output.push(numeric);

        var integers = [0,1,2,3,4,5,6,7,8,9];

        for (num = 0; num < integers.length; num++) {
          characters.push(integers[num]);
        }
      }
    }

    else if (option === 4) {
      if (criterias[option]) {
        output.push(special);

        var specialChar = ["!","@","#","$","%","^","&","*","(",")","~","?","<",">","`",",",".","/","|",":",";",'"',"'","{","}","[","]", "-","_","+","="];

        for (char = 0; char < specialChar.length; char++) {
          characters.push(specialChar[char]);
        }
      }
    }
  }  

  var confirmCriteria = confirm("Your password will include: " + output.toString());

  var result = " "; 

  if (confirmCriteria) {
    min = Math.ceil(min);                                                   //See README - Generates a random number for password length
    max = Math.floor(max);

    var passwordLength = Math.floor(Math.random() * (max - min + 1) + min)

    for (let i = 0; i < passwordLength; i++ ) {
      var randomNum = Math.floor(Math.random() * characters.length)            //See README - Generates a random number to use as index 
      result = result + characters[randomNum]
    }

    return result;
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

  // var passwordText = document.querySelector("#password");

  // passwordText.value = JSON.stringify(password);

  alert(JSON.stringify(password));
  // The acceptance criteria states: WHEN the password is generated. THEN the password is either displayed in an ALERT or written to the page

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 