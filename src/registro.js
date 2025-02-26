import JSConfetti from 'js-confetti'

const canvas = document.querySelector(".main__canvas")
const jsConfetti = new JSConfetti({ canvas })

setTimeout(() => {
  jsConfetti.addConfetti()
}, 500)

// button.addEventListener('click', () => {
//   jsConfetti.addConfetti()
// })

console.log('AAAAAAAaaa')
