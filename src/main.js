


function pickCorrectJs() {
  let host = document.location.host;
  let root = 'src/content/'
  if (host.match('amazon.com')) {
    return 'src/content/amazon_com_scripts.js';
  } else if (host.match('amazon.co.jp')) {
    return 'src/content/amazon_co_jp_scripts.js';
  }
  return null;
}
function insertScriptTag(url) {
  const script = document.createElement('script');
  script.setAttribute('type', 'module');
  script.setAttribute('src', url);
  const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
  head.insertBefore(script, head.lastChild);
}

let jsFile = pickCorrectJs();
if (jsFile != null) {
  console.log(jsFile);
  insertScriptTag(chrome.runtime.getURL(jsFile));
}
