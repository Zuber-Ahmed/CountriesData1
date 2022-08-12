import React, { useState, useEffect ,useRef } from "react";
import axios from "axios";
import { WeatherItem } from "./WeatherItem";


export const FetchedData = () => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState([]);
const inputRef=useRef(null)
  const getData =async () =>{
        // debugger;
       const result = await axios.get(
         `https://api.weatherapi.com/v1/current.json?key=a09503f14ef34d3b813183738223007&q=${query}&aqi=no`
       )
       setWeatherData([result.data])
       console.log("working", result.data);
    }
    console.log("state===>", weatherData);

// useCallback(()=>{
//     setWeatherData((data)=>[data.data])
//     // console.log("callback",data)
// },[weatherData])

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getData()
    }, 800);
    inputRef.current.focus()
    return () => clearTimeout(timerOut);
  }, [query]);


  return (
    <>
      <input
        type="text"
        placeholder="Enter City Name"
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr />
      <br />
      <WeatherItem weatherData={weatherData}/>
    </>
  );
};

// `(https://api.api-ninjas.com/v1/X-Api-Key=${MY_OTHER_KEY}weather?city=mumbai/)`
// const MY_OTHER_KEY = 'oNU+8lk5f3WjQBY1n1aDGw==tDBlrnp0L1pMmrNT'

// let url = `http://myotherapi?key=${MY_OTHER_KEY}&q=${query}`