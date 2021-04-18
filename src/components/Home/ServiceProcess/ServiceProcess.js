import React from "react";
import process1 from "../../../images/smartphone.png";
import process2 from "../../../images/pickup-truck.png";
import process3 from "../../../images/cleaning.png";
import process4 from "../../../images/delivery.png";
import ProcessCard from "../ProcessCard/ProcessCard";

const ServiceProcess = () => {
  const processData = [
    {
      title: "Sign Up",
      description:
        "All members receive bonuses and/or discounts. Sign up for more information.",
      image: process1,
    },
    {
      title: "Pick Up",
      description:
        "If you are in an urgent need of laundry, we can come right to you for a pick-up.",
      image: process2,
    },
    {
      title: "Cleaning",
      description:
        "We use premium materials, technologies and guarantee treatment with care.",
      image: process3,
    },
    {
      title: "Delivery",
      description:
        "Free delivery for every order upon prior request within 24 hours after cleaning",
      image: process4,
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center mb-3 mt-5">
          Check Our One Stop Easy Service Process
        </h1>
        <p className="underline container w-25 mt-5"></p>
        <h6
          className="text-center mt-4 mb-5"
          style={{ color: "#1cc7c1", fontWeight: "bold" }}
        >
          WHICH PROCESS SERVICES ARE WORKING:
        </h6>
      </div>
      <div className="container">
        <div className="row">
          {processData.map((process) => (
            <ProcessCard process={process}></ProcessCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
