import React from "react";
import section3 from "../../assets/Images/Home/section3.jpg";

const Section3 = () => {
  return (
    <div className="container sect-3">
      <div className="row">
        <div className="col-md-6">
          <img
            src={section3}
            alt="Event Planning Made Easy"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="sec-3 col-md-6 d-flex justify-content-center align-items-center flex-column align-items-md-start">
          <h3 className="mb-lg-3">Unforgettable Events Await</h3>
          <p className="mt-lg-3 mb-lg-4">
            Make your special occasions extraordinary with our premium event services.
            From stunning decorations to seamless coordination, we offer everything
            you need to host an unforgettable celebration. Explore our exclusive packages
            and make your event planning stress-free. Don't wait—start planning your dream
            event today!
          </p>
          <button className="btn1">Explore Services</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
