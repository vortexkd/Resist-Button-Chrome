import {getMessage} from "../messages.js";


export function insertResistButton(buyButtonId, resistButtonId, resistButtonText) {
  /* inserts a resist button before the specified button Id.
  Allows custom styling using css that matches the resistButtonId */
  let buyButton = document.getElementById(buyButtonId);
  if (!buyButton) {
    console.log("[Resist-button]: No buy buttons found here...");
  } else {
    let resistButton = document.createElement('button');
    resistButton.innerText = resistButtonText;
    resistButton.type = "button";
    resistButton.id = resistButtonId;
    resistButton.onclick = clickedResistButton;
    buyButton.parentNode.insertBefore(resistButton, buyButton);
    return resistButton;
  }
}


export function clickedResistButton() {
  /* On click of the button we will display an alert with a randomly chosen message. */
  alert(getMessage());
}
