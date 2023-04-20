import React from "react";

import img from './images/about.jpg'

const About = () => {
    return (
        <div id="about" className="container-fluid">
            <div className="component-heading"><span>About Us</span></div>

            <div className="about-container">
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-md-5">
                        <img src={img} alt="house-img" />
                    </div>
                    <div className="col-md-5 mt-3">
                        <h3>Who We Are</h3>
                        <p>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sunt reiciendis voluptate itaque exercitationem minus perferendis officiis doloribus explicabo fuga aut magnam, perspiciatis nisi earum iste velit quidem consequatur. Aut dolores saepe suscipit temporibus explicabo beatae eius modi voluptate ipsam veniam fugit labore autem rem maxime odit, veritatis minus molesti excepturi iure quod fugit deserunt, perspiciatis similique at, itaque laboriosam!
                        </p>
                        <button className="btn btn-outline-primary" type="submit">Contact Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;