import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LoactionOnOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import ShoppinCartOutlinedIcons from "@material-ui/icons/ShoppingBasketOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header-logo"
          alt="amazon"
        />
      </Link>
      <div className="header-option" style={{ marginRight: "-10px" }}>
        <LoactionOnOutlinedIcon />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select Your Address</span>
      </div>
    </nav>
  );
};

export default Header;
