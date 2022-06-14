import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { GetUserNameFromToken } from "../Utils/token";
const Header = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  const handleLogout = () => {

    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div>
      <div
        className="nav"
        style={{
          height: "50px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <div className="nav-left" onClick={handleClick}>
          <span style={{ fontSize: "30px", cursor: "pointer" }}>User Logger For U</span>
        </div>
        <div
          className="nav-right"
          style={{ alignItems: "center", justifyContent: "flex-end" }}
        >
          <span style={{ fontSize: "15px", display: "flex", alignItems: "center" }}>
            <AccountCircleIcon />
            {GetUserNameFromToken()}&nbsp;&nbsp;&nbsp;
          </span>
          <divn onClick={handleLogout}>
            <span
              style={{
                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                padding: "5px",
              }}
              onCLick={handleLogout}
            >
              Logout
            </span>
            &nbsp;&nbsp;
          </divn>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
