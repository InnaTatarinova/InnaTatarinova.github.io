import React from "react";
import "./Testimonial.scss";
import { TestimonialCard } from "./TestimonialCard";

import photo1 from "../../assets/img/Testimon/photo1.jpg";
import photo2 from "../../assets/img/Testimon/photo2.jpg";
import photo3 from "../../assets/img/Testimon/photo3.jpg";
import { useEffect } from "react";
import { useState } from "react";

const testimList = [
  {
    photo: photo1,
    text: " I recently used ABC Moving Company for my move from Philadelphia to New York City. The movers arrived on time and were very professional throughout the entire process. They took great care with my belongings and everything arrived at my new home in excellent condition. The customer service was also top-notch, with the staff being very responsive and helpful whenever I had questions. Overall, I had a great experience with ABC Moving Company and would highly recommend them to anyone in need of moving services",
    name: "Nancy C. Gatewood",
    star: "5",
  },
  {
    photo: photo2,
    text: " I used LMN Moving Company for my recent move, and I was very impressed with their service. The movers were friendly and efficient, and they took great care with my belongings. The price was also very reasonable compared to other companies I looked at. I would definitely use LMN Moving Company again in the future",
    name: "Mickey S. Wesley",
    star: "3",
  },
  {
    photo: photo3,
    text: " I had a wonderful experience with LMN Moving Company. The movers were courteous, respectful, and took great care with my belongings. They made the entire process easy and stress-free, and I’m so grateful for their help. Thank you, LMN Moving Company!",
    name: "Debbie D. Peralta",
    star: "4",
  },
];

export const Testimonial = () => {
  const [testimIndex, setTestimIndex] = useState(0);

  const showNext = () => {
    if (testimIndex === testimList.length - 1) {
        setTestimIndex(0);
      } else {
        setTestimIndex(testimIndex + 1);
      }
  };

  const showPrev = () => {
    if (testimIndex === 0) {
        setTestimIndex(testimList.length-1);
      } else {
        setTestimIndex(testimIndex-1);
      }
  };

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (testimIndex === testimList.length - 1) {
        setTestimIndex(0);
      } else {
        setTestimIndex(testimIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalTime);
  }, [testimIndex]);

  return (
    <div className="testimonials-component">
      <h2 className="testimonials-title">TESTIMONIALS</h2>
      <div className="testimonItem">
        <div className="testimIcon" onClick={showPrev}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="testimon">
          <TestimonialCard review={testimList[testimIndex]} />
        </div>
        <div className="testimIcon" onClick={showNext}>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
