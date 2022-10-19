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
      <Modal.Header>Sign in to create an invoice</Modal.Header
      ><Modal.Content>
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
    
    // <>
    //   <div
    //     className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    //     onClick={() => setShowModal(false)}
    //   >
    //     <div className="relative w-auto my-6 mx-auto max-w-2xl">
    //       {/* content */}
    //       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primaryOne p-10 outline-none focus:outline-none">
    //         <small
    //           className="absolute top-3 right-3 font-bold text-base cursor-pointer text-white"
    //           onClick={() => setShowModal(false)}
    //         >
    //           X
    //         </small>
    //         {/* body */}
    //         <div className="relative flex-auto">
    //           <p className="my-6 text-white text-center text-lg leading-relaxed">
    //             Oops! You&apos;re not Logged In! 😔
    //           </p>
    //           <p className="my-6 text-gray-300 text-center text-sm leading-relaxed">
    //             Please{" "}
    //             <Link to="/auth" className="underline text-purple-500">
    //               Log In
    //             </Link>{" "}
    //             first to create an Invoice
    //           </p>
    //         </div>
    //         {/* footer */}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="fixed inset-0 z-40 bg-white bg-opacity-10"></div>
    // </>
  );
};

export default ModalComponent;
