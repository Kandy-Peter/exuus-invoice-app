'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
                id: 1,
                name: 'John Doe',
                email: "kandy@gmail.com",
                password: "123456",
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
