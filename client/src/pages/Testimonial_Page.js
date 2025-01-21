import React, { useEffect } from "react";
import { Testimonial } from "../components/mainComponent/Testimonial/Testimonial";
import { TestimonialCard } from "../components/mainComponent/Testimonial/TestimonialCard";
import { testimonials } from "../data/testimonials";
import "../components/mainComponent/Testimonial/TestimonialPage.scss";

export const Testimonial_Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="testimonials-component">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimon_list">
          {testimonials.map((val, key) => {
            return (
              <div key={key} className="card_Page">
                <TestimonialCard
                  review={val}
                  className="testimonCardComponent_Page"
                  className_img="photoTestim_Page"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
