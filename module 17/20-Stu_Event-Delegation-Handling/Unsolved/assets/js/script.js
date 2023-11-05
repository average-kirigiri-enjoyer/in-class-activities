const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// defines a locally-scoped variable to count the number of clicks
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // returns a function which increases the value of count by 1, & updates the clicked button to match
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // contained within a function scoped to the specific button that triggered the event,
   // thus allowing it to increment the count variable of each button individually
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   // changes the text content of the element that triggered the event to the number of clicks tracked by count
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// adds an event listener to each button with the 'button' tag to run the clickHandler function
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
