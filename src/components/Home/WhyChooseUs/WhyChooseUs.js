import React from "react";
import chooseUs1 from "../../../images/chooseUs1.jpeg";
import chooseUs2 from "../../../images/chooseUs2.jpeg";
import chooseUs3 from "../../../images/chooseUs3.jpeg";
import WhyChooseUsCard from "../WhyChooseUsCard/WhyChooseUsCard";

const WhyChooseUs = () => {
  const chooseUsData = [
    {
      title: "Professional Care",
      description:
        "We’re a supreme, door-to-door delivery dry cleaning and laundry service. With minimum effort you choose a pick-up & drop-off time and we’ll...",
      image: chooseUs1,
    },
    {
      title: "Fast Delivery",
      description:
        "Overnight dry cleaning and laundry delivery. Your clean clothes will arrive 24h after pick-up. By the time you take off that last shirt, the fresh...",
      image: chooseUs2,
    },
    {
      title: "Excellent Results",
      description:
        "We provide high quality dry cleaning, laundry and ironing services from premium facilities, and take custom orders so you can look and feel just...",
      image: chooseUs3,
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center mb-3 mt-5">
          Delivering Clean Clothes and Peace of Mind
        </h1>
        <p className="underline container w-25 mt-5"></p>
        <h6
          className="text-center mt-4 mb-5"
          style={{ color: "#1cc7c1", fontWeight: "bold" }}
        >
          REASONS TO CHOOSE US:
        </h6>
      </div>
      <div className="container">
        <div className="row">
          {chooseUsData.map((chooseUs) => (
            <WhyChooseUsCard chooseUs={chooseUs}></WhyChooseUsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
