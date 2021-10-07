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

function getRandomArbitrary(min, max) {
  if (min >= max && max || min > 0) {
    return Math.random() * (min - max) + max;

  } else if (max >=min && max || min > 0) {
    return Math.random() * (max - min) + min;
  }

  return 'Число должно быть больше 0';
}

const TITLES = [
  'Просторная квартира в центре Токио',
  'Замечательная комната с великолепным видом на горы',
  'Уютная квартира для студентов',
  'Та самая квартира, о которой вы мечтали',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Помещение находится всего в пяти минутах ходьбы от метро',
  'Просторные, светлые комнаты будут радовать вас каждый день',
  'Стиральная машина, микроволновка, диван и утюг - всё в Вашем распоряжении!',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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
      tytle: getRandomArrayElement(TITLES),
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


const div = document.querySelector('div');
div.innerText = JSON.stringify(objects);
console.log(objects); // Временный вызов функции в консоль
