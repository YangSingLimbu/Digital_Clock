import React, { useEffect, useState } from "react";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatTimeValue(timeValue) {
  return timeValue >= 10 ? "" + timeValue : "0" + timeValue;
}

function DigialWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hour = formatTimeValue(time.getHours());
  const min = formatTimeValue(time.getMinutes());
  const sec = formatTimeValue(time.getSeconds());
  const weekday = () => {
    return weekdays[time.getDay()];
  };
  const getFormattedDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };
  return (
    <div className="watch-container">
      <p>{weekday()}</p>
      <span className="time">
        {hour}:{min}:{sec}
      </span>
      <p>{getFormattedDate()}</p>
    </div>
  );
}

export default DigialWatch;
