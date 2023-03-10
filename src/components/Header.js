import React from "react";
import "../styles/Header.scss";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header_container">
      <div className="logo">
        <h2 onClick={() => navigate("/")}>WingiStore</h2>
      </div>
      <div className="avatar" onClick={() => navigate("/manage")}>
        <SettingsIcon></SettingsIcon>
      </div>
    </div>
  );
};

export default Header;
