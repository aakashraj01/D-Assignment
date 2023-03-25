import React from "react";
import { featuresData } from "../../db";
import "./Features.css";

export const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="features-wrapper app-max-width mx-auto py-5">
          {featuresData.map((feat) => {
            const { id, icon, label, description } = feat;
            return (
              <div key={id} className="feature">
                <img src={icon} alt={`${label}-feature-icon`} />
                <div className="py-2 fw-500 fs-lg">{label}</div>
                <p className="light-font-color">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
