export function getMessage() {
  let current = new Date();
  let num = current.getSeconds() % 5;
  switch (num) {
    case 0:
      return {message: 'You resisted! Keep it up!', title: 'Congratulations!', image: 'images/medal.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/medal" title="medal icons">Medal icons created by Vectors Market - Flaticon</a>'}
    case 1:
      return {message: 'Fight the urges! Save the planet!', title: 'Green Resistance!', image: 'images/tree.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/tree" title="tree icons">Tree icons created by Vectors Market - Flaticon</a>'}
    case 2:
      // TODO: there's a great happy wallet image here, but it's paid so look it up later.
      // https://www.freepik.com/premium-vector/cute-wallet-money-cartoon-icon-illustration-business-finance-icon-concept-isolated-flat-cartoon-style_8901879.htm
      // https://www.freepik.com/premium-vector/cute-wallet-money-cartoon-vector-icon-illustration-business-finance-icon-concept-isolated-premium-vector-flat-cartoon-style_9072439.htm
      // maybe contact catalyststuff?
      // https://www.facebook.com/moshimoshicatalyst
      return {message: 'Your wallet feels happy today.', title: 'Saved!', image: 'images/wallet.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/money" title="money icons">Money icons created by Freepik - Flaticon</a>'}
    case 3:
      return {message: 'Now close the tab and back away slowly...', title: 'Great job!', image: 'images/moonwalk.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/moonwalk" title="moonwalk icons">Moonwalk icons created by Flat Icons - Flaticon</a>'}
    case 4:
      return {message: 'Awesome work! Keep resisting!', title: 'One step at a time.', image: 'images/step.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/step" title="step icons">Step icons created by Freepik - Flaticon</a>'}
    default:
      return {message: 'You resisted! Keep it up!', title: 'Congratulations!', image: 'images/congratulation.png',
        attribution: '<a href="https://www.flaticon.com/free-icons/congratulation" title="congratulation icons">Congratulation icons created by Freepik - Flaticon</a>'}
  }
}
