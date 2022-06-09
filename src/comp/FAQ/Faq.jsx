import React from "react";
import "./Faq.css";
import { AiOutlinePlus } from "react-icons/ai";

export default function Faq() {
  return (
    <div className="Main">
      
      <h3 className="faqh2">FAQ'S</h3>

      {/* FAQ section for The app  */}
      <div className="container FaqSection">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {/* 1st */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <AiOutlinePlus /> &ensp; What happens if I want to change my
                design?
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body bodyPara">
                We understand. Design decisions can be tough! You’ll work
                closely with our designers to make sure you’re excited about the
                direction, and you’ll have the chance to make up to three swaps
                before finalizing your design choices.
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <AiOutlinePlus /> &ensp; How long will construction take?
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body  bodyPara">
                Construction timelines will depend on your specific project
                scope, and can take anywhere from a month to a full year to
                complete. Our team will create a realistic schedule before we
                get started, so you can plan ahead for the construction phase of
                your project.
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <AiOutlinePlus /> &ensp; Who can I call with project specific
                questions?
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body  bodyPara">
                You will work closely with your interior designer throughout the
                renovation. We’ll be happy to answer any questions as they
                arise.
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                <AiOutlinePlus /> &ensp;What is the difference between an
                estimate and a design agreement?
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body  bodyPara">
                An estimate is free and is an educated price that is prepared
                for your project.The price of the project may fluctuate as you
                move through the process of design. A design agreement means you
                chose to select Classic Home Improvements as your builder but
                you are not quite sure yet on the design you want to build. The
                agreement is for the design portion only so you can come to an
                agreement of the design and final project price prior to signing
                a contract for the full contract amount.
              </div>
            </div>
          </div>

          {/* Fifth */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFifth"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFifth"
              >
                <AiOutlinePlus /> &ensp;What types of insurance should a
                contractor carry?
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseFifth"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFifth"
            >
              <div className="accordion-body  bodyPara">
                Contractors should carry at least three types of insurance:
                California state license, workman’s compensation, and
                comprehensive general liability (CGL). You should require proof
                of insurance before allowing a contractor to begin work on your
                property. We will provide you with proof of our license, general
                liability, and workers’ compensation forms before we begin work
                at your home.
              </div>
            </div>
          </div>
          {/* Sixth  */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                <AiOutlinePlus /> &ensp; Do you use subcontractors?
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div className="accordion-body  bodyPara">
                We employ both subcontractors and hourly employees who are on
                our payroll. The subcontractors we work with have all worked
                with us for several years and for most of them, we are their
                sole source of employment because we are able to keep them busy
                from one job to the next. They are all licensed and insured, as
                well as covered under our license and insurance. Our hourly
                employees are all journeymen which means they are a skilled
                worker who has successfully completed an official apprenticeship
                qualification in their trade (ie: electrical, plumbing, tile,
                etc).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
