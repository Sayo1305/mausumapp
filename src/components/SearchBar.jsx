import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SetApiData,
  SetLatitude,
  SetLongitude,
} from "../store/Slicers/ApiData";
const SearchBar = () => {
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);
  const [clicked, Setclicked] = useState(false);
  const start = useSelector((state) => state.Data.start);
  const dispatch = useDispatch();
  const handle_search = async (e) => {
    if (start === true) {
      Setclicked(false);
      setsearch(e.target.value);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            `${process.env.REACT_APP_API_KEY}`,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      const res = await fetch(
        `https://weatherapi-com.p.rapidapi.com/search.json?q=${search}`,
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      if (res.error === undefined) {
        setdata(res);
      }
    } else {
      window.alert("please provide you location | click the location icon");
    }
  };
  const handle_newplace = async (lat, lon) => {
    dispatch(SetLongitude(lon));
    dispatch(SetLatitude(lat));
    Setclicked(!clicked);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const apidata = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
    dispatch(SetApiData(apidata));
  };
  return (
    <>
      <div className="relative md:w-5/6 w-full">
        <div className="relative group">
          <input
            value={clicked === true ? "" : search}
            type={"text"}
            placeholder="Search"
            onChange={handle_search}
            className="outline-none w-full z-20 p-2  text-white bg-metal rounded-lg "
          />
        </div>

        <div className="absolute w-full">
          <div className="w-full my-1  flex flex-col gap-1">
            {data.length !== 0 && clicked === false
              ? data.map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handle_newplace(m.lat, m.lon);
                    }}
                    className="cursor-pointer hover:shadow-md hover:shadow-white rounded-sm text-center bg-metal p-2 text-white"
                  >
                    {m.name}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
