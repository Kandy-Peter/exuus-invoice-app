"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    creator: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    paymentDue: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    invoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    clientName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    clientEmail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    paymentTerms: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    senderAdress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    clientAdress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    items: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "invoices",
    sequelize: config_1.default
});
exports.default = Invoice;
