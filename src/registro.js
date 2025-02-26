const canvas = document.querySelector(".main__canvas");
const jsConfetti = new JSConfetti({ canvas });

setTimeout(() => {
  jsConfetti.addConfetti();
}, 500);
