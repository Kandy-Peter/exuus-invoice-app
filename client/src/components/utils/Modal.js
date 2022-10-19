import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";

const ModalComponent = ({ setShowModal }) => {
  return (
    <Modal
      open={true}
      size="tiny"
      onClose={() => setShowModal(false)}
      onOpen={() => setShowModal(true)}
    >
      <Modal.Header>Sign in to create an invoice</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Oops! You&apos;re not Logged In! 😔
            You need to be signed in to create an invoice. Please sign in or
            create an account.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Link to="/auth">
          <button className="ui button primary">Sign in</button>
        </Link>
        <Link to="/auth">
          <button className="ui button">Create account</button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
