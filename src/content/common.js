import {getMessage} from "../messages.js";


export function insertResistButton(buyButtonSelector, resistButtonId, resistButtonText, language = 'en') {
  /* inserts a resist button before the specified button Id.
  Allows custom styling using css that matches the resistButtonId */
  // let buyButton = document.getElementById(buyButtonId);
  let buyButton =  document.evaluate(buyButtonSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
  if (!buyButton) {
    console.log("[Resist-button]: No buy buttons found here...");
  } else {
    let resistButton = document.createElement('button');
    resistButton.innerText = resistButtonText;
    resistButton.type = "button";
    resistButton.id = resistButtonId;
    resistButton.onclick = getClickedResistButtonAction(language);
    buyButton.parentNode.insertBefore(resistButton, buyButton);
    return resistButton;
  }
}

export function loadPopupContent(message) {
  const extId = document.getElementById("successfully-resisted-popup").getAttribute('data-ext-id');
  document.getElementById("successfully-resisted-popup").style.display = "block";
  document.getElementById("successfully-resisted-title").innerText = message.title;
  document.getElementById("successfully-resisted-message").innerText = message.message;
  document.getElementById("successfully-resisted-image").setAttribute('src', `chrome-extension://${extId}/${message.image}`);
  document.getElementById("successfully-resisted-img-attribution").innerHTML = message.attribution
  document.getElementById("successfully-resisted-close-button").innerHTML = message.close
}

export function getClickedResistButtonAction(language) {
  return () => {
    const message = getMessage(language);
    loadPopupContent(message)
  }
}

