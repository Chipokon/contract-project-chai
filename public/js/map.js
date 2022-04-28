// Создание карты 


ymaps.ready(init)
async function init() {
  let map = new ymaps.Map('map', {
    center: [59.930071893656645, 30.36145874053586],
    zoom: 2
  });

   //------------Получение данных о квартирах из БД с сервера------------
   const response = await fetch('/map')
   const {point} = await response.json()
   console.log(point[0]);

  for(let i = 0;i<point.length;i+=1){
  let temp = point[i].place

  let placemark = new ymaps.Placemark(point[i].place.split(','), {
    balloonContent: `
    <div class="ballon">
    <div class="balloon_address">${point[i].tittle}</div>
    <div class="balloon_contacts">
    <a href="">ссылка</a>
    <button>Кнопка</button>
    </div>
    </div>
    `
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1087/1087420.png',
    iconImageSize: [30, 30],
    iconImageOffset: [0, 0]
  });
  map.geoObjects.add(placemark);
  

}


}
  // let placemark = new ymaps.Placemark([59.930071893656645, 30.36145874053586], {
  //   balloonContentHeader: 'Хедер балуна',
  //   balloonContentBody: 'Боди балуна',
  //   balloonContentFooter: 'Подвал',
  // }, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1087/1087420.png',
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [0, 0]
  // });


  //ПРИМЕРНЫЙ КОД ДЛЯ ИТЕРАЦИИ ИКОНОК НА КАРТЕ
  // for (let i = 0; i < placemarkArray.length; i++) {
  //   let placemark1 = new ymaps.Placemark([coordX[i], coordY[i]], {
  //     balloonContent: `
  //     <div class="ballon">
  //     <div class="balloon_address">Метка тут!</div>
  //     <div class="balloon_contacts">
  //     <a href="">ссылка</a>
  //     <button>Кнопка</button>
  //     </div>
  //     </div>
  //     `
  //   }, {
  //     iconLayout: 'default#image',
  //     iconImageHref: `${imgIcon[i]}`,
  //     iconImageSize: [30, 30],
  //     iconImageOffset: [0, 0]
  //   });
  // } 


  // let placemark1 = new ymaps.Placemark([59.930071893656645, 30.36145874053586], {
  //   balloonContent: `
  //   <div class="ballon">
  //   <div class="balloon_address">Метка тут!</div>
  //   <div class="balloon_contacts">
  //   <a href="">ссылка</a>
  //   <button>Кнопка</button>
  //   </div>
  //   </div>
  //   `
  // }, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1087/1087420.png',
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [0, 0]
  // });

  // let placemark2 = new ymaps.Placemark([40.194631629086146, 44.53975324745722], {
  //   balloonContent: `
  //   <div class="ballon">
  //   <div class="balloon_address">Армянский чай</div>
  //   <div class="balloon_contacts">
  //   <a href="">ссылка</a>
  //   <button>Кнопка</button>
  //   </div>
  //   </div>
  //   `
  // }, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://cdn-icons-png.flaticon.com/128/2722/2722453.png',
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [0, 0]
  // });
  // let placemark3 = new ymaps.Placemark([33.828418554784854,113.61858289846258], {
  //   balloonContent: `
  //   <div class="ballon">
  //   <div class="balloon_address">Пиздоглазые любители чая</div>
  //   <div class="balloon_contacts">
  //   <a href="">ссылка</a>
  //   <button>Кнопка</button>
  //   </div>
  //   </div>
  //   `
  // }, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/633/633652.png',
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [0, 0]
  // });
  // let placemark4 = new ymaps.Placemark([22.87233444881762,81.9066789311036], {
  //   balloonContent: `
  //   <div class="ballon">
  //   <div class="balloon_address">Чай!Индийский чай!</div>
  //   <div class="balloon_contacts">
  //   <a href="">ссылка</a>
  //   <button id=1>Кнопка</button>
  //   </div>
  //   </div>
  //   `
  // }, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://cdn-icons.flaticon.com/png/128/2238/premium/2238614.png?token=exp=1651135507~hmac=7fb0727b7ed38bdf6de67f7afc0e0bf9',
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [0, 0]
  // });

  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  // map.controls.remove('searchControl'); // удаляем поиск
  // map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

//   // map.geoObjects.add(placemark);
//   map.geoObjects.add(placemark1);
//   map.geoObjects.add(placemark2);
//   map.geoObjects.add(placemark3);
//   map.geoObjects.add(placemark4);
// }

  // ----------------Поиск координат------------------
  // for(let i = 0; i < data.length; i += 1){
  //   let apart_address = data[i].apart_city + ', ' + data[i].apart_street + ', ' + data[i].apart_house

  //   ymaps.geocode(apart_address, {results: 1})                      // results - Максимальное количество возвращаемых результатов.
  //   .then(function (res) {
  //       let firstGeoObject = res.geoObjects.get(0),                         // Выбор первый результат геокодирования.
  //       coords = firstGeoObject.geometry.getCoordinates() 

//Инициализация карты 