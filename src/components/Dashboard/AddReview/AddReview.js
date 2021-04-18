import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const [status,setStatus]=useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      fetch('https://tranquil-thicket-49653.herokuapp.com/addReview',{
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => setStatus(result))
    };
  return (
    <div>
    <h3 style={{ color: "#1cc7c1"}}>Review Us</h3>
      <form className='w-50' onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control" {...register("name", { required: true })}  placeholder="Your Name"/>
        <br/>
        <input className="form-control" {...register("description", { required: true })}  placeholder="Write Us"/>
        <br/>
        <input className='form-control' {...register("location", { required: true })}  placeholder="Your Location"/>
        <br/>
        <input className='btn btn-danger' type="submit" />
      </form>
      {status === true && alert('Thanks for Your Review')}
    </div>
  );
};

export default AddReview;
