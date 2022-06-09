import React from 'react'
import "./singleRev.css"
import {GiStarsStack} from "react-icons/gi"

function SingleRev({ReviewerName, ReviewerImage, ReviewerDescription}) {
  return (
    <React.Fragment>
        <div className='singleRev'>
            <div className="imageDiv">
                <img src={ReviewerImage} alt="Customer" />
            </div>

            <div className="review__content">
                <div className="top__content">
                <h4 className='CustomerName'>{ReviewerName}</h4>
                <GiStarsStack  className='StarReview'/>                
                </div>
                
                <h6 className='ReviewDescription'>
                  {ReviewerDescription}
                </h6>

            </div>
        </div> 
    </React.Fragment>
  )
}

export default SingleRev;