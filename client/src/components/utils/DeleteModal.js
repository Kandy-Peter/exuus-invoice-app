import React from "react";
import { useDispatch } from "react-redux";
import { deleteInvoice } from "../../actions/invoices";
import { useNavigate } from "react-router-dom";
import { Divider, Button } from "semantic-ui-react";

const DeleteModal = ({ setShowModal, invoiceId }) => {
  let history = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="delete-modal centered">
        <div className="modal-container">
          {/*content*/}
          <div>
            {/*header*/}
            <div className="flex items-start justify-between rounded-t">
              <h3 className="text-2xl font-semibold text-white">
                Confirm Deletion
              </h3>
            </div>
            {/*body*/}
            <Divider />
            <div className="relative flex-auto">
              <p className="my-6 text-gray-300 text-xs leading-relaxed">
                Are you sure you want to delete invoice AU6645? This action
                <br />
                cannot be undone.
              </p>
            </div>
            <Divider />
            {/*footer*/}
            <Button
                onClick={() => setShowModal(false)}
                negative
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteInvoice(invoiceId));
                  setShowModal(false);
                  history("/");
                }}
                positive
              >
                Confirm
              </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
