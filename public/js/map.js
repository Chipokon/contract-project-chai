// Создание карты

ymaps.ready(init);
async function init() {
  const map = new ymaps.Map('map', {
    center: [59.930071893656645, 30.36145874053586],
    zoom: 2,
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  const response = await fetch('/map');
  const { point } = await response.json();

  // console.log(point);

  for (let j = 0; j < point.length; j += 1) {
    // let apart_address = data[i].apart_city + ', ' + data[i].apart_street + ', ' + data[i].apart_house
    const adressPlant = point[j].place;

    ymaps.geocode(adressPlant, { results: 1 }) // results - Максимальное количество возвращаемых результатов.
      .then((res) => {
        const firstGeoObject = res.geoObjects.get(0); // Выбор первый результат геокодирования.
        const coords = firstGeoObject.geometry.getCoordinates();

        console.log(coords);

        for (let i = 0; i < point.length; i += 1) {
          const temp = point[i].place;

          const placemark = new ymaps.Placemark(coords, {
            // let placemark = new ymaps.Placemark(point[i].place.split(','), {

            balloonContent: `
    <div class="ballon">
    <div class="balloon_address">${point[j].tittle}</div>
    <img class="balloon_image" src="${point[j].picture}">
    <div class="balloon_description">${point[j].description}</div>
    <a href="/teapage/${point[j].id}">ссылка</a>
    </div>
    `,
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1087/1087420.png',
            iconImageSize: [40, 40],
            iconImageOffset: [0, 0],
          }, {
          });
          map.geoObjects.add(placemark);
        }
      });
  }
}

// pukikaki
