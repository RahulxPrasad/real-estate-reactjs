import React from "react";

const FAQ = () => {

    return (
        <div id="faq" className="container-fluid">
            <div className="component-heading"><span>FAQs</span></div>

            <div className="row justify-content-evenly p-3">
                <div className="col-md-10">
                    <div className="accordion border" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Question #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <b>Q. Lorem ipsum dolor sit, amet consectetur adipisicing elit?</b> <br />Ans: Ipsam dicta expedita dolorem totam sequi distinctio reprehenderit odit quis! Consequatur tenetur et perspiciatis, commodi dolor dolorum fugit magnam impedit, recusandae provident exercitationem voluptatem iusto mollitia eius ad suscipit quo vitae ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Question #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <b>Q. Lorem ipsum dolor sit, amet consectetur adipisicing elit?</b> <br />Ans: Ipsam dicta expedita dolorem totam sequi distinctio reprehenderit odit quis! Consequatur tenetur et perspiciatis, commodi dolor dolorum fugit magnam impedit, recusandae provident exercitationem voluptatem iusto mollitia eius ad suscipit quo vitae ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Question #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <b>Q. Lorem ipsum dolor sit, amet consectetur adipisicing elit?</b> <br />Ans: Ipsam dicta expedita dolorem totam sequi distinctio reprehenderit odit quis! Consequatur tenetur et perspiciatis, commodi dolor dolorum fugit magnam impedit, recusandae provident exercitationem voluptatem iusto mollitia eius ad suscipit quo vitae ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default FAQ;