import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetApiData, Setclicked, SetLatitude, SetLongitude, Setstart } from "../store/Slicers/ApiData";
import SearchBar from "./SearchBar";
import configuredata from "../assets/data/data";
const Navbar = () => {
  const dispatch = useDispatch();
  const [lat, setLat] = useState(28.5922);
  const [long, setLong] = useState(77.242);
  const GetLocation = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    dispatch(SetLongitude(long));
    dispatch(SetLatitude(lat));
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${configuredata.apikey}`,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const data = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${long}`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
    dispatch(SetApiData(data));
    dispatch(Setclicked(true));
    dispatch(Setstart(true));
  };
  return (
    <div className="w-full md:flex-wrap  h-auto flex justify-between items-center p-5">
      <SearchBar/>
      <svg
        onClick={() => {
          GetLocation();
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="cursor-pointer bi bi-geo-alt-fill text-white "
        viewBox="0 0 16 16"
      >
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    </div>
  );
};

export default Navbar;
