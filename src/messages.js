export function getMessage(language) {
  const messages = {
    'en': getEnMessages,
    'ja': getJaMessages,
  }
  return messages[language] ? messages[language]() : getEnMessages()
}

function getEnMessages() {
  let current = new Date();
  let num = current.getSeconds() % 5;
  const closeText = 'Close';
  switch (num) {
    case 0:
      return {message: 'You resisted! Keep it up!', title: 'Congratulations!', image: 'images/medal.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/medal" title="medal icons">Medal icons created by Vectors Market - Flaticon</a>',
        close: closeText
      }
    case 1:
      return {message: 'Fight the urges! Save the planet!', title: 'Green Resistance!', image: 'images/tree.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/tree" title="tree icons">Tree icons created by Vectors Market - Flaticon</a>',
        close: closeText
      }
    case 2:
      // TODO: there's a great happy wallet image here, but it's paid so look it up later.
      // https://www.freepik.com/premium-vector/cute-wallet-money-cartoon-icon-illustration-business-finance-icon-concept-isolated-flat-cartoon-style_8901879.htm
      // https://www.freepik.com/premium-vector/cute-wallet-money-cartoon-vector-icon-illustration-business-finance-icon-concept-isolated-premium-vector-flat-cartoon-style_9072439.htm
      // maybe contact catalyststuff?
      // https://www.facebook.com/moshimoshicatalyst
      return {message: 'Your wallet feels happy today.', title: 'Saved!', image: 'images/wallet.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/money" title="money icons">Money icons created by Freepik - Flaticon</a>',
        close: closeText
      }
    case 3:
      return {message: 'Now close the tab and back away slowly...', title: 'Great job!', image: 'images/moonwalk.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/moonwalk" title="moonwalk icons">Moonwalk icons created by Flat Icons - Flaticon</a>',
        close: closeText
      }
    case 4:
      return {message: 'Awesome work! Keep resisting!', title: 'One step at a time.', image: 'images/step.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/step" title="step icons">Step icons created by Freepik - Flaticon</a>',
        close: closeText
      }
    default:
      return {message: 'You resisted! Keep it up!', title: 'Congratulations!', image: 'images/congratulation.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/congratulation" title="congratulation icons">Congratulation icons created by Freepik - Flaticon</a>',
        close: closeText
      }
  }
}

function getJaMessages() {
  const current = new Date();
  const num = current.getSeconds() % 3;
  const closeText = '閉じる';
  switch (num) {
    case 0:
      return {message: 'よく我慢しました！ がんばりましょう！', title: 'おめでとう！', image: 'images/medal.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/medal" title="メダルアイコン">アイコンはVectors Market - Flaticonによって作成されました</a>',
        close: closeText
      }
    case 1:
      return {message: '本能を倒す！ 環境を救いましょう！', title: '地球のため！', image: 'images/tree.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/tree" title="木のアイコン">アイコンはVectors Market - Flaticonによって作成されました</a>',
        close: closeText
      }
    case 2:
      return {message: '財布も喜んでいますよ〜', title: '節約できました！', image: 'images/wallet.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/money" title="お金のアイコン">アイコンはFreepik - Flaticonによって作成されました</a>',
        close: closeText
      }
    case 3:
      return {message: 'さ、タブを閉じてかっこよく離れていきましょう', title: 'さすがです！', image: 'images/moonwalk.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/moonwalk" title="ムーンワークのアイコン">アイコンはFlat Icons - Flaticonによって作成されました</a>',
        close: closeText
      }
    case 4:
      return {message: 'よくできました！ 我慢大会で負けちゃいけません！', title: 'その調子ですわ', image: 'images/step.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/step" title="ステップのアイコン">アイコンはFreepik - Flaticonによって作成されました</a>',
        close: closeText
      }
    default:
      return {message: 'よくできました！ がんばれ！', title: 'おめでとう！', image: 'images/congratulation.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/congratulation" title="おめでとうのアイコン">アイコンはFreepik - Flaticonによって作成されました</a>',
        close: closeText
      }
  }
}
