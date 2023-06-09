import React from "react";
import { useState } from "react";
import { StyledHeader } from "./styles/Header.styled";
import Combinedshape from "./assets/Combined-Shape.svg";
import Hamburger from "./assets/Hamburger.svg";
import Cancel from "../components/assets/Cancel.svg";
import coffeeroasters from "./assets/coffeeroasters.png";
import { useEffect } from "react";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <StyledHeader>
      <div className="coffeeheader">
        <div className="roasters">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3891 3.44702C10.8747 -0.0645378 5.66533 -0.570045 2.77639 2.322C-0.114045 5.21254 0.391444 10.4221 3.89987 13.9352C4.83584 14.8712 5.91432 15.5867 7.05279 16.0997C7.42629 13.9292 8.49726 11.8426 10.1232 10.1296C9.58474 9.93761 9.03275 9.77561 8.45676 9.61811C5.04584 8.6821 3.35088 5.83655 2.95489 2.5005C3.28241 2.89436 3.5806 3.30747 3.87792 3.71937C4.45478 4.51854 5.02833 5.31312 5.80632 5.95355C7.01657 6.95009 8.345 7.33478 9.79833 7.75564C9.85444 7.77188 9.91074 7.78819 9.96723 7.80458C10.6557 8.00409 11.2542 8.29959 11.8032 8.6446C13.2462 7.59008 14.8736 6.88807 16.5536 6.59856C16.0421 5.46005 15.3251 4.38303 14.3891 3.44702ZM8.44626 16.9337C8.66976 14.7602 9.72274 12.6347 11.4102 10.9471C14.9246 7.43558 20.134 6.92857 23.0229 9.82211C25.9134 12.7127 25.4094 17.9222 21.8965 21.4353C20.209 23.1228 18.0835 24.1758 15.9101 24.4008C15.6206 24.4293 15.3341 24.4443 15.0536 24.4443C13.1847 24.4443 11.5152 23.7888 10.2852 22.5588C8.86925 21.1443 8.21527 19.1463 8.44626 16.9337ZM13.5866 18.7172C14.7386 17.8382 15.9851 17.4902 17.3411 17.1197C20.752 16.1837 22.4454 13.3382 22.8429 10.0021C22.5182 10.3938 22.2222 10.8041 21.927 11.2132C21.3484 12.0152 20.7732 12.8125 19.9915 13.4552C18.7775 14.4533 17.446 14.8387 15.9862 15.2611L15.8306 15.3062C12.4932 16.2752 10.8432 19.0968 10.4622 22.3803C10.791 21.9853 11.0922 21.5752 11.3918 21.1673C12.0421 20.2817 12.685 19.4063 13.5866 18.7172Z"
              fill="#0E8784"
            />
          </svg>
          <img src={coffeeroasters} alt="coffeeroasters" />
        </div>
        <div className="hamburger-list">
          <div onClick={() => setShowLinks(!showLinks)} className="Hamburger">
            {showLinks ? (
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.46447 0.84266C2.87868 0.256874 1.92893 0.256874 1.34315 0.84266C0.757362 1.42845 0.757362 2.37819 1.34315 2.96398L4.87868 6.49951L1.34315 10.035C0.757362 10.6208 0.757362 11.5706 1.34315 12.1564C1.92893 12.7422 2.87868 12.7422 3.46447 12.1564L7 8.62083L10.5355 12.1564C11.1213 12.7422 12.0711 12.7422 12.6569 12.1564C13.2426 11.5706 13.2426 10.6208 12.6569 10.035L9.12132 6.49951L12.6569 2.96398C13.2426 2.37819 13.2426 1.42845 12.6569 0.842661C12.0711 0.256874 11.1213 0.256874 10.5355 0.842661L7 4.37819L3.46447 0.84266Z"
                  fill="#333D4B"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5C16 2.32843 15.3284 3 14.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM0 7.5C0 6.67157 0.671573 6 1.5 6H14.5C15.3284 6 16 6.67157 16 7.5C16 8.32843 15.3284 9 14.5 9H1.5C0.671573 9 0 8.32843 0 7.5ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15H14.5C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12H1.5Z"
                  fill="#333D4B"
                />
              </svg>
            )}
          </div>

          {(showLinks || screenWidth > 600) && (
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/subscribe">Create Your Plan</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}
