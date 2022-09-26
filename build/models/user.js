"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize();
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: 'users',
    sequelize
});
exports.default = User;
