import React from "react"
import { useState } from "react"
import { boxData } from "../assets/data"
import Box from "./Box"
import { HowCoffeestyled } from "../styles/Subscribe/HowCoffee.styled"
import Arrowup from "../assets/arrow up.svg"
import Arrowdown from "../assets/arrow-down.png"

const HowCoffee = ({ handleData }) => {
  const handleClick = data => {
    handleData(data, "first")
  }

  const [showInfo, setShowInfo] = useState(false)

  return (
    <HowCoffeestyled>
      <div
        className="head-text"
        onClick={() => {
          setShowInfo(!showInfo)
        }}
      >
        <h4 id="one">How do you drink your coffee?</h4>
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
          {boxData.slice(0, 3).map((theBox, i) => (
            <Box key={i} {...theBox} handleClick={handleClick} />
          ))}
        </div>
      )}
    </HowCoffeestyled>
  )
}

export default HowCoffee
