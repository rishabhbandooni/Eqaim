import React from "react";

function Card3() {
  return (
    <div className="card3">
      <div className="card3Heading">
        <h3>Roadmap</h3>
        <h5>
          <a href="https://www.rishabh-bandooni.dev/" target="blank">
            View
          </a>
        </h5>
      </div>
      <div className="card3Content">
        <ul>
          <li className="planned">
            <span>Planned</span>
            <span className="plannedSpan">2</span>
          </li>
          <li className="progress">
            <span>In-Progress</span>
            <span className="plannedSpan">3</span>
          </li>
          <li className="live">
            <span>Live</span>
            <span className="plannedSpan">1</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card3;
