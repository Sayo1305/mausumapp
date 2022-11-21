import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetHourdata, SetThreedaydata } from "../store/Slicers/ApiData";
import { useNavigate } from "react-router-dom";
import configuredata from "../assets/data/data";
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
            `${configuredata.apikey}`,
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
    <div className="container w-full flex flex-wrap gap-3 h-full justify-center">
      {clicked === true && start === true ? (
        <>
          <div
            onClick={() => {
              get_hour_data(0);
            }}
            className=" box  cursor-pointer"
          >
              <span></span>
              <div className="content">
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
                <div className="text-xl font-semibold text-black">
                  {ThreeDay.forecast.forecastday[0].date}
                </div>
                <div className="text-bg font-semibold text-black">Today</div>
              </div>
          </div>
          <div
            onClick={() => {
              get_hour_data(1);
            }}
            className="box cursor-pointer"
          >
              <span></span>
              <div className="content">
                <img
                  className="w-[100px] h-[100px]"
                  src={ThreeDay.forecast.forecastday[1].day.condition.icon}
                  alt=""
                />
                <div className="text-4xl font-semibold">
                  {ThreeDay.forecast.forecastday[1].day.maxtemp_c}
                  <span className="text-bubble-gum text-2xl">°C</span> |{" "}
                  {ThreeDay.forecast.forecastday[1].day.mintemp_c}
                  <span className="text-bubble-gum text-2xl">°C</span>
                </div>
                <div className="text-xl font-semibold text-black">
                  {ThreeDay.forecast.forecastday[1].date}
                </div>
                <div className="text-bg font-semibold text-black">Tommorow</div>
              </div>
          </div>
          <div
            onClick={() => {
              get_hour_data(2);
            }}
            className="box cursor-pointer"
          >
            <div className="">
              <span></span>
              <div className="content">
                <img
                  className="w-[100px] h-[100px]"
                  src={ThreeDay.forecast.forecastday[2].day.condition.icon}
                  alt=""
                />
                <div className="text-4xl font-semibold">
                  {ThreeDay.forecast.forecastday[2].day.maxtemp_c}
                  <span className="text-bubble-gum text-2xl">°C</span> |{" "}
                  {ThreeDay.forecast.forecastday[2].day.mintemp_c}
                  <span className="text-bubble-gum text-2xl">°C</span>
                </div>
                <div className="text-xl font-semibold text-black">
                  {ThreeDay.forecast.forecastday[2].date}
                </div>
                <div className="text-bg font-semibold text-black">Day after Tommorow</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div class="neon text-center">Get realtime</div>
          <div class="flux text-center">Data of your place</div>
        </div>
      )}
    </div>
  );
};

export default RightSidedata;
