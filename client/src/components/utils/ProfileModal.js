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
        <div className="profile-btn">
          <Avatar
            name={user.data.name}
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
          className="logout-btn"
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
              className="lgt-btn"
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
