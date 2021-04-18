import React from "react";
import CountUp from "react-countup";
import "./OurCapacity.css";

const OurCapacity = () => {
  return (
    <div className="capacity-container pt-5 mt-5">
      <div className="container pt-5">
        <div className="d-flex justify-content-between pt-5">
          <div className="card text-center p-2">
            <h1 style={{ color: "#1cc7c1", fontWeight: "bold" }}>
              <CountUp duration={2.75} start={0} end={4000} />
            </h1>
            <p className="text-secondary">Clients Per Week</p>
          </div>
          <div className="card text-center p-2">
            <h1 style={{ color: "#1cc7c1", fontWeight: "bold" }}>
              <CountUp duration={2.75} start={0} end={17000} />
            </h1>
            <p className='text-secondary'>Pounds of Laundry per Week</p>
          </div>
          <div className='card text-center p-2'>
            <h1 style={{ color: "#1cc7c1", fontWeight: "bold" }}><CountUp duration={2.75} start={0} end={167} /></h1>
            <p className='text-secondary'>People in Team</p>
          </div>
          <div className='card text-center p-2'>
            <h1 style={{ color: "#1cc7c1", fontWeight: "bold" }}><CountUp duration={2.75} start={0} end={194000} /></h1>
            <p className='text-secondary'>Pieces of Dry Cleaning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapacity;
