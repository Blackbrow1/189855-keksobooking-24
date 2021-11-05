import { showAlert } from './util.js';
import {mainPinIcon} from './map.js';

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

  if (priceValueNumber < MIN_PRICE) {
    priceValue.setCustomValidity('Сумма не может быть меньше 0');
  } else if (priceValueNumber > MAX_PRICE) {
    priceValue.setCustomValidity('Сумма не может быть больше 1000000');
  } else {
    priceValue.setCustomValidity('');
  }

  priceValue.reportValidity();
});

//rooms

const roomNumber = document.querySelector('#room_number');
const bedNumber = document.querySelector('#capacity');

const changeRoomBedNumber = () => {
  let textMessage = '';
  const bedValue = bedNumber.value;
  const roomValue = roomNumber.value;
  if ( roomValue !== '100' && (bedValue > roomValue || bedValue === '0')) {
    textMessage =`Доступны комнаты для не менее 1 и не более ${roomValue} гостей`;
  } else if (roomValue === '100' && bedValue !== '0') {
    textMessage = 'Эти комнаты  не для гостей';
  }
  bedNumber.setCustomValidity(textMessage);
  bedNumber.reportValidity();
  return !textMessage;
};

roomNumber.addEventListener('change', changeRoomBedNumber);
bedNumber.addEventListener('change', changeRoomBedNumber);

// form active / not active

const adForm = document.querySelector('.ad-form');
const adFormHeader = adForm.querySelector('.ad-form-header');
const adFormElement = adForm.querySelector('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelector('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');


const blockForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormHeader.disabled = true;
  adFormElement.disabled = true;
  mapFilters.classList.add('ad-form--disabled');
  mapFiltersSelect.disabled = true;
  mapFiltersFieldset.disabled = true;
};

blockForm();

function closeForm () {
  titleAdvert.value = '';
  mainPinIcon.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });
}

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};

export {adForm, adFormHeader, adFormElement, mapFilters, mapFiltersSelect, mapFiltersFieldset, closeForm, setUserFormSubmit};
