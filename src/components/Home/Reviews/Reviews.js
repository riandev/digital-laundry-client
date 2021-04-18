import React, { useEffect, useState } from 'react';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

// const revviewData = [
//     {
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde assumenda voluptates inventore. Sint alias vitae fugiat nulla saepe assumenda enim quis porro tempore aliquam.",
//       photo: ellipse1,
//       name: "Winson Herry",
//       location: "California",
//     },
//     {
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde assumenda voluptates inventore. Sint alias vitae fugiat nulla saepe assumenda enim quis porro tempore aliquam.",
//       photo: ellipse2,
//       name: "Libson Herry",
//       location: "Dhaka",
//     },
//     {
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde assumenda voluptates inventore. Sint alias vitae fugiat nulla saepe assumenda enim quis porro tempore aliquam.",
//       photo: ellipse3,
//       name: "Binson Herry",
//       location: "India",
//     },
//   ];

const Reviews = () => {
  const [revviewData,setRevviewData]=useState([]);
  
  useEffect(() => {
fetch('http://localhost:5000/reviews')
.then(res => res.json())
.then(data => setRevviewData(data))
  }, [])
    return (
        <section>
      <div>
        <h1 className="text-center mb-3 mt-5">
          Check Our Reviews From Valuable Customers
        </h1>
        <p className="underline container w-25 mt-5"></p>
        <h6
          className="text-center mt-4 mb-5"
          style={{ color: "#1cc7c1", fontWeight: "bold" }}
        >
          REVIEWS FROM CUSTOMERS:
        </h6>
      </div>
        <div className='container mt-5 mb-5'>
          <div className="row">
            {revviewData.map((review) => (
              <ReviewsCard review={review}></ReviewsCard>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Reviews;