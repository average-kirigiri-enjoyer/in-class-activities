var chosenPet = "I AM LOSING IT";
var dogs = ["Mackie", "Bernice", "Cookie Monster", "Spot"];
var cats = ["Astrid", "Lulu", "Fluffy", "Mouser"];

var shelter = {
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage() {
   console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
   shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

if (dogs.includes(chosenPet)) {
  dogMessage();
} else if (cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + dogs[0] + ". or our featured cat, " + cats[0]);
}
  
