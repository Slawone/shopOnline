import timerCount from './timer.js';

const deadline = document.querySelector('[data-timer-deadline]');

timerCount(deadline.dataset.timerDeadline);
