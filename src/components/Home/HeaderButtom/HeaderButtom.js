import React from "react";
import "./HeaderButtom.css";

const HeaderButtom = () => {
  return (
    <main className="header-buttomContainer">
      <div className="container">
        <div className="row align-items-center p-4">
          <div className="col-md-6">
            <h3 className="text-white">Dry Cleaning and Lundry Made Simple</h3>
            <p className="text-white">DOWNLOAD THE APP</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-evenly">
              <button className="btn btn-outline-primary mr-3 text-white">
                Download App On The Apple Store
              </button>
              <button className="btn btn-outline-primary text-white">
                Download App On The Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderButtom;
