import React from "react";
import { useSelector } from "react-redux";
import HCloud from "../assets/Images/HeavyCloud.png";
import sunny from "../assets/Images/Clear.png";
const LeftSidedata = () => {
  const data = useSelector((state) => state.Data.Data);
  const clicked = useSelector((state) => state.Data.clicked);
  const start = useSelector((state)=> state.Data.start);
  return (
    <div>
      {clicked === true && start === true ? (
        <div className="flex  flex-col justify-center gap-2 items-center">
          <img
            className="w-1/2 md:w-5/6 object-cover object-center text-center"
            src={
              data.current.condition.text === "Mist"
                ? HCloud
                : data.current.condition.text === "Partly cloudy"
                ? HCloud
                : data.current.condition.text === "Sunny"
                ? sunny
                : HCloud
            }
            alt="djd"
          />
          <div className="flex items-center justify-center  text-center w-full text-white">
            <div className="text-8xl font-semibold">
              {data.current.feelslike_c}
            </div>
            <div className="text-4xl text-bubble-gum">°C</div>
          </div>
          <div className="text-2xl text-center text-white">
            {data.location.name}
          </div>
          <div className="text-md text-center text-silver">
            humidity: {data.current.humidity}%
          </div>
          <div className="text-md text-center text-tahiti">
            wind speed: {data.current.wind_kph}kmh
          </div>
          <div className="text-md text-center text-bermuda">
            last updated: {data.current.last_updated}
          </div>
        </div>
      ) : <div className="text-white neonText font-semibold flex items-center justify-center text-7xl text-center w-full mx-0 h-[60vh] my-auto">
        mausum app
      </div>
      }
    </div>
  );
};

export default LeftSidedata;
