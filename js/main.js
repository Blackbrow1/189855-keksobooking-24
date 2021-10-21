import {getRandomIntInclusive, getRandomArbitrary} from './util.js';
import {TITLES, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTIONS, PHOTOS} from './data.js';
import {generatingSimilarElements} from './generating-similar-elements.js';

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

function createObject() {

  const lat = getRandomArbitrary(35.65000, 35.70000).toFixed(5);
  const lng = getRandomArbitrary(139.70000, 139.80000).toFixed(5);
  const index = ['01', '02', '03', '04', '05', '06', '07', '08' ,'09', '10'];

  const objectTemplate = {
    author: {
      avatar: `img/avatars/user${getRandomArrayElement(index)}.png`,
    },

    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomIntInclusive(200, 3000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntInclusive(1, 5),
      guests: getRandomIntInclusive(1, 10),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },

    location: {
      lat: lat,
      lng: lng,
    },
  };

  return objectTemplate;
}

const objects = [];

for (let i = 1; i <= 10; i++) {
  const newObject = createObject();
  objects.push(newObject);
}

generatingSimilarElements(objects[0]);
