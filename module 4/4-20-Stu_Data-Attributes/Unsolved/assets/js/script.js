var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("div"))
  {
    var boxNumber = element.getAttribute("data-number");
    var boxState = element.getAttribute("data-state")

    

    console.log(element.getAttribute("data-state"))
    if (boxState === "hidden")
    {
      element.dataset.state = "visible";
      element.innerHTML = boxNumber;
    }
    else
    {
      element.dataset.state = "hidden";
      element.innerHTML = "";
    }
  }
  
});
