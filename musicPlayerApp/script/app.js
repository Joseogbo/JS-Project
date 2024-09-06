const audio = document.querySelector('#audio');
const playPauseBtn = document.querySelector('playPauseBtn');
const progressBar = document.querySelector('progressBar')
const currentTimeSpan = document.querySelector('currentTime');
const durationSpan = document.querySelector('duration');
const volumeControl = document.querySelector('volumeControl');
const songTitle = document.querySelector('songTitle');

songTitle.textContent = 'Play List';

playPauseBtn