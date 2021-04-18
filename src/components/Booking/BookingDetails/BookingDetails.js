import React, { useEffect, useState } from "react";
import BookingDetailsCard from "../BookingDetailsCard/BookingDetailsCard";
import "./BookingDetails.css";

const BookingDetails = ({ bookingDate }) => {
  const [bookingData,setBookingData]=useState([])
  useEffect(() => {
    fetch("http://localhost:5000/bookingData")
      .then((res) => res.json())
      .then((result) => setBookingData(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div>
        <div>
          <h2
            style={{ color: "#1cc7c1", fontWeight: "bold" }}
            className="text-center mb-3 mt-4"
          >
            You Have Choosed Booking at {bookingDate.toDateString()}
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {bookingData.map((booking) => (
              <BookingDetailsCard
                booking={booking}
                date={bookingDate}
              ></BookingDetailsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
