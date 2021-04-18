import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./BookingDetailsCard.css";
import BookingForm from "../BookingForm/BookingForm";

const BookingDetailsCard = ({booking,date}) => {
  console.log(booking);
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
      setIsOpen(false);
    }
  return (
    <div>
      <div className="col-md-4">
        <Card style={{ width: "20rem" }} className="text-center">
          <Card.Img variant="top" src={`data:image/png;base64,${booking.image.img}`} />
          <Card.Body>
            <Card.Text style={{ color: "#1cc7c1" }}>{booking.cloths} cloths</Card.Text>
            <Card.Title>{booking.title}</Card.Title>
            <Card.Text className="container">
              <p className="card p-2 text-secondary">Pants: {booking.pants}</p>
              <p className="text-secondary">Shirts: {booking.shirt}</p>
              <p className="card p-2 text-secondary">Sweaters: {booking.sweaters}</p>
            </Card.Text>
            <Card.Title style={{ color: "#1cc7c1", fontWeight: "bold" }}>
              ${booking.price}
            </Card.Title>
              <Button onClick={openModal} variant="primary">Book Service</Button>
              <BookingForm modalIsOpen={modalIsOpen} booking={booking} date={date} closeModal={closeModal}></BookingForm>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
