import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HCloud from "../assets/Images/HeavyCloud.png";
import sunny from "../assets/Images/Clear.png";
const DayShedule = () => {
  const Data = useSelector((state)=> state.Data.hourlydata);
  const clicked = useSelector((state) => state.Data.clicked);
  const apidata = useSelector((state) => state.Data.Data);
  const start = useSelector((state)=> state.Data.start);
  const navigate = useNavigate();
  const handle_back = ()=>{
    navigate('/');
  }
  return (
    <div>
    { clicked === true  && start === true? (
    <div className='bg-blue-sp-dark w-full p-3 min-h-screen  relative'>
    <div onClick={handle_back} className='cursor-pointer absolute top-2 right-2 p-2 bg-bubble-gum rounded-md text-center font-semibold'>Back</div>
    <div>
    <div className="flex  flex-col justify-center gap-2 items-center">
          <img
            className="w-1/4 object-cover object-center text-center"
            src={
              apidata.current.condition.text === "Mist"
                ? HCloud
                : apidata.current.condition.text === "Partly cloudy"
                ? HCloud
                : apidata.current.condition.text === "Sunny"
                ? sunny
                : HCloud
            }
            alt="djd"
          />
          <div className="flex items-center justify-center  text-center w-full text-white">
            <div className="text-8xl font-semibold">
              {apidata.current.feelslike_c}
            </div>
            <div className="text-4xl text-bubble-gum">°C</div>
          </div>
          <div className="text-2xl text-center text-white">
            {apidata.location.name}
          </div>
          <div className="text-md text-center text-silver">
            humidity: {apidata.current.humidity}%
          </div>
          <div className="text-md text-center text-tahiti">
            wind speed: {apidata.current.wind_kph}kmh
          </div>
          <div className="text-md text-center text-bermuda">
            last updated: {apidata.current.last_updated}
          </div>
        </div>
    </div>
    <div className='text-white  flex md:flex-wrap md:flex-row gap-2 flex-col items-center mx-auto my-0 py-2'>
      {Data.map( (mp , idx)=>(
        <div key={idx} className='md:w-[100px] w-full h-[150px] items-center flex flex-col p-3 rounded-lg bg-purple justify-between'>
          <img className='w-[50px] h-[50px]' src={mp.condition.icon} alt="icon" />
          <div className='text-3xl md:text-lg font-semibold'>{mp.feelslike_c}°C</div>
          <div className='text-sm'>{(idx <=9) ? (`0${idx}.00`) : (`${idx}.00`)}</div>
        </div>
      ))}
    </div>
    </div>
    ):(null)
    }
    </div>
  )
}

export default DayShedule;