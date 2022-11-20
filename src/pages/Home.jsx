import React from "react";
import LeftSidedata from "../components/LeftSidedata";
import Navbar from "../components/Navbar";
import RightSidedata from "../components/RightSidedata";

const Home = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="bg-blue-sp-light w-full md:w-1/4 h-screen">
          <Navbar />
          <LeftSidedata />
        </div>
        <div className="bg-blue-sp-dark w-full md:w-3/4 md:h-screen h-auto p-5 gap-5 flex flex-wrap">
          <RightSidedata />
        </div>
      </div>
    </>
  );
};

export default Home;
