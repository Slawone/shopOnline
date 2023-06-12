const timerCount = (deadline) => {
  const dataTimerDeadline = document.querySelector('[data-timer-deadline]');

  if (dataTimerDeadline !== null) {
    dataTimerDeadline.classList.add('timer');

    const timerTitle = document.createElement('p');
    timerTitle.classList.add('timer__title');
    timerTitle.textContent = 'До конца акции осталось:';

    const timerItemDays = document.createElement('p');
    timerItemDays.classList.add('timer__item', 'timer__item_days');
    const timerCountDays = document.createElement('span');
    timerCountDays.classList.add('timer__count', 'timer__count_days');
    const timerUnitsDays = document.createElement('span');
    timerUnitsDays.classList.add('timer__units', 'timer__units_days');

    timerItemDays.append(timerCountDays, timerUnitsDays);

    const timerItemHours = document.createElement('p');
    timerItemHours.classList.add('timer__item', 'timer__item_hours');
    const timerCountHours = document.createElement('span');
    timerCountHours.classList.add('timer__count', 'timer__count_hours');
    const timerUnitsHours = document.createElement('span');
    timerUnitsHours.classList.add('timer__units', 'timer__units_hours');

    timerItemHours.append(timerCountHours, timerUnitsHours);

    const timerItemMinutes = document.createElement('p');
    timerItemMinutes.classList.add('timer__item', 'timer__item_minutes');
    const timerCountMinutes = document.createElement('span');
    timerCountMinutes.classList.add('timer__count', 'timer__count_minutes');
    const timerUnitsMinutes = document.createElement('span');
    timerUnitsMinutes.classList.add('timer__count', 'timer__units_minutes');

    timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);

    const timerItemSeconds = document.createElement('p');
    timerItemSeconds.classList.add('timer__item', 'timer__item_seconds');
    const timerCountSeconds = document.createElement('span');
    timerCountSeconds.classList.add('timer__count', 'timer__count_seconds');
    const timerUnitsSeconds = document.createElement('span');
    timerUnitsSeconds.classList.add('timer__count', 'timer__units_seconds');

    timerItemSeconds.append(timerCountSeconds, timerUnitsSeconds);

    const timerBox = document.createElement('div');
    timerBox.classList.add('timer__box');

    timerBox.append(
        timerItemDays, timerItemHours, timerItemMinutes, timerItemSeconds);

    dataTimerDeadline.append(timerTitle, timerBox);

    const declOfNum = (number, titles) => {
      const cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ?
        2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date();
      const timeRemaining = dateStop - dateNow;

      const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
      const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
      const minutes = Math.floor(timeRemaining / 1000 / 60) % 60;
      const seconds = Math.floor(timeRemaining / 1000) % 60;

      return {
        timeRemaining,
        days,
        hours,
        minutes,
        seconds,
      };
    };

    const start = () => {
      const HOURS_IN_DAY = 86400000;
      const timer = getTimeRemaining();

      const intervalId = setTimeout(start, 1000);

      timerCountDays.textContent = timer.days;
      timerUnitsDays.textContent =
        declOfNum(timer.days, ['день', 'дня', 'дней']);
      timerCountHours.textContent = timer.hours;
      timerUnitsHours.textContent =
        declOfNum(timer.hours, ['час', 'часа', 'часов']);
      timerCountMinutes.textContent = timer.minutes;
      timerUnitsMinutes.textContent =
        declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
      timerCountSeconds.textContent = timer.seconds;
      timerUnitsSeconds.textContent =
        declOfNum(timer.seconds, ['секунда', 'секунды', 'секунд']);

      if (timer.timeRemaining > HOURS_IN_DAY) {
        timerItemSeconds.style.display = 'none';
      } else {
        timerItemDays.style.display = 'none';
      }

      if (timer.timeRemaining <= 0) {
        clearTimeout(intervalId);
        dataTimerDeadline.style.display = 'none';
      }
    };

    start();
  }
};

export default timerCount;
