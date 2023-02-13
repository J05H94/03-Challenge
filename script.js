// Assignment code here
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = uppercase.map(letter => letter.toLowerCase());
const specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const display = document.getElementById('password');
let lowCof = true;
let upCof = true;
let numCof = true;
let spChCof = true;

function nextChar(){ //adds a charter to the password.
  let validChars = []; 
  if(lowCof){
    validChars = validChars.concat(lowercase);
  }
  if(upCof){
    validChars = validChars.concat(uppercase);
  }
  if(numCof){
    validChars = validChars.concat(nums);
  }
  if(spChCof){
    validChars = validChars.concat(specialCharacters);
  }// validChars is now an array of all the avalable charters
  let upNext = validChars[Math.floor(Math.random()*validChars.length)]; // upNext picks a charter from the approved list at random 
  return upNext;
}

function generatePassword() {
  let password = "";
  let length = window.prompt("What is the length of the password? \nPassword Length: "); // The Ifs ensures the length is in the right range, and is a number.
  if (isNaN(length)){
    return("Please enter a number between 8 and 128.")
  }
  else if(length < 8){
    return("Password must be at least 8 charters in length.")
  }
  else if(length > 128){
    return("Password can not be more than 128 charters in length.")
  }
  else{
    length = Number(length);
  }
  
  //gets the requirments of password
  lowCof = confirm("Use lowercase letters?");
  upCof = confirm("Use capital letters?");
  numCof = confirm("Use numbers?");
  spChCof = confirm("Use special characters?");

  if(!lowCof && !upCof && !numCof && !spChCof){ // if only no was selected, returns error.
    return("Error: No Characters For Password... \nPlease Try Again.")
  }
  
  for(let i = 0; i < length; i++){
    password += nextChar()
  }
  return(password);
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.querySelector("#password").value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);