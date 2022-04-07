import { insertResistButton } from "./common.js";

function testLanguage() {
  /* Amazon is unlikely to change the word used for "cart" in the near future making this a robust test. */
  return document.evaluate('count(//*[contains(text(), "カート")])', document,
    null, XPathResult.NUMBER_TYPE).numberValue > 0 ? 'ja' : 'en';
}

let language = testLanguage();
var buttonText = 'Resist!!'
if (language?.includes('ja')) {
  buttonText = '我慢する！！'
}

insertResistButton('buyNow_feature_div',
  'amazon_resist_button',
  buttonText,
  language
);

insertResistButton('submitOrderButtonId',
  'amazon_resist_button',
  buttonText,
  language
);
