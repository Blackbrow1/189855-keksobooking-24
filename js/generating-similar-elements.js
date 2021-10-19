const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const template = popupTemplate.cloneNode(true);
const objectFirst = objects[0];

const generatingSimilarElements = function () {
  const popupTitle = template.querySelector('.popup__title');
  popupTitle.textContent = objectFirst.offer.title;

  const popupTextAddress = template.querySelector('.popup__text--address');
  popupTextAddress.textContent = objectFirst.offer.address;

  const popupTextPrice = template.querySelector('.popup__text--price');
  popupTextPrice.textContent = objectFirst.offer.price;

  const popupType = template.querySelector('.popup__type');
  popupType.textContent = objectFirst.offer.type;

  const popupTextRoom = template.querySelector('.poput__text--rooms');
  popupTextRoom.textContent = objectFirst.offer.rooms;

  const popupTextGuests = template.querySelector('.popup__text--guests');
  popupTextGuests.textContent = objectFirst.offer.guests;

  const popupTextCheckout = template.querySelector('.popup__text--checkout');
  popupTextCheckout.textContent = objectFirst.offer.checkout;

  const popupTextCheckin = template.querySelector('.popup__text--checkin');
  popupTextCheckin.textContent = objectFirst.offer.checkin;

  const popupFeatures = template.querySelector('.popup__features');
  popupFeatures.textContent = objectFirst.offer.features;

  const popupDescription = template.querySelector('.popup__description');
  popupDescription.textContent = objectFirst.offer.description;

  const popupPhotos = template.querySelector('.popup__photos');
  popupPhotos.src = objectFirst.offer.photos;

  const popupAvatar = template.querySelector('.popup__avatar');
  popupAvatar.src = objectFirst.author.avatar;

  const mapCanvas = document.querySelector('#map-canvas');
  mapCanvas.appendChild(template);
};

generatingSimilarElements();

export {generatingSimilarElements};
