const express = require('express');
const path = require('path')
const session = require('express-session');
// const FileStore = require('session-file-store')(session);


// Этот модуль позовляет хранить сессии в файлах вместо оперативной
// памяти. Тогда сессии не будут удаляться при перезагрузке сервера.
const FileStore = require('session-file-store')(session);

// Конфигурация сессий
const sessionConfig = {
  // будем хранить данные сессии в файлах, а не в оперативной памяти
  // тогда пользователей не будет выкидывать из сессии при перезагрузке сессии
  store: new FileStore(),
  name: 'sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'elbrus_bears', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    // path: '/count'
  },
};

module.exports = function expressConfig(app) {
  app.set('view engine', 'hbs');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json())
  app.use(express.static(path.join(__dirname, 'public')))
  // подключаем миддлварку сессий
  app.use(session(sessionConfig));
};




// module.exports = function config(app) {
  
//   // const sessionConfig = {
//   //   // будем хранить данные сессии в файлах, а не в оперативной памяти
//   //   // тогда пользователей не будет выкидывать из сессии при перезагрузке сессии
//   //   store: new FileStore(),
//   //   name: 'sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
//   //   secret: process.env.SESSION_SECRET ?? 'elbrus_bears', // Секретное слово для шифрования, может быть любым
//   //   resave: false, // Пересохранять ли куку при каждом запросе
//   //   saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
//   //   cookie: {
//   //     maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
//   //     httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
//   //     // path: '/count'
//   //   },
//   // };
  
//   app.set('view engine', 'hbs');
//   app.use(express.urlencoded({ extended: true }));
//   app.use(express.json())
//   app.use(express.static(path.join(__dirname, 'public')))
//   // подключаем миддлварку сессий
//   app.use(session(sessionConfig));
// };

