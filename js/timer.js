const timer = (deadline) => {
  const bannerTimer = document.querySelector('.banner__timer');

  const bannerTimeDays = document.querySelector('.banner__time_days');
  const bannerTimeHours = document.querySelector('.banner__time_hours');
  const bannerTimeMinutes = document.querySelector('.banner__time_minutes');

  const bannerDays = document.querySelector('.banner__days');
  const bannerHours = document.querySelector('.banner__hours');
  const bannerMinutes = document.querySelector('.banner__minutes');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;


    const minutes = Math.floor(timeRemaining / (1000 * 60) % 60);
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return {
      timeRemaining,
      days,
      hours,
      minutes,
    }
  }

  const start = () => {
    const timer = getTimeRemaining();

    bannerTimeDays.textContent = timer.days;
    bannerTimeHours.textContent = timer.hours;
    bannerTimeMinutes.textContent = timer.minutes;

    const intervalId = setTimeout(start, 1000);

    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      bannerTimeDays.textContent = '00';
      bannerTimeHours.textContent = '00';
      bannerTimeMinutes.textContent = '00';
      bannerTimer.style.display = 'none';
    }

    if (timer.days === 1 
      || (timer.days > 20 && timer.days % 10 === 1)) {
        bannerDays.textContent = 'день';
    } else if ((timer.days > 1 && timer.days < 5) 
      || (timer.days > 21 && timer.days < 25)) {
        bannerDays.textContent = 'дня';
    } else {
        bannerDays.textContent = 'дней';
    }

    if (timer.hours === 1 || timer.hours === 21) {
      bannerHours.textContent = 'час';
    } else if ((timer.hours > 1 && timer.hours < 5) 
      || timer.hours > 21) {
        bannerHours.textContent = 'часа';
    } else {
      bannerHours.textContent = 'часов';
    }

    if (timer.minutes === 1 
      || (timer.minutes > 20 && timer.minutes % 10 === 1)) {
        bannerMinutes.textContent = 'минута';
    } else if ((timer.minutes > 1 && timer.minutes < 5) 
      || (timer.minutes > 21 && timer.minutes < 25)
      || (timer.minutes > 31 && timer.minutes < 35)
      || (timer.minutes > 41 && timer.minutes < 45)
      || (timer.minutes > 51 && timer.minutes < 55)) {
        bannerMinutes.textContent = 'минуты';
      } else {
        bannerMinutes.textContent = 'минут';
      }
  }  

  start();
};

export default timer;