'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('Invoices', {
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('Invoices');
        });
    }
};
