import React from "react";
import { ReactComponent as TickMark } from "../assests/blue-tick.svg";

const CustomProgressHeader = ({ steps, curStep }) => {
  return (
    <div className="customerProgresscontainer">
      {steps.map((step, index) => {
        return (
          <>
            {index + 1 >= curStep ? (
              <div
                className={`pointContainers ${
                  +curStep === index + 1 ? "bg-blue" : "bg-gray"
                }`}
              >
                <p className="pointTxt">{index + 1}</p>
              </div>
            ) : (
              <div className="mr-2">
                <TickMark />
              </div>
            )}
            <p className="pointTxt">{step}</p>

            {index < steps.length - 1 && <div className="pointLink" />}
          </>
        );
      })}
    </div>
  );
};
export default CustomProgressHeader;
