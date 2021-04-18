import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewsCard = ({review}) => {
    return (
        <div className="col-md-4">
        <Card className='review-card' style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Text className="text-secondary">
              {review.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <div className='d-flex align-items-center'>
              <div className=''>
                <img className="img-fluid w-50" src={review.photo} alt="" />
              </div>
              <div className=''>
                <h5 style={{color:'#1cc7c1'}}>{review.name}</h5>
                <p className="text-secondary">
                  {" "}
                  <small>{review.location}</small>{" "}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ReviewsCard;