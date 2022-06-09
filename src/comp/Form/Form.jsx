import React, { useState } from "react";
import "./Form.css";
// import Axios from "./../../axios.js";

export default function Form() {
  // States for forms  =================================================================================================================

  const [formName, setFormName] = useState("");
  const formNameUpdater = (event) => {
    setFormName(event.target.value);
  };

  const [formEmail, setFormEmail] = useState("");
  const formEmailUpdater = (event) => {
    setFormEmail(event.target.value);
  };

  const [formPhone, setFormPhone] = useState("");
  const formPhoneUpdater = (event) => {
    setFormPhone(event.target.value);
  };

  const [formAddress, setFormAddress] = useState("");
  const formAddressUpdater = (event) => {
    setFormAddress(event.target.value);
  };

  const [formCity, setFormcity] = useState("");
  const formCityUpdater = (event) => {
    setFormcity(event.target.value);
  };

  const [formState, setFormState] = useState("");
  const formStateUpdater = (event) => {
    setFormState(event.target.value);
  };

  const [formPincode, setFormPincode] = useState("");
  const formPincodeUpdater = (event) => {
    setFormPincode(event.target.value);
  };

  const [comment, setcomment] = useState("");
  const commentUpdater = (event) => {
    setcomment(event.target.value);
  };

  //   Form Handler ----------------------------------------------------------------------------------------------
  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const dataToSend = {
      Name: formName,
      email: formEmail,
      phone: formPhone,
      address: formAddress,
      city: formCity,
      state: formState,
      pincode: formPincode,
      comment: comment,
    };

    // Axios.post("/submitForm", dataToSend);
  };

  return (
    <>
      {/* Heading for Form */}
      <div className="container">
        <h1 className="contactUsNow">Contact Us</h1>
        <h5>Renovation Starts with Us</h5>
      </div>

      {/* Started Main Form */}
      <div className="container FormDiv">
        <form className="row g-3" onSubmit={formSubmitHandler}>
          {/* Heading  */}
          <h3 className="display-6 FormHeading">Fill the Details</h3>
          {/* Fields */}
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input
              onChange={formNameUpdater}
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="John Soysa"
              value={formName}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              onChange={formEmailUpdater}
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="example@gmail.com"
              value={formEmail}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              onChange={formPhoneUpdater}
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="eg: 888-888-9898"
              value={formPhone}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={formAddressUpdater}
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={formAddress}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              onChange={formCityUpdater}
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Surrey"
              value={formCity}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              State
            </label>
            <input
              onChange={formStateUpdater}
              type="text"
              className="form-control"
              id="inputState"
              placeholder="British Columbia"
              value={formState}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              PinCode
            </label>
            <input
              onChange={formPincodeUpdater}
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="VT5 6P8"
              value={formPincode}
            />
          </div>
          

          <div className="col-12 pt-40">
            <h5>Explain your Problem Below</h5>
            <textarea
              onChange={commentUpdater}
              name="Enter Text"
              className="w-100"
              id=""
              rows="10"
              placeholder="My Sink is not Leaking and its Tap is broken Can you fix it today ?  "
              value={comment}
            ></textarea>
          </div>
          <div className="col-12 ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
