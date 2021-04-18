import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [status,setStatus]=useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      fetch('https://tranquil-thicket-49653.herokuapp.com/addAdmin',{
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
          setStatus(data);
      })
    };
  return (
    <div>
    <h3 style={{ color: "#1cc7c1" }}>Add Admin</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control w-50" defaultValue="" {...register("adminEmail")} placeholder="Input Admin Email"/>
        <br/>
        <input className='btn btn-danger' type="submit" />
      </form>
      {status === true && alert('Admin Added Successfully')}
    </div>
  );
};

export default MakeAdmin;
