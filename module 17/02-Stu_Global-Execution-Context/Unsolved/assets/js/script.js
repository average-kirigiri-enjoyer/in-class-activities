// 1) Where is carNoise stored?
// stored GLOBALLY!
const carNoise = 'Honk';
// 2) Where is goFast stored?
// goFast is stored GLOBALLY!
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // when an argument is fed into the goFast function(?)
  
  // 5) Where is makeNoise stored?
  // makeNoise is stored within goFast (the LOCAL CONTEXT OF goFast)
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // it logs 'my speed is (speed fed into goFast), time to sound Honk' to the console
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// a confirmation pop-up appears on the page with the message "Do you want to go fast?"
// if you respond "yes", then 'My speed is at 80, time to Honk' is logged to the console
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
