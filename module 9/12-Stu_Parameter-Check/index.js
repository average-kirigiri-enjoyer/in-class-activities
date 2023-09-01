console.log(process.argv);

let variable1 = process.argv[2];
let variable2 = process.argv[3];

if (variable1 === variable2)
{
    console.log("true");
    return true;
}
else
{
    console.log("false");
    return false;
}