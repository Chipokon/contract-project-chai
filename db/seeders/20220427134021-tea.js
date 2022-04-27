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
    tittle: 'Shrek',
    place: 'roomOfYourMom',
    picture: '3hundredBuks',
    description: 'pukSren"k',
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
