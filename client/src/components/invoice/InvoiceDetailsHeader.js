import React, { useState } from "react";
import CreateInvoice from "./CreateInvoice";
import { useDispatch } from "react-redux";
import { paidInvoice } from "../../actions/invoices";
import DeleteModal from "../utils/DeleteModal";
import { capitalizeFirstLetter } from "../utils/utils";
import { Segment } from "semantic-ui-react";

const InvoiceDetailsHeader = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  let badgeClass = "";
  let color = "";
  switch (data[0]?.status) {
    case "pending":
      badgeClass = "pending";
      color = "orange";
      break;
    case "paid":
      badgeClass = "paid";
      color = "green";
      break;
    default:
      badgeClass = "draft";
      color = "blue";
  }
  if (data.length > 0) {
    return (
      <Segment color={color} className="invoice-skeleton">
          <div className="item-header">
            <small className="text-neutral text-xs">Status:</small>
            <div
              className={`${badgeClass}`}
            >
              <small>{capitalizeFirstLetter(data[0]?.status)}</small>
            </div>
          </div>
          {user?.result?._id === data[0]?.creator ? (
            <div className="md:flex hidden">
              <button
                className="text-white text-xs font-bold px-6 py-4 rounded-full transition bg-borderOne hover:bg-gray-200 hover:text-borderOne"
                onClick={() => setOpenForm(!openForm)}
              >
                Edit
              </button>
              <button
                className="text-white text-xs font-bold px-6 py-4 rounded-full bg-buttonOne hover:bg-red-400 transition mx-3"
                onClick={() => setShowModal(!showModal)}
              >
                Delete
              </button>
              {data[0].status !== "paid" && (
                <button
                  className="text-white text-xs font-bold bg-secondaryTwo px-6 py-4 rounded-full hover:bg-purple-500 transition"
                  onClick={() => dispatch(paidInvoice(data[0]._id))}
                >
                  Mark As Paid
                </button>
              )}
            </div>
          ) : null}
        {showModal && (
          <DeleteModal
            invoiceId={data[0]._id}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        {openForm ? (
          <CreateInvoice
            invoice={data[0]}
            openForm={openForm}
            setOpenForm={setOpenForm}
          />
        ) : null}
      </Segment>
    );
  }
  return null;
};

export default InvoiceDetailsHeader;
