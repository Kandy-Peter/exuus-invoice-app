'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Invoices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            paymentDue: {
                type: Sequelize.INTEGER
            },
            invoiceDate: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            paymentTerms: {
                type: Sequelize.INTEGER
            },
            clientName: {
                type: Sequelize.STRING
            },
            clientEmail: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            senderAdress: {
                type: Sequelize.STRING
            },
            clientAdress: {
                type: Sequelize.STRING
            },
            items: {
                type: Sequelize.STRING
            },
            total: {
                type: Sequelize.INTEGER
            },
            creator: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Invoices');
    }
};
