import React, { useState } from "react";
import "./Slogan.css";

export const Slogan = ({ slogan }) => {
  const [copiedSlogan, setCopiedSlogan] = useState(false);
  return (
    <div
      onClick={() => setCopiedSlogan(true)}
      className="slogan"
      data-tooltip={copiedSlogan ? "copied!" : "Click to copy"}
    >
      {slogan}
    </div>
  );
};
