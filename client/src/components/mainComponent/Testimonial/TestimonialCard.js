import React, { useState } from "react";

const Star = () => (
    <i className="bi bi-star-fill"></i>
  );

export const TestimonialCard = (props) => {
  return (
    <div className={`testimonCardComponent ${props.className}`}>
      <div className={`photoTestim ${props.className_img}`}>
        <img src={props.review.photo} />
      </div>
      <div className="star">
      {[...Array(Number(props.review.star))].map((_, index) => (
        <Star key={index}/>
      ))}
      </div>
      <h3 className="textReview">{props.review.text}</h3>
      <h2 className="nameReviewer">{props.review.name}</h2>
    </div>
  );
};
