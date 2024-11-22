import React from "react";
import menuImage from "../assets/images/menu.jpg";

function Menu() {
  return (
    <div className="container py-5">
      <h1 className="text-center">Our Menu</h1>
      <img src={menuImage} alt="Menu" className="img-fluid rounded mx-auto d-block my-4" />
      <p className="text-center">
        Explore our delicious menu with a variety of appetizers, main courses,
        and desserts that will delight your taste buds.
      </p>
    </div>
  );
}

export default Menu;
