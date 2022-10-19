import React, { useState } from "react";
import CreateInvoice from "../invoice/CreateInvoice";
import Header from "./Header";
import Invoices from "../invoice/Invoices";

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="container centered">
      <Header openForm={openForm} setOpenForm={setOpenForm} />
      <Invoices />
      <CreateInvoice openForm={openForm} setOpenForm={setOpenForm} />
    </div>
  );
};

export default Dashboard;
