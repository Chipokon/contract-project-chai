'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    await queryInterface.bulkInsert('People', [{
   name: 'John Doe',
   isBetaMember: false
  }], {});
    */
  await queryInterface.bulkInsert('Teas', [{
    tittle: 'Улун',
    place: 'Тайвань',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mi_Lan_Xiang_Oolong_Tea_cropped.jpg/170px-Mi_Lan_Xiang_Oolong_Tea_cropped.jpg',
    description: 'Полуферментированный чай, занимающий среднее положение между черным и зеленым. По степени окисления делится на сильноферментированные (ближе к черному чаю) и слабоферментированные (ближе к зеленому) сорта. Улуны дают настой от светло-желтого до светло-коричневого цвета, вкус насыщенный и яркий.',
    createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    tittle: 'Пуэр',
    place: 'Тайвань',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Puer1.JPG/220px-Puer1.JPG',
    description: 'Постферментированный чай, который «дозревает» после обычной ферментации естественным (шен пуэр) или ускоренным (шу пуэр) образом. Окончательная ферментация происходит благодаря специальным микроорганизмам (aspergillus acidus). Темные пуэры становятся красно-коричневым настоем, иногда имеют землистый привкус. Светлые пуэры дают разный настой – от желто-зеленого до светло-коричневого.',
    createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    tittle: 'Ройбуш',
    place: 'ЮАР',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Rooibos_geschnitten.jpg/200px-Rooibos_geschnitten.jpg',
    description: 'Традиционный африканский напиток, который получают из стеблей, листьев и побегов кустарника аспалатуса линейного. По виду листья этого растения похожи на мелкие иголки. Чайный напиток, приготовленный на его основе, не содержит кофеин и считается полезным даже для детей. Обладает нежным сладковатым вкусом.',
    createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    tittle: 'Мате',
    place: 'Парагвай',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mate_en_calabaza.jpg/240px-Mate_en_calabaza.jpg',
    description: 'Этнический чай из Парагвая, его создают из листьев падуба парагвайского. Очень популярен в Южной Америке, обладает тонизирующим действием, поскольку содержит кофеин (матеин). Традиционно пьется из специальной посуды, сделанной из высушенной тыквы, с помощью металлической трубочки. Имеет светло-желтый цвет и травянистый аромат.',
    createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    tittle: 'Каркаде',
    place: 'Тайланд',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Driedhibiscus.jpg/220px-Driedhibiscus.jpg',
    description: 'Чай, который часто называют красным из-за яркого цвета настоя. Готовится из цветов гибискуса, не содержит кофеин, зато имеет в своем составе много витамина С. Можно употреблять детям.',
    createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    tittle: 'Алекс Чай',
    place: 'Армения',
    picture: 'https://images.wbstatic.net/big/new/16480000/16482990-1.jpg',
    description: 'Чай, который Вы сможете купить только у моего друга Алекса, он самый лучший из армян и гарантирует качество данного чая. Чай обладает дурманящими, ароматными нотками, способными свести Вас с ума! Делайте предзаказ!!!',
    createdAt: new Date(),
    updatedAt: new Date(),
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
