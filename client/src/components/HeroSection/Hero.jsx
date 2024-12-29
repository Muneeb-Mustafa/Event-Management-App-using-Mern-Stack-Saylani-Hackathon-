import React from "react";
import Carousel from "react-bootstrap/Carousel"; 
import ExampleCarouselImage from "./ExampleCarouselImage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import banner1 from "../../assets/Images/Home/banner1.jpg"
import banner2 from "../../assets/Images/Home/banner2.jpg"
import banner3 from "../../assets/Images/Home/banner3.jpg"
import banner4 from "../../assets/Images/Home/banner4.jpg"

const slides = [
  {
    src: banner1,
    subtitle: "Plan Unforgettable Events with Ease!",
    label: "Book Your Favorite Venue Today!",
    description: "Enjoy exclusive discounts on marquee bookings. Create memories that last a lifetime!",
  },
  {
    src: banner2,
    subtitle: "Celebrate Life's Special Moments!",
    label: "Tailored Event Solutions for You",
    description: "From weddings to corporate events, we have you covered. Explore our packages now!",
  },
  {
    src: banner3,
    subtitle: "Host Events Like Never Before!",
    label: "Top-Notch Event Management Services",
    description: "Seamless planning, unique themes, and exceptional service for any occasion.",
  },
  {
    src: banner4,
    subtitle: "Your Dream Event Starts Here!",
    label: "Let’s Bring Your Vision to Life",
    description: "Book now and enjoy 10% off your first event planning service.",
  },
];


function Hero() {
  return (
    <Carousel className="carousels">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage imageSrc={slide.src} /> 
          <Carousel.Caption className="carousel-caption-center">
            <p id="des">{slide.subtitle}</p>
            <h1>{slide.label}</h1>
            <p>{slide.description}</p>
            <Link to="/products">
              <button className="btn btn-danger">
                Book Now<FaArrowRight style={{ paddingLeft: "5px" }} />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
