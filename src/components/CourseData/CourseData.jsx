import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
// import { CourseDetails } from "./CourseDetails";
export const CourseData = () => {
  const [courseData, setCourseData] = useState([]);
  const [courseDetail, setCourseDetail] = useState([]);
  const [toggle, setToggle] = useState(false);
  let navigate=useNavigate()

  const fetchData = async () => {
    const result = await axios.get(
      "https://api.bricketc.com/bricketc-backend-php/get_all_courses.php"
    );
    setCourseData(result.data.body);
    console.log(result.data.body);
  };

  const onClickHandler =async (item, index) => {
      await setCourseDetail(item)
      navigate("/coursedetails",{state:item})
      setToggle(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

//   <CourseDetails courseDetail={courseDetail} />
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Course Data</h2>
      <hr />
      {courseData.map((item, index) => {
        return (
            
            <button onClick={()=>onClickHandler(item)}>
              <div className="main-course">
                <h4>{item.subjectName}</h4>
                <div className="img-container">
                  <img src={item.imageUrl} alt="img" />
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
              </div>
            </button>
        );
      })}
    </>
  );
};
