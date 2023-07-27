var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

function increment()
{
  count++;
  setCounterText();
}

function decrement()
{
  count--;

  if (count < 0)
  {
    count = 0;
    return;
  }
  
  setCounterText();
}

// TODO: Add event listener to increment button

incrementEl.addEventListener("click", increment);
decrementEl.addEventListener("click", decrement);

// TODO: Add event listener to decrement button 
