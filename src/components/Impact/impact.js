import React from "react";
import "./impact.css";

function Impact() {
  return (
    <div className="impact-section">
      <div className="impact-title">
        <strong>
          <h1>OUR IMPACT</h1>
        </strong>
      </div>
      <div className="impact-contaner">
        <div className="impact">
          <span className="span-title">25+</span>
          <span className="span-details">STATES</span>
          <span className="span-info">
            <p>Childern and there fimily areinpacters every yreas</p>
          </span>
        </div>
        <div className="impact">
          <span className="span-title">2000+</span>
          <span className="span-details">VALLAGEs</span>
          <span className="span-info">
            <p> and slums anre reached out accress to contry</p>
          </span>
        </div>
        <div className="impact">
          <span className="span-title">400+</span>
          <span className="span-details">PROJECTs</span>
          <span className="span-info">
            <p>foused on eduation ,healths and women empowerment</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Impact;
