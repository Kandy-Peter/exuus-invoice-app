"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize();
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    creator: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    paymentDue: {
        type: new sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    invoiceDate: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    clientName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    clientEmail: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    paymentTerms: {
        type: new sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    senderAdress: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    clientAdress: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    items: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    status: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    total: {
        type: new sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    tableName: 'invoices',
    sequelize
});
exports.default = Invoice;
