import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../AddService/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51Ie0uCKx6MBodOyLy3s7GgkAAkARoiW53PCIjALl9rGSzFHjRI4oFJKQmxrNH8IZhbBTbImcfnxqjCdINvW7fGsp00chLbVQ0b"
);

const AddBooking = () => {
  const [userBooking, setUserBooking] = useState([]);
  const [bookingInfo, setBookingInfo] = useState({});
  const [dbStatus, setDbStatus] = useState(false);
  const [userBookingData,setUserBookingData]=useState({})
  const matchedService = userBooking.filter(
    (title) => title.title === bookingInfo.service
  );
  const handleBlur = (e) => {
    const newInfo = { ...bookingInfo };
    newInfo[e.target.name] = e.target.value;
    setBookingInfo(newInfo);
  };
  const handleSubmit = (e) => {
    const userFinalBookking = {
      ...bookingInfo,
      price: matchedService[0]?.price,
    };
    setUserBookingData(userFinalBookking);
    console.log(userFinalBookking);
    fetch("http://localhost:5000/userBookings", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userFinalBookking),
    })
      .then((res) => res.json())
      .then((data) => setDbStatus(data))
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  useEffect(() => {
    fetch("http://localhost:5000/bookingData")
      .then((res) => res.json())
      .then((data) => setUserBooking(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-50">
      <form style={{display: dbStatus === false ? 'block' : 'none'}} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Select Service</label>
          <select
            onBlur={handleBlur}
            type="select"
            className="form-control"
            name="service"
            placeholder="Enter Your Name"
          >
            <option value="">..Select</option>
            {userBooking.map((book) => (
              <option value={book.value}>{book.title}</option>
            ))}
            <option value={userBooking.title}></option>
          </select>
        </div>
        <p style={{ color: "#1cc7c1" }}>
          Price for Selected Service: <b> ${matchedService[0]?.price} </b>
        </p>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            onBlur={handleBlur}
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Address</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="address"
            placeholder="Input Address"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      {dbStatus === true && (
        <div>
          <Elements stripe={stripePromise}>
          <h6 style={{ color: "#1cc7c1" }}>
            Paying ${matchedService[0]?.price}
          </h6>
            <PaymentForm userBookingData={userBookingData}></PaymentForm>
          </Elements>
        </div>
      )}
    </div>
  );
};

export default AddBooking;
