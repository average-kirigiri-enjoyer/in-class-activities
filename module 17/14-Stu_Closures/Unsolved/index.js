// TODO: Complete the 'counter' function below.
function counter() {
  // Create a 'count' variable inside of the outer function.
  let count = 0;

  // Return an inner function creating a closure.
  return {
    //build out an inner function
    increment: function()
    {
      return ++count;
    }
  };
}

const studentCounter = counter();
studentCounter.increment();

module.exports = counter;
