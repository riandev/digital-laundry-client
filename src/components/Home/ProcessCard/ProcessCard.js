import React from 'react';

const ProcessCard = ({process}) => {
    return (
        <div className="col-md-3 text-center">
            <img src={process.image} className="img-fluid img-circle w-75" alt="" />
            <h3 className="mt-3">{process.title}</h3>
            <p className="underline container w-25 mt-5"></p>
            <p>{process.description}</p>
        </div>
    );
};

export default ProcessCard;