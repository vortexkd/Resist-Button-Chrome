import {assert} from 'chai';
import { englishMessages, japaneseMessages, defaultMessages } from '../src/messages.js';
import { JSDOM } from "jsdom";

const supportedKeys = ['close', 'attribution', 'image', 'title', 'message']
const supportedLanguages = ['en', 'ja']

describe('messages', function() {
  describe('each english message', function () {
    it('should return supported keys', function () {
      testMessageParams(englishMessages, 'japanese', supportedKeys);
    });
  });

  describe('each japanese message', function () {
    it('should return supported keys', function () {
      testMessageParams(japaneseMessages, 'japanese', supportedKeys);
    });
  });
  describe('default messages', function () {
    it ('should exist for all supported languages', function () {
      for (const lang of supportedLanguages) {
        assert(defaultMessages.hasOwnProperty(lang), `Default messages does not have message for supported language "${lang}".`);
        const message = defaultMessages[lang];
        for (const key of supportedKeys) {
          assert(message.hasOwnProperty(key), `Default message for "${lang}" does not have required key "${key}".`);
        }
      }
    });
    it ('should not have unsupported languages', function () {
      const langs = Object.keys(defaultMessages);
      for (const lang of langs) {
        assert(supportedLanguages.includes(lang), `Default messages has key for "${lang}" which is not in tested supportedLanguages. Please add it to the supportedLanguages."`)
      }
    });
  });

});

function testMessageParams(messagePool, messagePoolName, keys) {
  const len = Object.keys(messagePool).length;
  for (let i = 0; i < len; i++) {
    assert(messagePool.hasOwnProperty(i), `Keys in ${messagePoolName} messages should all be numbers. ${messagePoolName} messages does not have key "${i}" even though it has length ${len}.`)
    const message = messagePool[i];
    for (const key of keys) {
      assert(message.hasOwnProperty(key), `Message ${i} does not have required key "${key}".`)
    }
  }
}
