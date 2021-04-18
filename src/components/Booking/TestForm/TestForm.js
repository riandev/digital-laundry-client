import React from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const TestForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
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
                <Form.Label>Age</Form.Label>
                <Form.Control {...register("age")} />
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
                <Form.Label>Weight</Form.Label>
                <Form.Control {...register("weight")} />
              </Form.Group>
            </Form.Row>

            <br />
            <input className="btn btn-danger" type="submit" />
          </form>
    </div>
  );
};

export default TestForm;
