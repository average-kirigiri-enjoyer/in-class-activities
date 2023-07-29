var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "cucumbers";
li2.textContent = "doritos";
li3.textContent = "blood of the innocent";
li4.textContent = "cat food";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px; padding: 20px; background-color: #333333");

// TODO: Add ordered list items containing four favorite foods
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)

/* THIS IS POINTLESS WITH THE STUFF THAT COMES AFTER, BUT IS GOOD FOR REFERENCING SYNTAX
for (child = 0; child < 4; child++)
{
    listEl.children[child].setAttribute("style", "color: white; padding: 5px; margin-left: 35px");
}
*/

listEl.children[0].setAttribute("style", "background-color: green; color: white; padding: 5px; margin-left: 35px");
listEl.children[1].setAttribute("style", "background-color: red; color: white; padding: 5px; margin-left: 35px");
listEl.children[2].setAttribute("style", "background-color: blue; color: white; padding: 5px; margin-left: 35px");
listEl.children[3].setAttribute("style", "background-color: purple; color: white; padding: 5px; margin-left: 35px");


