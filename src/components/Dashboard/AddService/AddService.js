import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const axios = require("axios");

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const [status,setStatus]=useState(false);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("cloths", info.cloths);
    formData.append("pants", info.pants);
    formData.append("shirts", info.shirts);
    formData.append("sweaters", info.sweaters);
    formData.append("price", info.price);

    fetch("https://tranquil-thicket-49653.herokuapp.com/addAdminService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(data);
      })
      .catch((error) => {
        console.error(error);
      });
      e.preventDefault();
  };
  return (
    <div className="w-50">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Cloths</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="cloths"
            placeholder="Number Of Cloths"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Pants</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="pants"
            placeholder="Number Of Pants"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Shirts</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="shirts"
            placeholder="Number Of Shirts"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Sweaters</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="sweaters"
            placeholder="Number Of Sweaters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input
            onBlur={handleBlur}
            type="number"
            className="form-control"
            name="price"
            placeholder="Input Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Upload a image</label>
          <input
            onChange={handleFileChange}
            type="file"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Picture"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {status ===true && alert('Service Added Successfully')}
    </div>
  );
};

export default AddService;
