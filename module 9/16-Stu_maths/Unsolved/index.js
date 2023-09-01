// TODO: Import `maths.js`
const maths = require("./maths.js");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation = process.argv[2];
let numOne = parseInt(process.argv[3]);
let numTwo = parseInt(process.argv[4]);

console.log(process.argv);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

let result;

switch(operation)
{
    case "sum":

        result = maths.sum(numOne, numTwo);
        console.log(result);
        break;

    case "difference":

        result = maths.difference(numOne, numTwo);
        console.log(result);
        break;

    case "product":

        result = maths.product(numOne, numTwo);
        console.log(result);
        break;

    case "quotient":

        result = maths.quotient(numOne, numTwo);
        console.log(result);
        break;

    default:

        console.log("invalid operation");
}
