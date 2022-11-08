import React, { useState } from "react";
import DeleteModal from "../utils/DeleteModal";
import CreateInvoice from "./CreateInvoice";
import { useDispatch } from "react-redux";
import { paidInvoice } from "../../actions/invoices";
import InvoicePDF from "../invoicePDF/InvoicePDF";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Button, Icon } from "semantic-ui-react";

const InvoiceFooter = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.data?.id;

  return (
    <div className="item-footer">
      <Button
        onClick={async () => {
          const doc = <InvoicePDF data={data[0]} />;
          const asPdf = pdf([]);
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          saveAs(blob, "invoice.pdf");
        }}
        icon
        labelPosition="left"
        primary
      >
        <Icon name="download" />
        Download Invoice
      </Button>
      {user?.data && id === data[0]?.creator ? (
        <>
          <Button
            onClick={() => setOpenForm(!openForm)}
            icon
            labelPosition="left"
            positive
          >
            <Icon name="edit" />
            Edit
          </Button>
          <Button
            icon
            labelPosition="left"
            onClick={() => setShowModal(!showModal)}
            negative
          >
              <Icon name="trash" />
              Delete
          </Button>
        
          {data[0].status !== "paid" && (
            <button
              className="ui positive basic button"
              onClick={() => dispatch(paidInvoice(data[0].id))}
            >
              Mark As Paid
            </button>
          )}
        </>
      ) : null}
      {showModal && (
        <DeleteModal
          invoiceId={data[0].id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {openForm && (
        <CreateInvoice
          invoice={data[0]}
          openForm={openForm}
          setOpenForm={setOpenForm}
        />
      )}
    </div>
  );
};

export default InvoiceFooter;
