import React from "react";
import "../styles/Header.scss";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header_container">
      <div className="logo">
        <h2 onClick={() => navigate("/")}>WingiStore</h2>
      </div>
      <div className="avatar">
        <Avatar onClick={() => navigate("/manage")}></Avatar>
      </div>
    </div>
  );
};

export default Header;
