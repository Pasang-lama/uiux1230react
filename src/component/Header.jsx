import React from "react";
import Logo from "../assets/logo.svg"

function Header() {
    return (
      <header>
      <div className="top-header py-2">
        <div className="container d-flex text-light justify-content-between">
          <div className="left">
          OUR PHONE NUMBER: +77 (756) 334 876
          </div>
          <ul className="d-flex gap-2 mb-0">
            <li><a href="">My account </a></li>
            <li><a href="">Cart </a></li>
            <li><a href="">Our location </a></li>
            <li><a href="">Contact us</a></li>
          </ul>
          </div>
       
      </div>
      <div className="navigation-bar container d-flex justify-content-between align-items-center">
        <ul className="d-flex gap-3">
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Pages</a></li>
          <li><a href="">Features</a></li>
        </ul>
        <a href=""><img src={Logo} alt="" /></a>

        <div className="right">
          <a href="">Login / Register</a>
        </div>
      </div>
      </header>
    );
}

export default Header;

