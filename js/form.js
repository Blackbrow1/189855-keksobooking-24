// title

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const titleAdvert = document.querySelector('#title');

titleAdvert.addEventListener('input', () => {
  const valueTitleLength = titleAdvert.value.length;

  if (valueTitleLength < MIN_TITLE_LENGTH) {
    titleAdvert.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueTitleLength} симв.`);
  } else if (valueTitleLength > MAX_TITLE_LENGTH) {
    titleAdvert.setCustomValidity(`Удалите лишние ${valueTitleLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleAdvert.setCustomValidity('');
  }

  titleAdvert.reportValidity();
});

// price

const MAX_PRICE = 1000000;
const MIN_PRICE = 0;
const priceValue = document.querySelector('#price');

priceValue.addEventListener('input', () => {
  const priceValueNumber = priceValue.value;

  if (priceValueNumber < MAX_PRICE) {
    priceValue.setCustomValidity(`Ещё ${MAX_PRICE - priceValueNumber} симв.`);
  } else if (priceValue < MIN_PRICE) {
    priceValue.setCustomValidity('Сумма не может быть меньше 0');
  } else {
    priceValue.setCustomValidity('');
  }

  priceValue.reportValidity();
});

//rooms

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

roomNumber.addEventListener('input', () => {
  const roomNumberValue = roomNumber.value;
  const capacityValue = capacity.value;

  if (roomNumberValue === roomNumberValue[1]) {
    capacityValue.textContent = capacityValue[1];
  }

  priceValue.reportValidity();
});
