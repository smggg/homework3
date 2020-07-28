// Assign values 
var generateBtn = document.querySelector("#generate");
var myLowercase = 'abcdefghijklmnopqrstuvwxyz';
var myUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var myNumber = '1234567890';
var mySpecial = '!@#$%^&*()_+=-~'

// Write password to the #password input
function writePassword() {
  console.log("we are in the function!");
  // Assign the value of passwords (These values are assign when user generate password)
  var myPassword ='';
  var passLength = 0;
  var temppass ='';

  // Define the values of password chracters (ask user to choose types of characters that include)
  var passwordText = document.querySelector("#password");
  
  var askLowercase = confirm('Do you want lowercase characters?');
  if(askLowercase){
    temppass += myLowercase;
  }
  console.log(askLowercase);

  var askUppercase = confirm('Do you want uppercase characters?');
  if(askUppercase){
    temppass += myUppercase;
  }
  console.log(askUppercase);

  var askNumber = confirm('Do you want numbers?');
  if(askNumber){
    temppass += myNumber;
  }
  console.log(askNumber);

  var askSpecial = confirm('Do you want special characters?');
  if(askSpecial){
    temppass += mySpecial;
  }
  console.log(passLength);

   // Set up password Length between 8 to 128
  passLength = prompt('How many charachters do you want? (choose bettween 8 and 128)')
  
  // Assign passLength to Number from String
  passLength = Number(passLength);


  // if condition for chekcing types of characters are included or not
  if(temppass){
    // if condition for password lengths are under condition
    if(passLength >=8 && passLength <=128){
      // for loop for creating random number 
      for(let i=0; i<passLength; i++){
      myPassword += temppass[Math.floor(Math.random(passLength)*temppass.length)];
      }
    }else{// msg for requirement.
      myPassword = "Password length must be between 8 to 128 characters. Try Again!"
    }
  }else{// msg for requirement.
    myPassword = "You need to choose at least one type of charachters for your Password!!"
  }


  passwordText.value = myPassword;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
