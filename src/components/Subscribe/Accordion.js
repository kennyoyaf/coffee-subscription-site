import React, { useState } from "react";
import Arrowup from "../assets/arrow up.svg";
import Arrowdown from "../assets/arrow-down.png";
import { Accordionstyled } from "../styles/Subscribe/Accordion.styled";

const Accordion = ({
  question,
  heading1,
  heading2,
  heading3,
  option1,
  option2,
  option3,
  handleClick,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Accordionstyled>
      <div
        className="head-text"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        <h4>{question} </h4>
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
          <div className="content" onClick={handleClick}>
            <h6>{heading1}</h6>
            <p>{option1}</p>
          </div>
          <div className="content" onClick={handleClick}>
            <h6>{heading2}</h6>
            <p>{option2}</p>
          </div>
          <div className="content" onClick={handleClick}>
            <h6>{heading3}</h6>
            <p>{option3}</p>
          </div>
        </div>
      )}
    </Accordionstyled>
  );
};

export default Accordion;
