
import {BsGoogle} from 'react-icons/bs'
import "./Reviews.css";
import SingleRev from "./singleRev";



const Reviews = () => {
  return (
    <div className="Review">

      <div className="ReviewMainDiv container">

        <h1 className="reviewHeading">Reviews</h1>
      

        <div className="review_list">
          <SingleRev ReviewerName={"Liza Augustin"} ReviewerImage={require("../../resources/reviews/liza.jpg")} ReviewerDescription={"Recently i completed my new house renovation with the help of triplegems i just moved in burnaby and bought a new house for a great deal,however it needed repair, So i had to find someone , i found triplegemsbuilders via a friends reference who lives in vancouver. and i can say for sure i don't regreat my decision, everything went smooth and my work is finished on time. Thanks Guys  "} />


          <SingleRev ReviewerName={"Caleb"} ReviewerImage={require("../../resources/reviews/caleb.jpg")}  ReviewerDescription={"I worked in walmart for 5 years to earn enough money to buy my first real estate. TG helped to me make that thing like a new home. I am really impressed by their speed and management. I definately recommend TG to everyone who's looking for Quality."} />

          
          <SingleRev ReviewerName={"Richard Eguma"} ReviewerImage={require("../../resources/reviews/richard.jpg")} ReviewerDescription={"My wife is in the property business for a while now and she keeps on hiring professionals all the time but i only appreciate the services of a few and Triplegems in one of that team. They took all the reponsibility of the latest property and gave best results #GreatWork"} />
        </div>

        {/* closing tag of topmost div  */}



        
      </div>
        <div className="Justification">
              <p>{<BsGoogle color="green" />} Reviews taken from Google Reviews</p>
        </div>
    </div>
  );
};

export default Reviews;
