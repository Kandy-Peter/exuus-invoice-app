import {Model, DataTypes} from 'sequelize';
import db from '../dialects/postgres/config/db.config.js';

interface InvoiceAttributes {
  id: string;
  description: string;
  creator: string;
  paymentDue: string;
  invoiceDate: string;
  clientName: string;
  clientEmail: string;
  paymentTerms: number;
  status: string;
  total: number;
  streetAddress: string;
  city : string;
  postcode: string;
  country: string;
  clientStreetAddress: string;
  clientCity : string;
  clientPostcode: string;
  clientCountry: string;
  invoices: any;
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
      allowNull: false,
    },
    paymentDue: {
      type: DataTypes.DATE,
      allowNull: false
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
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
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientStreetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientPostcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientCountry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoices: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    }
  },
  {
    sequelize: db,
  }
);

export default Invoice;
