import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetHourdata, SetThreedaydata } from "../store/Slicers/ApiData";
import { useNavigate } from "react-router-dom";
const RightSidedata = () => {
  const lat = useSelector((state) => state.Data.lat);
  const long = useSelector((state) => state.Data.long);
  const clicked = useSelector((state) => state.Data.clicked);
  const start = useSelector((state) => state.Data.start);
  const ThreeDay = useSelector((state) => state.Data.threedaydata);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const get_hour_data = (idx) => {
    dispatch(SetHourdata(ThreeDay.forecast.forecastday[idx].hour));
    navigate("/Hour");
    // console.log(Data.forecast.forecastday[idx].hour);
  };

  useEffect(() => {
    const get_data = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "74515798fbmshe0dba6869dec757p1d1ad6jsn2cea12992d1a",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      const apidata = await fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat},${long}&days=3`,
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      dispatch(SetThreedaydata(apidata));
    };
    get_data();
    // eslint-disable-next-line
  }, [lat, long]);

  return (
    <div className="w-full flex flex-wrap gap-3 h-full justify-center">
      {clicked === true && start === true ? (
        <>
          <div
            onClick={() => {
              get_hour_data(0);
            }}
            className="flex flex-col gap-2 p-3 justify-center items-center w-[300px]  h-[300px] bg-metal text-white rounded"
          >
            <img
              className="w-[100px] h-[100px]"
              src={ThreeDay.forecast.forecastday[0].day.condition.icon}
              alt=""
            />
            <div className="text-4xl font-semibold">
              {ThreeDay.forecast.forecastday[0].day.maxtemp_c}
              <span className="text-bubble-gum text-2xl">°C</span> |{" "}
              {ThreeDay.forecast.forecastday[0].day.mintemp_c}
              <span className="text-bubble-gum text-2xl">°C</span>
            </div>
            <div className="text-xl font-semibold text-bermuda">
              {ThreeDay.forecast.forecastday[0].date}
            </div>
            <div className="text-bg font-semibold text-bermuda">Today</div>
          </div>
          <div
            onClick={() => {
              get_hour_data(1);
            }}
            className="flex flex-col gap-2 p-3 justify-center items-center w-[300px]  h-[300px] bg-metal text-white rounded"
          >
            <img
              className="w-[100px] h-[100px]"
              src={ThreeDay.forecast.forecastday[1].day.condition.icon}
              alt=""
            />
            <div className="text-4xl font-semibold">
              {ThreeDay.forecast.forecastday[1].day.maxtemp_c}
              <span className="text-bubble-gum text-2xl">°C</span> |{" "}
              {ThreeDay.forecast.forecastday[0].day.mintemp_c}
              <span className="text-bubble-gum text-2xl">°C</span>
            </div>
            <div className="text-xl font-semibold text-bermuda">
              {ThreeDay.forecast.forecastday[1].date}
            </div>
            <div className="text-bg font-semibold text-bermuda">Tommorow</div>
          </div>
          <div
            onClick={() => {
              get_hour_data(2);
            }}
            className="flex flex-col gap-2 p-3 justify-center items-center w-[300px]  h-[300px] bg-metal text-white rounded"
          >
            <img
              className="w-[100px] h-[100px]"
              src={ThreeDay.forecast.forecastday[2].day.condition.icon}
              alt=""
            />
            <div className="text-4xl font-semibold">
              {ThreeDay.forecast.forecastday[2].day.maxtemp_c}
              <span className="text-bubble-gum text-2xl">°C</span> |{" "}
              {ThreeDay.forecast.forecastday[0].day.mintemp_c}
              <span className="text-bubble-gum text-2xl">°C</span>
            </div>
            <div className="text-xl font-semibold text-bermuda">
              {ThreeDay.forecast.forecastday[2].date}
            </div>
            <div className="text-bg font-semibold text-bermuda">
              Day after Tommorow
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default RightSidedata;
