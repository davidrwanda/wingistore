import React from "react";
import "../styles/Header.scss";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <div className="header_container">
      <div className="logo">
        <h2>WengiStore</h2>
      </div>
      <div className="avatar">
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default Header;
