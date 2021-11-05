import {generatingSimilarElements} from './generating-similar-elements.js';
import {adForm, adFormHeader, adFormElement, mapFilters, mapFiltersSelect, mapFiltersFieldset} from './form.js';

const map = L.map('map-canvas')
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    adFormHeader.disabled = false;
    adFormElement.disabled = false;
    mapFilters.classList.remove('ad-form--disabled');
    mapFiltersSelect.disabled = false;
    mapFiltersFieldset.disabled = false;
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const markerGroup = L.layerGroup();
const createMarkerFromObject = (object) => {
  markerGroup.addTo(map);
  const lat = object.location.lat;
  const lng = object.location.lng;
  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const pinMarker = L.marker({
    lat,
    lng,
  },
  {
    icon: pinIcon,
  });
  pinMarker.addTo(markerGroup).
    bindPopup(() => generatingSimilarElements(object),
      {
        keepInView: true,
      });
};

const createMarkers = (objects) => {
  objects.forEach((item) => {
    createMarkerFromObject(item);
  });
};

export {createMarkers, marker, mainPinIcon};
