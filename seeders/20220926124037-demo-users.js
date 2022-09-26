'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [{
      id: "kty323Fw",
       name: 'John Doe',
       email: "kandy@gmail.com",
       password: "123456",
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
