import React from "react";

import img1 from './images/service1.jpg';
import img2 from './images/service2.jpg';
import img3 from './images/service3.jpg';

const Services = () => {
  return (



    <div id="services" className="container-fluid">
      <div className="component-heading"><span>Our Services</span></div>
      <p className="text-center">Whole process includes 3 stages:</p>
      <div className="row justify-content-evenly">
        <div className="card">
          <h5 className="card-title fw-bold">1. Pre-Booking</h5>
          <img className="card-img-top p-3" src={img1} alt="cardimg
        " />
          <div className="card-body py-0">
            <h5># Backgroud Verification</h5>

            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ducimus ea similique quisquam at quo.
              Error deserunt quod ipsam saepe itaque ut, numquam animi reprehenderit debitis corporis quia cumque! Delectus, vitae! Vel, adipis unt quod ipsam sae...</p>
          </div>
          <div className="text-end p-3">
            <a href="#services" className="card-link">Read More</a>
          </div>
        </div>

        <div className="card">
          <h5 className="card-title fw-bold">2. Pre-Registration</h5>
          <img className="card-img-top p-3" src={img2} alt="cardimg
        " />
          <div className="card-body py-0">
            <h5># Virtual Site Visit</h5>

            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ducimus ea similique quisquam at quo.
              Error deserunt quod ipsam saepe itaque ut, numquam animi reprehenderit debitis corporis quia cumque! Delectus, vitae! Vel, adipis unt quod ipsam sae...</p>
          </div>
          <div className="text-end p-3">
            <a href="#services" className="card-link">Read More</a>
          </div>
        </div>

        <div className="card">
          <h5 className="card-title fw-bold">3. Post-Registration</h5>
          <img className="card-img-top p-3" src={img3} alt="cardimg
        " />
          <div className="card-body py-0">
            <h5># Title Diligence</h5>

            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ducimus ea similique quisquam at quo.
              Error deserunt quod ipsam saepe itaque ut, numquam animi reprehenderit debitis corporis quia cumque! Delectus, vitae! Vel, adipis unt quod ipsam sae...</p>
          </div>
          <div className="text-end p-3">
            <a href="#services" className="card-link">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;