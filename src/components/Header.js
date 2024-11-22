import React from "react";
import logo from "../assets/icons/Logo.png";

function Header() {
  return (
    <header className="bg-white py-3 border-bottom">
      <div className="container text-center">
        <img src={logo} alt="Little Lemon Logo" className="img-fluid" style={{ maxHeight: "60px" }} />
      </div>
    </header>
  );
}

export default Header;
