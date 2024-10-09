// JavaScript to handle video flipping
const videos = [
  'https://www.youtube.com/embed/RYL7JFJ0urE', // Перше відео
  'https://www.youtube.com/embed/tgbNymZ7vqY', // Друге відео
  'https://www.youtube.com/embed/3JZ_D3ELwOQ', // Третє відео для тестування
];

let currentVideoIndex = 0;

const iframeElement = document.querySelector('.video-container iframe');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function flipVideo(direction) {
  // Додаємо клас для 3D перевертання
  if (direction === 'next') {
    iframeElement.classList.add('flip-next');
  } else {
    iframeElement.classList.add('flip-prev');
  }

  // Змінюємо відео після завершення ефекту перевертання
  setTimeout(() => {
    if (direction === 'next') {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else {
      currentVideoIndex =
        (currentVideoIndex - 1 + videos.length) % videos.length;
    }
    iframeElement.src = videos[currentVideoIndex];
    iframeElement.classList.remove('flip-next', 'flip-prev'); // Видаляємо класи після повороту
  }, 600); // Час перевертання відповідає CSS transition
}

prevBtn.addEventListener('click', () => flipVideo('prev'));
nextBtn.addEventListener('click', () => flipVideo('next'));
