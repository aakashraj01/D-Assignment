import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GeneratedSlogans } from "../GeneratedSlogans/GeneratedSlogans";
import "./SloganMaker.css";

export const SloganMaker = () => {
  const [sloganInput, setSloganInput] = useState("cozy");

  return (
    <>
      <section className="slogan-section">
        <div className="slogan-maker-container app-max-width mx-auto">
          <h1 className="fs-4xl">Free slogan maker</h1>
          <p className="light-font-color my-4 fs-lg">
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <label
            htmlFor="slogan-input"
            className="light-font-color mt-4 mb-1 d-block"
          >
            Word for your slogan
          </label>
          <div className="input-box">
            <input
              onChange={(e) => setSloganInput(e.target.value)}
              value={sloganInput}
              type="text"
              placeholder="Enter slogan keyword"
              id="slogan-input"
            />
            {sloganInput.length > 0 && (
              <IoClose
                onClick={() => setSloganInput("")}
                className="close-icon"
                color="#4d4d4d"
              />
            )}
          </div>
          <div className="my-5">
            <button className="btn primary-btn">Generate Slogans</button>
          </div>
          <hr className="divider" />
          <GeneratedSlogans />
        </div>
      </section>
    </>
  );
};
