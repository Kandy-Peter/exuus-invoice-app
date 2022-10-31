import {Model, DataTypes} from 'sequelize';
import db from '../dialects/postgres/config/db.config.js';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> {
  [x: string]: any;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize: db,
  }
);

export default User;
