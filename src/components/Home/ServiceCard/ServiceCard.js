import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import service from "../../../images/mainhead.png"

const ServiceCard = ({service}) => {

  return (
    <div className="col-md-4">
      <Card style={{ width: "20rem" }} className="text-center">
        <Card.Img variant="top" src={`data:image/png;base64,${service.image.img}`} />
        <Card.Body>
          <Card.Text style={{color: "#1cc7c1" }}>{service.cloths} cloths</Card.Text>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text className='container'>
            <p className="card p-2 text-secondary">Pants: {service.pants}</p>
            <p className='text-secondary'>Shirts: {service.shirt}</p>
            <p className="card p-2 text-secondary">Sweaters: {service.sweaters}</p>
          </Card.Text>
          <Card.Title style={{color: "#1cc7c1",fontWeight:'bold' }}>${service.price}</Card.Title>
          <Link to="/bookings"><Button variant="primary">Book Service</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
