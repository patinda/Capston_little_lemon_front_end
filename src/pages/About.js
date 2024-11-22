import React from "react";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={aboutImage} alt="About Us" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1>About Little Lemon</h1>
          <p>
            Little Lemon is a family-owned restaurant offering mouthwatering
            dishes made with love and care. Our passion for food drives us to
            deliver the best dining experience to our customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
