function getRandomIntInclusive(min, max) {
  if (min >= max) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 10);

function getRandomArbitrary(min, max) {
  if (min >= max && max || min > 0) {
    return Math.random() * (min - max) + max;

  } else if (max >=min && max || min > 0) {
    return Math.random() * (max - min) + min;
  }

  return 'Число должно быть больше 0';
}

getRandomArbitrary(1, 10);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}


export {getRandomIntInclusive, getRandomArbitrary, showAlert};
