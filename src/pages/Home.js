import React from "react";
import heroImage from "../assets/images/hero.jpg";

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Welcome to Little Lemon</h1>
          <p>Discover the best dishes in town with fresh, locally sourced ingredients.</p>
        </div>
        <div className="col-md-6">
          <img src={heroImage} alt="Hero" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Home;
