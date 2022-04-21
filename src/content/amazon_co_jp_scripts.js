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

insertResistButton('//*[@id="buyNow_feature_div"]',
  'amazon_resist_button',
  buttonText,
  language
);

insertResistButton('//*[@id="submitOrderButtonId"]',
  'amazon_resist_button',
  buttonText,
  language
);

insertResistButton('//*[@id="exports_desktop_qualifiedBuybox_buyNow_feature_div"]',
  'amazon_resist_button',
  buttonText,
  language
);