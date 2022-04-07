import { insertResistButton } from "./common.js";

function testLanguage() {
  /* Amazon is unlikely to change the word used for "cart" in the near future making this a robust test. */
  return document.evaluate('count(//*[contains(text(), "カート")])', document,
    null, XPathResult.NUMBER_TYPE).numberValue > 0 ? 'ja' : 'en';
}

