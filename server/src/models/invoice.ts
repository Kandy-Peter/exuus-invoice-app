import { Model, DataTypes } from "sequelize";
import db from '../config/config';

interface InvoiceAttributes {
  id: number;
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

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: number;
  public description!: string;
  public creator!: string;
  public paymentDue!: number;
  public invoiceDate!: string;
  public clientName!: string;
  public clientEmail!: string;
  public paymentTerms!: number;
  public senderAdress!: string;
  public clientAdress!: string;
  public items!: string;
  public status!: string;
  public total!: number;
}

Invoice.init( {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
}, {
  tableName: "invoices",
  sequelize: db
});

export default Invoice;
