//WRITE YOUR CODE BELOW

var customerDrink = ["Coffee", 2, true];

console.log(customerDrink[0])
console.log(customerDrink[1])

function isDrinkReady()
{
    if (customerDrink[2])
    {
        console.log("Ready for pick-up")
    }
    else
    {
        console.log("Still in order queue")
    }
}