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

const errorMessage = document.querySelector('#error');
const alertContainer = document.createElement('div');

const showAlert = () => {
  alertContainer.append(errorMessage.content.cloneNode(true));

  document.body.append(alertContainer);
};

// const errorButton = document.querySelector('.error__button');

// errorButton.addEventListener('click', () => {
//   document.body.remove(alertContainer);
// });

export {getRandomIntInclusive, getRandomArbitrary, showAlert};
