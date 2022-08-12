import React from "react";

export const WeatherItem = ({ weatherData }) => {
  return (
    <>
      {weatherData.length > 0 &&
        weatherData.map((elm) => {
          return (
            <div className="main-container">
              <div className="weather-details">
                <img src={elm.current.condition.icon} alt="cloud-icon" />
                <label>{elm.current.condition.text}</label>
              </div>
              <div className="">
                <h4>{elm.current.temp_c}</h4>
                <h3>{elm.location.name}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
};
