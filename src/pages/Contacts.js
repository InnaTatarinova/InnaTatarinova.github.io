import React, { useEffect } from "react";
import { ServiceList } from "../components/mainComponent/Services/ServiceList";
import { ContactPageComponent } from "../components/mainComponent/ContactUs/ContactPageComponent";
import { MovingSteps } from "../components/mainComponent/AboutUsComponent/MovingStep/MovingSteps";

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactPageComponent />
      <section className="text-component">
        <p>
          At KL CARGO we understand that moving can be both exciting and
          challenging. Whether you’re relocating to a new home or transitioning
          your business, our team is here to make the process smooth and
          stress-free.
        </p>
        <h5 className="blueColor">Here’s what we offer:</h5>
      </section>

      <ServiceList
        classNameForList="infoCard-list-ForAboutUsPage"
        classNameForContainer="cardItem-container-ForAboutUsPage"
        classNameForText="cardItem-text-ForAboutUsPage"
        showImg="no"
      />
      <section className="text-component">
        <p className="aboutUs-title">How we work</p>
        <p>
          KL Cargo Moving Company has developed a finely tuned process for
          expertly tackling moves small and large, local or long distance, with
          any level of complexity.
        </p>
        <p>
          Our combination of training, moving services, technology, and
          professional employees creates a pleasant, stress-free moving
          experience.
        </p>
        <p className="highlight">Here’s how we work:</p>

        {/* Section with steps */}
        <MovingSteps />
      </section>
    </div>
  );
};
