import React from "react";
import "./WaveContainer2.css";

const WaveContainer2 = () => {
  return (
    <div className="WaveContainer2">
      <div className="wave-wrap2">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="wave"
        >
          <path
            fill="#0cde92"
            d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,32C672,32,768,64,864,64C960,64,1056,32,1152,16C1248,0,1344,0,1392,0L1440,0L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WaveContainer2;
