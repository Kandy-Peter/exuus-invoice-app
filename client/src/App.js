import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getInvoices } from "./actions/invoices";
import Sidebar from "./components/layouts/Sidebar";

import Dashboard from './components/dashboard/Dashboard';

import CreateInvoice from './components/invoice/CreateInvoice';
import InvoiceDetails from './components/invoice/InvoiceDetails';
import Auth from './components/authForm/Auth';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <div className="app-container">
        <Sidebar />
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateInvoice />} />
            <Route path="/invoice/:id" element={<InvoiceDetails />} />
            <Route path="/auth" element={ user?.message ? <Navigate to="/" /> : <Auth /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
