import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import './OurService.css'

const OurServices = () => {
  const [serviceData,setServiceData]=useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookingData")
      .then((res) => res.json())
      .then((result) => setServiceData(result))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div>
      <div>
        <h1 className='text-center mb-3 mt-4'>Dry Cleaning and Laundry Made Simple</h1>
        <p className="underline container w-25 mt-5"></p>
        <h6 className='text-center mt-4 mb-5' style={{color: "#1cc7c1",fontWeight:'bold' }}>HOW OUR SERVICE WORKS:</h6>
      </div>
      <div className='container'>
        <div className="row">
          {serviceData.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
