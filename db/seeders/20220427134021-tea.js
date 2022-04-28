'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    await queryInterface.bulkInsert('People', [{
   name: 'John Doe',
   isBetaMember: false
  }], {});
    */
    // await queryInterface.bulkInsert('Teas', [{
    //   tittle: 'Shrek',
    //   place: 'roomOfYourMom',
    //   picture: '3hundredBuks',
    //   description: 'pukSren"k',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //  }], {});
    // },
    await queryInterface.bulkInsert('Teas', [
      {
        tittle: 'Shrek',
        place: '48.482324905906275,32.553264980392306',
        picture: 'https://mykaleidoscope.ru/uploads/posts/2021-09/1632418163_4-mykaleidoscope-ru-p-pechene-iz-shreka-krasivo-foto-4.jpg',
        description: 'pukSren"k',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'Noori',
        place: '41.71231766979974,44.743014091994716',
        picture: 'https://i.otzovik.com/objects/b/950000/944748.png',
        description: 'wdafegsarhbtdnjrymktu,yi.u,jmhn gbfvdcs`vf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'Greenfield',
        place: '51.8369880731825,71.12114873205643',
        picture: '3hunhttps://imgproxy.sbermarket.ru/imgproxy/size-500-500/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3NwcmVlL3Byb2R1Y3RzLzIzODg1MS9vcmlnaW5hbC82MDEyNl8zLmpwZz8xNjQwMDA0NzM5.jpgdredBuks',
        description: 'wdaefGSRWAEHTRJYTKULYIU;OUILKUTJYRTHEGRVDSCX ZCDSFBERTH',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'Lipton',
        place: '33.51316617964995,102.31641253598032',
        picture: 'https://upload.wikimedia.org/wikipedia/en/f/fc/LIPTON_PRIMARY_RGB_BMT.png',
        description: 'DWfewgrhtrjytkuyliu;oiuilyuktyjrthergwefcqsqdwvR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'Tess',
        place: '46.18629931877501,105.83203753598033',
        picture: 'https://cdn.europa-market.ru/files/uploads/thumbnail/products/202105/927982-458x400.jpg?v=1623072678',
        description: 'qsdwfegrhtjykrulitu;oyilkumjhngcyjer7ytry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
