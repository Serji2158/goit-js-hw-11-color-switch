const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const refs = {
     btnStart: document.querySelector('[data-action="start"]'),
     btnStop: document.querySelector('[data-action="stop"]')
  }

  refs.btnStart.addEventListener('click', onStartBtn);
  refs.btnStop.addEventListener('click', onStopBtn);

  let intervalId = null;
  const DELAY = 1000;

  function onStartBtn () {
     intervalId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)]
        }, DELAY);
     refs.btnStart.disabled = true;
  };

  function onStopBtn () {
      clearInterval(intervalId);
      refs.btnStart.disabled = false;
  };

  function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const min = 0;
  const max = colors.length -1;