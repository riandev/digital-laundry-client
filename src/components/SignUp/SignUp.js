import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [signUpStatus,setSignUpStatus]=useState(false);
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/signUpUser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => setSignUpStatus(data))
      };
    return (
        <div className="mt-4">
        <form className="w-50 card m-auto p-4" onSubmit={handleSubmit(onSubmit)}>
          <h3>Sign Up</h3>
  
          <div className="form-group">
            <label>First name</label>
            <input
              {...register("f_name")}
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
  
          <div className="form-group">
            <label>Last name</label>
            <input name="l_name" {...register("l_name")} type="text" className="form-control" placeholder="Last name" />
          </div>
  
          <div className="form-group">
            <label>Email address</label>
            <input
            {...register("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
  
          <div className="form-group">
            <label>Password</label>
            <input
            {...register("password")}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <input className="btn btn-primary btn-block" type="submit" />
          <p className="forgot-password text-right">
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </form>
        {
            signUpStatus === true && alert('Sign Up Successfully Completed')
        }
      </div>
    );
};

export default SignUp;