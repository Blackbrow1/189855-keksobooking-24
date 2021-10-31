const generatingSimilarElements = function(advert) {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const template = popupTemplate.cloneNode(true);

  const popupTitle = template.querySelector('.popup__title');
  popupTitle.textContent = advert.offer.title;

  const popupTextAddress = template.querySelector('.popup__text--address');
  popupTextAddress.textContent = advert.offer.address;

  const popupTextPrice = template.querySelector('.popup__text--price');
  popupTextPrice.textContent = advert.offer.price;

  const popupType = template.querySelector('.popup__type');
  popupType.textContent = advert.offer.type;

  const popupTextRoom = template.querySelector('.popup__text--rooms');
  popupTextRoom.textContent = advert.offer.rooms;

  const popupTextGuests = template.querySelector('.popup__text--guests');
  popupTextGuests.textContent = advert.offer.guests;

  const popupTextCheckout = template.querySelector('.popup__text--checkout');
  popupTextCheckout.textContent = advert.offer.checkout;

  const popupTextCheckin = template.querySelector('.popup__text--checkin');
  popupTextCheckin.textContent = advert.offer.checkin;

  const popupFeatures = template.querySelector('.popup__features');
  popupFeatures.textContent = advert.offer.features;

  const popupDescription = template.querySelector('.popup__description');
  popupDescription.textContent = advert.offer.description;

  const popupPhotos = template.querySelector('.popup__photos');
  popupPhotos.src = advert.offer.photos;

  const popupAvatar = template.querySelector('.popup__avatar');
  popupAvatar.src = advert.author.avatar;

  const mapCanvas = document.querySelector('#map-canvas');
  mapCanvas.appendChild(template);

  return template;
};

export {generatingSimilarElements};
