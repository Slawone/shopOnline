const renderWhen = () => {
  const when = document.createElement('div');
  when.classList.add('card__when', 'when');

  const whenDay = document.createElement('span');
  whenDay.classList.add('when__day');
  whenDay.textContent = '22 октября 2021,';

  const whentime = document.createElement('span');
  whentime.classList.add('when__time');
  whentime.textContent = '12:45';

  when.append(whenDay, whentime);

  return when;
};

export default renderWhen;
