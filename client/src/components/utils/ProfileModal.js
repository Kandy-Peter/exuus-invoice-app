import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { Button, Icon } from "semantic-ui-react";

const ProfileModal = ({ logout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useNavigate();

  return (
    <div className="relative block">
      {user && (
        <div className="m-2">
          <Avatar
            name={user.result.name}
            size="50"
            round={true}
            onClick={() => setIsOpen(!isOpen)}
            className=""
          />
        </div>
      )}
      {isOpen && (
        <ul
          aria-label="sub-menu"
        >
          <li>
            <Button
              onClick={() => {
                logout();
                setIsOpen(!isOpen);
                history("/auth");
              }}
              icon
              labelPosition="left"
              className="logout-btn"
            >
              <Icon name="log out" />
              Logout
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileModal;
