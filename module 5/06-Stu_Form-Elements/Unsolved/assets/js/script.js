var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInput = $('input[name="shopping-input"]');
var shoppingButton = $(".btn");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

//prevent page refresh

function addListItem(event)
{
    event.preventDefault();
    var newListItem = $("<li>");

    console.log(shoppingInput.val())
    newListItem.text(shoppingInput.val());
    shoppingListEl.append(newListItem);
    shoppingInput.val(""); 
}

shoppingButton.on("click", addListItem);

//take input text and add as list element
//clear input

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
