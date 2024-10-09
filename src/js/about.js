// JavaScript to handle video flipping
const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4']; // Додайте ваші відеофайли
let currentVideoIndex = 0;

const videoElement = document.querySelector('.video-container video');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function flipVideo(direction) {
  videoElement.classList.add('flip');

  setTimeout(() => {
    if (direction === 'next') {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else {
      currentVideoIndex =
        (currentVideoIndex - 1 + videos.length) % videos.length;
    }
    videoElement.src = videos[currentVideoIndex];
    videoElement.classList.remove('flip');
  }, 300);
}

prevBtn.addEventListener('click', () => flipVideo('prev'));
nextBtn.addEventListener('click', () => flipVideo('next'));
