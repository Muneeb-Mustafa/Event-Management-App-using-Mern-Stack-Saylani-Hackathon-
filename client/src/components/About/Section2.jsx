import React from "react";
import banner1 from "../../assets/Images/Home/banner1.jpg";

const Section2 = () => {
  return (
    <div className="container sect-2">
      <div className="row g-4"> {/* Added Bootstrap's gap class g-4 for spacing */}
        <div className="col-md-6">
          <img
            src={banner1}
            alt="Event Planning Made Easy"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column align-items-md-start" style={{ paddingLeft: "50px"}}>
          <h3 style={{ fontFamily: "Playfair-Display", fontSize: "50px" }} className="mb-3">
            Plan Your Event in Style
          </h3>
          <p className="mt-3 mb-4">
            Transform your gatherings into memorable moments with our event planning services.
            From themes to execution, we ensure every detail is perfect. Discover how we make
            events extraordinary with our unique touch and expertise.
          </p>
          <button className="btn1">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
