import { insertResistButton } from "./common.js";


insertResistButton('//*[@id="preAddToCartFramework_feature_div"]', //this id because there are multiple divs with the id 'buyNow_feature_div'
  'amazon_resist_button',
  'Resist!!'
);
