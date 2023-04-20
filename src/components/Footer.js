import React from "react";

import logo from './images/logo.jpg';

const Footer = () => {
    return (
        <div id="footer" className="container-fluid bg">
            <footer className="text-center text-lg-start pt-1 ">


                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4"> The Company
                                </h6>

                                <img className="logo-img" src={logo} alt="logo" />
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-decoration-underline">
                                    Sections
                                </h6>
                                <p>
                                    <a href="#home">Home</a>
                                </p>
                                <p>
                                    <a href="#about">About</a>
                                </p>
                                <p>
                                    <a href="#services">Services</a>
                                </p>


                                <p>
                                    <a href="#contact">Contact Us</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-decoration-underline">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#footer">Help</a>
                                </p>
                                <p>
                                    <a href="#blogs">Blogs</a>
                                </p>
                                <p>
                                    <a href="#faq">FAQs</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-decoration-underline">Contact Info</h6>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    support@thecompany.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i>+91 | 9999999999</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center">

                    <div>
                        <div className=" d-block d-sm-inline m-4">
                            <a href="#footer">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                        <div className=" d-block d-sm-inline m-4">
                            <a href="#footer">
                                <i className="fa-brands fa-square-facebook"></i> Facebook

                            </a>
                        </div>
                        <div className=" d-block d-sm-inline m-4">
                            <a href="#footer">
                                <i className="fab fa-twitter"></i> Twitter

                            </a>
                        </div>

                        <div className=" d-block d-sm-inline m-4">
                            <a href="#footer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center p-4" >
                    <i className="fa-regular fa-copyright"></i> Copyright 2023, thecompany.com
                </div>
            </footer>

        </div>
    );
}

export default Footer;