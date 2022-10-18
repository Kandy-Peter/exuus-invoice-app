import React, { useState } from "react";
import CreateInvoice from "../invoice/CreateInvoice";
import Header from "./Header";
import Invoices from "../invoice/Invoices";
import { Container, Divider } from 'semantic-ui-react'

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <Container className="">
      <Header openForm={openForm} setOpenForm={setOpenForm} />
      <Invoices />
      <CreateInvoice openForm={openForm} setOpenForm={setOpenForm} />
    </Container>
  );
};

export default Dashboard;
