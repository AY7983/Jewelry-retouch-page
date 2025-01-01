import React from "react";
import "../styles/Works.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2 className="hero-title">How It Works</h2>
      <div className="hero-content">
     <div className="img-works">
     <img
          src="./images/ph-5.webp" // Replace with your jewelry image URL
          alt="Jewelry"
          className="hero-image"
        />
     </div>
        <div className="hero-text-box">
          <p className="hero-description">
            "Getting started is simple! Upload your jewelry images through our
            secure platform and select the plan that best suits your
            needs—Basic, Pro, or Premium. Once selected, our experts will
            meticulously retouch your images, enhancing every detail to
            perfection. Finally, download your polished images from your
            account or email, ready to showcase with confidence!"
          </p>
          <button className="hero-button">Our Process</button>
        </div>
      </div>
      <div className="steps">
        <button className="step-button">Upload Your Images</button>
        <button className="step-button">Select Your Plan</button>
        <button className="step-button">We Work Our Magic</button>
        <button className="step-button">Download and Shine</button>
      </div>
    </section>
  );
};

export default HeroSection;
