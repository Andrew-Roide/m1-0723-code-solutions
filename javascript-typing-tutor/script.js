let currentIndex = 0;
const spans = document.querySelectorAll('span');

document.addEventListener('keydown', accessNode);

function accessNode(event) {
  const currentSpan = spans[currentIndex];
  const textContent = currentSpan.textContent;

  if (event.key === textContent) {
    currentSpan.className = 'letter-correct';
    currentIndex++;
    if (currentIndex < spans.length) {
      spans[currentIndex].className = 'next-word';
    }
  } else {
    currentSpan.className = 'letter-wrong';
  }
}
