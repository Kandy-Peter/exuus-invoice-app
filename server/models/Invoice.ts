import {Model, DataTypes} from 'sequelize';
import db from '../dialects/postgres/config/db.config.js';

interface InvoiceAttributes {
  id: string;
  description: string;
  creator: string;
  paymentDue: number;
  invoiceDate: string;
  clientName: string;
  clientEmail: string;
  paymentTerms: number;
  senderAdress: string;
  clientAdress: string;
  items: string;
  status: string;
  total: number;
}

class Invoice extends Model<InvoiceAttributes> {}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paymentDue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paymentTerms: {
  
      type: DataTypes.INTEGER,
      allowNull: false
    },
    senderAdress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientAdress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    items: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
  }
);

export default Invoice;

