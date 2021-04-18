import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [matchedBooking, setMatchedBooking] = useState([]);
  const [bookingId,setBookinngId]=useState([]);
  const status= bookingId.find(book => book.id === matchedBooking[0]?._id)
  console.log(status);
  // console.log(matchedBooking);

  useEffect(() => {
    fetch("http://localhost:5000/userBookingStatus")
      .then((res) => res.json())
      .then((data) => {
        setBookinngId(data);
      });
  }, []);

  const userEmail = loggedInUser.email;
  console.log(userEmail);

  useEffect(() => {
    fetch(`http://localhost:5000/booking/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMatchedBooking(data);
      });
  }, [userEmail]);
  return (
    <div>
      <h3 style={{ color: "#1cc7c1" }} className="container">
        Your Booking Count: {matchedBooking.length}
      </h3>

      <table className="container table table-borderless">
        <thead>
          <tr className="text-secondary">
            <th>Booked Service</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {matchedBooking.map((booking) => (
            <tr>
              <td>{booking.service}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.address}</td>
              <td>{booking.price}</td>
              <td>{status.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
