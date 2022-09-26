'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Invoices', [{
    paymentDue: 12,
    invoiceDate: 23,
    description: 'nothing',
    paymentTerms: 'nothing',
    clientName:   'nothing',
    clientEmail: 'nothing',
    status: 'pending',
    senderAdress: 'Kg123',
    clientAdress: 'KG 56',
    items: '34',
    total: 345,
    creator: 'kandy',
   }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Invoices', null, {});
  }
};
