import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router";

const ManageService = () => {
  const [manageService, setManageService] = useState([]);
  console.log(manageService);
  useEffect(() => {
    fetch("http://localhost:5000/bookingData")
      .then((res) => res.json())
      .then((data) => setManageService(data))
      .catch((err) => console.log(err));
  }, []);
  
  const handleDelete=(id) => {
      console.log(id);
    fetch(`http://localhost:5000/deleteService/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
  }
  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr className="text-secondary">
            <th>SL</th>
            <th>Title</th>
            <th>Cloths</th>
            <th>Pants</th>
            <th>Shirts</th>
            <th>Sweaters</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageService.map((service, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{service.title}</td>
              <td>{service.cloths}</td>
              <td>{service.pants}</td>
              <td>{service.shirts}</td>
              <td>{service.sweaters}</td>
              <td>{service.price}</td>
              <td>
                <button onClick={()=> handleDelete(service._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
