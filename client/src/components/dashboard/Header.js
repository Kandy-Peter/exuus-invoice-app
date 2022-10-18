import React, { useState } from "react";
import { useSelector } from "react-redux";
import iconPlus from "../../assets/images/icon-plus.svg";
import Dropdown from "./Dropdown";
import Modal from "../utils/Modal";
import { Button, Icon } from 'semantic-ui-react';

const Header = ({ openForm, setOpenForm }) => {
  const [showModal, setShowModal] = useState(false);
  const invoices = useSelector((state) => state.invoices);
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClick = () => {
    if (user?.result?.name) {
      setOpenForm(!openForm);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="col-start-2 col-end-3 flex justify-between items-center w-full mb-14">
        <h1 className="text-white text-3xl font-bold">
          Invoices
          <p className="text-xs font-extralight tracking-wide text-neutral">{`There are ${invoices.length} total invoices.`}</p>
        </h1>
        <div className="flex relative">
          <Dropdown />
          
          <div>
            <Button icon labelPosition='right' onClick={() => handleClick()}>
              Next
              <Icon name='right arrow' />
            </Button>
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
