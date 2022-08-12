import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const CourseDetails = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  console.log("props", location.state);

  useEffect(() => {
    setData([location.state]);
  }, []);
  return (
    <>
      {data?.map((item) => {
        return (
          <div className="dlt-course">
            <div className="dtl-box1">
              <img src={item.imageUrl} alt="" className="dtl-img" />
            </div>
            <div className="dtl-box">
              <h1>{item.subjectName}</h1>
              <h3>{item.name}</h3>
              <p>{item.info}</p>
              <label htmlFor="">Duration {item.duration}</label>
              <h2>Rs.{item.amount}</h2>
            </div>
            <Link to='/' style={{textDecoration:'none',height:'25px',width:'80px',backgroundColor:'black',color:'white',textAlign:'center'}}>Back</Link>
          </div>
        );
      })}
    </>
  );
};
