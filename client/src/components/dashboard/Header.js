import React, { useState } from "react";
import { useSelector } from "react-redux";
import DropdownButton from "./Dropdown";
import ModalComponent from "../utils/Modal";
import { Button, Icon, Header, Divider} from 'semantic-ui-react';

const HeaderComponent = ({ openForm, setOpenForm }) => {
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
      <div className="header">
        <Header as='h2'>
          <Icon name='money' />
          <Header.Content>
            My invoices
            <Header.Subheader>{`There are ${invoices.length} total invoices.`}</Header.Subheader>
          </Header.Content>
        </Header>
        <Divider />
        <div className="subheader">
            <DropdownButton />
            <Button icon primary labelPosition='right' onClick={() => handleClick()}>
              New Invoice
              <Icon name='right plus' />
            </Button>
        </div>
      </div>
      {showModal && <ModalComponent setShowModal={setShowModal} />}
    </>
  );
};

export default HeaderComponent;
