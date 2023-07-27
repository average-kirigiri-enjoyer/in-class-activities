function keydownAction(event) {
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  var keyPressed = event.key;
  var keyCode = event.keyCode;
  document.querySelector("#key").innerHTML = keyPressed;
  document.querySelector("#code").innerHTML = keyCode;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

