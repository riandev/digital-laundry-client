import React from 'react';
import './WhyChooseUsCard.css'

const WhyChooseUsCard = ({chooseUs}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={chooseUs.image} className="img-fluid img-circle" alt="" />
            <h3 className="mt-3">{chooseUs.title}</h3>
            <p className="underline container w-25 mt-5"></p>
            <p>{chooseUs.description}</p>
        </div>
    );
};

export default WhyChooseUsCard;