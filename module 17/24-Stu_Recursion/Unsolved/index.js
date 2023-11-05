// TODO: Add a comment describing what the `position` parameter means for this function.
// the position parameter represents the position in the fibonacci sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // terminates the function if the position provided is < 2
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // returns the value of the fibonacci sequence at the given position
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// returns the value of the 9th position in the fibonacci sequence
console.log(fibonacci(9));
