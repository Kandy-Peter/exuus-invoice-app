import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileModal from "../utils/ProfileModal";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import decode from "jwt-decode";
import { Button } from "semantic-ui-react";

const Sidebar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  return (
    <aside className="sidebar">
      <Link
        to="/"
      >
        <Button icon='home' circular color="white" />
      </Link>
      <div className="logging-btn">
        <div className=""></div>
        {user ? (
          <ProfileModal logout={logout} user={user} />
        ) : (
          <Button
            onClick={() => {
              history("/auth");
            }}
            circular
            icon="user"
            color="white"
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
