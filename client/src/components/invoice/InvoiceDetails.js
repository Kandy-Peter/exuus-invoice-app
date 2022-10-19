import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/images/icon-arrow-left.svg";
import InvoiceDetailsHeader from "./InvoiceDetailsHeader";
import { useSelector } from "react-redux";
import InvoiceCardDetails from "./InvoiceCardDetails";
import InvoiceFooter from "./InvoiceFooter";

const InvoiceDetails = (props) => {
  const [invoiceData, setInvoiceData] = useState([]);
  const { id } = useParams();

  const invoice = useSelector((state) =>
    state.invoices.find((invoice) => invoice._id === id)
  );

  useEffect(() => {
    if (invoice) {
      setInvoiceData([invoice]);
    }
  }, [id, invoice]);

  return (
    <div className="item-container">
      <Link to="/" className="back-link">
        <img src={backIcon} alt="back" /> Go back
      </Link>
      <InvoiceDetailsHeader data={invoiceData} />
      <InvoiceCardDetails data={invoiceData} />
      <InvoiceFooter data={invoiceData} />
    </div>
  );
};

export default InvoiceDetails;
