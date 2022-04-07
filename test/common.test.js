import {assert} from 'chai';
import { insertResistButton } from '../src/content/common.js';
import { JSDOM } from "jsdom";


describe('common', function() {
  describe('insertResistButton', function() {
    it ('properly inserts a button given a button id.', () => {
      const dom = new JSDOM(`<!DOCTYPE html><p><button id="buyButtonId">Buy Button </button></p>`);
      const docRef = global.document;
      global.document = dom.window.document;
      global.XPathResult = dom.window.XPathResult;

      const res = insertResistButton(
        '//*[@id="buyButtonId"]',
        'resistButtonId',
        'Resist!!'
      );
      assert.equal(res.innerText, 'Resist!!');
      assert.equal(res.id, 'resistButtonId');
      assert.isNotNull(dom.window.document.getElementById('resistButtonId'));
      global.document = docRef;
      global.XPathResult = undefined;
    });
    it('does not do anything if buyButtonId is not on the page.', () => {
      const dom = new JSDOM(`<!DOCTYPE html><p></p>`);
      const docRef = global.document;
      global.document = dom.window.document;
      global.XPathResult = dom.window.XPathResult;

      const res = insertResistButton(
        '//*[@id="buyButtonIdNotExist"]',
        'resistButtonIdNotExist',
        'Resist!!'
      );
      assert.isNull(dom.window.document.getElementById('resistButtonIdNotExist'));
      global.document = docRef;
      global.XPathResult = undefined;
    });
  });
})
