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
            yield queryInterface.bulkInsert('Invoices', [{
                    paymentDue: 12,
                    invoiceDate: 23,
                    description: 'nothing',
                    paymentTerms: 22,
                    clientName: 'nothing',
                    clientEmail: 'nothing',
                    status: 'pending',
                    senderAdress: 'Kg123',
                    clientAdress: 'KG 56',
                    items: '34',
                    total: 345,
                    creator: 'kandy',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('Invoices', null, {});
        });
    }
};
