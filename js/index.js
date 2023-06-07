import timer from './timer.js';

const bannerTimer = document.querySelector('.banner__timer');
const deadline = bannerTimer.dataset.deadline;

timer(deadline);