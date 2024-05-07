import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./MyContext";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./img/logo-5.png";
import avatar from "./img/Avatar.jpg";
import "./style.css";
// import Sharelink from "./Sharelink";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutUser } = useContext(EventContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/");
  };

  const isRoomPath = /\/room/.test(location.pathname);

  if (isRoomPath) {
    return null;
  }

  return (
    <div className="bg-white p-2 vh-100 sidebar d-flex flex-column justify-content-between">
      <div className="wrapper">
        <div className="m-2">
          <img src={logo} alt="" className="me-3 fs-4" width="30" height="24" />
          <span className="brand-name fs-4">AstuEvents</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
          <a href="/dashboard" className="list-group-item py-2">
            <i className="bi bi-speedometer2 fs-5 me-3"></i>
            <span>Dashboard</span>
          </a>

          <a href="/dashboard" className="list-group-item py-2">
            <i className="bi bi-house fs-5 me-3"></i>
            <span>Home</span>
          </a>

          <a href="/events" className="list-group-item py-2">
            <i className="bi bi-table fs-5 me-3"></i>
            <span>Events</span>
          </a>

          <a href="/speakers" className="list-group-item py-2">
            <i className="bi bi-megaphone fs-5 me-3"></i>
            <span>Speakers</span>
          </a>
          <a href="/sponsors" className="list-group-item py-2">
            <i className="bi bi-globe fs-5 me-3"></i>
            <span>Sponsors</span>
          </a>

          <a href="/users" className="list-group-item py-2">
            <i className="bi bi-people fs-5 me-3"></i>
            <span>Users</span>
          </a>

          <a className="list-group-item py-2" onClick={handleLogout}>
            <i className="bi bi-power fs-5 me-3"></i>
            <span>Logout</span>
          </a>
        </div>
        {/* {isRoomPath && <Sharelink />} */}
      </div>
    </div>
  );
}

export default Sidebar;
