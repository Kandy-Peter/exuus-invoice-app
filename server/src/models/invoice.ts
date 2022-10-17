import {Model, InferAttributes,  InferCreationAttributes, CreationOptional, DataTypes, Sequelize} from 'sequelize';

const sequelize = new Sequelize();

class Invoice extends Model<InferAttributes<Invoice>, InferCreationAttributes<Invoice>> {
  declare id?: CreationOptional<number>;
  declare description: string;
  declare creator: string;
  declare paymentDue: number;
  declare invoiceDate: string;
  declare clientName: string;
  declare clientEmail: string;
  declare paymentTerms: number;
  declare senderAdress: string;
  declare clientAdress: string;
  declare items: string;
  declare status: string;
  declare total: number;
  declare readonly createdAt?: CreationOptional<Date>;
  declare readonly updatedAt?: CreationOptional<Date>;
}

Invoice.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    creator: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    paymentDue: {
      type: new DataTypes.NUMBER,
      allowNull: false,
    },
    invoiceDate: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    clientName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    clientEmail: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    paymentTerms: {
      type: new DataTypes.NUMBER,
      allowNull: false,
    },
    senderAdress: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    clientAdress: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    items: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    status: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    total: {
      type: new DataTypes.NUMBER,
      allowNull: false,
    },
  }, {
    tableName: 'invoices',
    sequelize
  }

);

export default Invoice;