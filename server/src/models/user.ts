import {Sequelize, Model, InferAttributes,  InferCreationAttributes, CreationOptional, DataTypes} from 'sequelize';

const sequelize = new Sequelize();

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id?: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;
  declare readonly createdAt?: CreationOptional<Date>;
  declare readonly updatedAt?: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),

    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    tableName: 'users',
    sequelize
  }
);

export default User;