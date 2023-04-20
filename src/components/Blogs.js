import React from "react";

import img1 from './images/blog1.jpg';
import img2 from './images/blog2.jpg';
import img3 from './images/blog3.jpg';

const Blogs = () => {

  return (

    <div id="blogs" className="container-fluid">
      <div className="component-heading"><span>Blogs</span></div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <img className="card-img-top" src={img1} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 3 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img className="card-img-top" src={img1} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 3 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img className="card-img-top" src={img1} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 3 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
            </div>
          </div>


          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img className="card-img-top" src={img2} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 4 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img className="card-img-top" src={img2} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 4 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img className="card-img-top" src={img2} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 4 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img className="card-img-top" src={img3} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 5 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img className="card-img-top" src={img3} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 5 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img className="card-img-top" src={img3} alt="card-img" />
                <div className="card-body">
                  <div className="blog-info d-flex justify-content-between text-muted mb-3">
                    <small className="date"><i className="bi bi-calendar-check"></i> 5 April 2023</small>
                    <small className="date">By Admin</small>
                  </div>
                  <h5 className="card-title">Buying Personal Property</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum saepe provident Pariatur provident odit, consequuntur itaque quae mollitia...</p>
                  <a href="#blogs" className="btn btn-outline-primary">View Blog</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Blogs;