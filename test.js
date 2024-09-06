const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');
const songTitle = document.getElementById('songTitle');

songTitle.textContent = 'Current Song';

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '&#9658;';
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;

  currentTimeSpan.textContent = formatTime(audio.currentTime);
  durationSpan.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
//
audio.addEventListener('loadedmetadata', () => {
  durationSpan.textContent = formatTime(audio.duration);
});
