import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import { useCart } from "../../context/CartContext";
import { message } from "antd";

const Products = () => {
  const [services, setServices] = useState([]);
  const { cart, setCart } = useCart();

  // Fetch event services
  const fetchServices = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/service/get-services`);
      setServices(data.services);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle adding services to cart
  const handleCart = (service) => {
    const exists = cart.find((item) => item._id === service._id);
    if (exists) {
      message.info("Service already added to the cart");
    } else {
      setCart([...cart, service]);
      localStorage.setItem("cart", JSON.stringify([...cart, service]));
      message.success("Service added to cart successfully");
    }
  };

  return (
    <div className="container pt-5 pb-5 text-center trending-services">
      <h1 className="mb-3" style={{ fontFamily: "Playfair-Display", fontSize: "46px" }}>
        Upcoming Events
      </h1>
      <p>
        Discover our most popular event services, including venue rentals, decoration packages,
        catering, and more. Make your next event unforgettable!
      </p>
      <div className="row justify-content-center">
        {services.slice(0, 3).map((service) => (
          <div key={service._id} className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card" style={{ width: "100%", marginLeft: "10px" }}>
              <div className="card-body">
                <img
                  src={`${API_URL}/api/service/service-photo/${service._id}`}
                  className="card-img-top"
                  alt={service.name}
                />
                <h5 className="card-title mt-3">{service.name}</h5>
                <p className="card-text">
                  {service.description.length > 100
                    ? service.description.substring(0, 100) + "..."
                    : service.description}
                </p>
                <p className="card-text">Starting Price: ${service.price}</p>
                <Link to={`/service/${service.slug}`} className="btn btn-primary" style={{ marginRight: "8px" }}>
                  View Details
                </Link>
                <button className="btn btn-primary" onClick={() => handleCart(service)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
