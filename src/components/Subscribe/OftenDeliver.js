import React from "react";
import { boxData } from "../assets/data";
import { useState } from "react";
import Box from "./Box";
import { OftenDeliverstyled } from "../styles/Subscribe/OftenDeliver.styled";
import Arrowup from "../assets/arrow up.svg";
import Arrowdown from "../assets/arrow-down.png";

const OftenDeliver = ({ handleData }) => {
  const handleClick = (data) => {
    handleData(data, "fifth");
  };

  const [showInfo, setShowInfo] = useState(false);
  return (
    <OftenDeliverstyled>
      <div
        className="head-text"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        <h4 id="five">How often should we deliver?</h4>
        <div className="btn">
          {showInfo ? (
            <img src={Arrowdown} alt={Arrowdown} />
          ) : (
            <svg
              width="19"
              height="12"
              viewBox="0 0 19 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3629 11.9238L18.1913 9.0954L9.09566 -0.000263214L0 9.0954L2.82843 11.9238L9.09521 5.65661L15.3629 11.9238Z"
                fill="#0E8784"
              />
            </svg>
          )}
        </div>
      </div>
      {showInfo && (
        <div className="main-items">
          {boxData.slice(12, 15).map((theBox, i) => (
            <Box key={i} {...theBox} handleClick={handleClick} />
          ))}
        </div>
      )}
    </OftenDeliverstyled>
  );
};

export default OftenDeliver;
