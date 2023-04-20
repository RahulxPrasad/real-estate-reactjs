import React from "react";

import img from './images/contact.jpg'

const Contact = () => {
  return (

    <div id="contact" className="container-fluid">
      <div className="component-heading"><span>Contact Us</span></div>
      <div className="contact-container">

        <div className="row justify-content-evenly align-items-center">
          <div className="contact-form col-md-5">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label m-0">Full Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label m-0">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label m-0">Phone Number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label m-0">Suggestion/Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>


              <div className=" text-center">
                <button type="submit" className="bg submit-btn btn mb-3">Submit</button>
              </div>
            </form>
          </div>
          <div className="address col-md-5 mt-3">
            <h2 className="text-secondary">Official Address</h2>
            <p>M-19 Kimberly Way, William Park,<br /> New York -11206 <br /><i className="fa-solid fa-phone"></i> 999-999-9999
            </p>
            <img className="img-fluid" src={img} alt="employees-img" />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Contact;