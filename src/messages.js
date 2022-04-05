export function getMessage() {
  let current = new Date();
  let num = current.getSeconds() % 5;
  switch (num) {
    case 0:
      return 'Congratulations! You resisted! Keep it up!'
    case 1:
      return 'Fight the urges! Save the planet!'
    case 2:
      return 'Your wallet feels happy today.'
    case 3:
      return 'Great work. Now close the tab and back away slowly...'
    case 4:
      return 'One step at a time. Awesome work! Keep resisting!'
    default:
      return 'Congratulations! You resisted! Keep it up!'
  }
}
