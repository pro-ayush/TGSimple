

import React from 'react'
import "./benefits.css"


const Benefits = () => {
  return (
    <div>
         {/* second section */}
      <section className="secondHead">
        <div className="container">
          <img
            className="mainVector"
            src={require("./mainvector.png")}
            alt="Play"
            data-rellax-speed="0"
            data-rellax-xs-speed="-5"
          />
        </div>
        <div className="second__content" data-rellax-speed="10">
          <div>
            <h2 className="SecondaryText">
              Best Builders in Vancouver
            </h2>
            <p>
              Our prices are really competitive and the quality of our work
              speaks for itself. give your house a new feel with a quick
              renovation.
            </p>
          </div>
          <div>
            <h2 className="SecondaryText">You are Just one Call Away</h2>
            <p>
              Call us Now ! our agents are ready for support all time. for any
              queries regarding small issues or questions , contact our customer
              support team
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits;