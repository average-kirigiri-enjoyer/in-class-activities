//WRITE YOUR CODE BELOW

var customerDrink = 
{
    name: "Coffee",
    sugars: 2,
    isReady: false,
};

console.log(customerDrink.name);
console.log(customerDrink.sugars);

function isDrinkReady()
{
    if (customerDrink.isReady)
    {
        console.log("Ready for pick-up");
    }
    else
    {
        console.log("Still in order queue");
    }
}