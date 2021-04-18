import React from "react";
import Modal from "react-modal";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const BookingForm = ({ modalIsOpen, closeModal, booking, date }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.title =booking.title;
    data.date=date;
    data.bookingDate=new Date();
    console.log(data);
  };
  function afterOpenModal() {}
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: "#1cc7c1" }} className="text-center">
          {booking.title}
        </h2>
        <p className="text-center text-secondary">
          <small>On {date.toDateString()}</small>
        </p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="time">Booking Time</label>
            <input
              className="form-control"
              type="time"
              defaultValue=""
              {...register("time")}
            />
            <label htmlFor="name">Booking Name</label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true })}
            />
            <label htmlFor="phone">Mobile Number</label>
            <input
              className="form-control"
              type="text"
              {...register("phone", { required: true })}
            />
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true })}
            />
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Area</Form.Label>
                <Form.Control {...register("area")} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  {...register("gender")}
                  as="select"
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control {...register("postal")} />
              </Form.Group>
            </Form.Row>

            <br />
            <input className="btn btn-danger" type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BookingForm;
