import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Testimonial.scss";
import { TestimonialCard } from "./TestimonialCard";
import {testimonials} from "../../../data/testimonials"

export const Testimonial = () => {
  const [testimIndex, setTestimIndex] = useState(0);

  const showNext = () => {
    if (testimIndex === testimonials.length - 1) {
        setTestimIndex(0);
      } else {
        setTestimIndex(testimIndex + 1);
      }
  };

  const showPrev = () => {
    if (testimIndex === 0) {
        setTestimIndex(testimonials.length-1);
      } else {
        setTestimIndex(testimIndex-1);
      }
  };

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (testimIndex === testimonials.length - 1) {
        setTestimIndex(0);
      } else {
        setTestimIndex(testimIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalTime);
  }, [testimIndex]);

  return (
    <div className="testimonials-component">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonItem">
        <div className="testimIcon" onClick={showPrev}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="testimon">
          <TestimonialCard review={testimonials[testimIndex]} />
        </div>
        <div className="testimIcon" onClick={showNext}>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
