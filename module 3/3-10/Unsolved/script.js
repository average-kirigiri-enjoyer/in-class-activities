// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x > 25);
var expression2 = (x >= 50);

// Write Your JavaScript Code Here

if (expression1 == expression2 && expression1 == true)
{
    console.log("True ✅ True ✅");
}

else if (expression1 == expression2 && expression1 == false)
{
    console.log("False ❌ False ❌");
}

else if (expression1 == true && expression2 == false)
{
    console.log("True ✅ False ❌");
}

else
{
    console.log("False ❌ True ✅");
}