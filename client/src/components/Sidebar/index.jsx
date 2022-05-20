import React from "react";
import "./style.css";
import Avatar from "@mui/material/Avatar";
import { Link } from 'react-router-dom'

function index({ user }) {
  return (
    <div className="sidebar__box">
      <div className="sidebar__box__header">
        <h1>Dashboard</h1>
        <Avatar alt="Remy Sharp" src="" sx={{ width: 100, height: 100 }} />
        <p>{user.name}</p>
        <p>{user?.isAdmin ? "ADMIN" : "DONOR"}</p>
      </div>
      {user.isAdmin && (
        <div className="sidebar__box__content">
          <ul>
            <li>
              <Link to="/dashboard/events">
                <i className="fas fa-tachometer-alt"></i>
                <span>Events</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default index;
