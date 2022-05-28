import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DayTime } from "interface/dayTime";
import { currentDay, getHour } from "utils/date";
import Mouse from "../Mouse";

const LayOut = () => {
  const [dayTime, setDayTime] = useState<DayTime>(currentDay(getHour()));

  const handleClick = () => setDayTime(dayTime === "Night" ? "Day" : "Night");

  return (
    <>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <button onClick={handleClick}>
          {dayTime === "Night" ? "Day" : "Night"}
        </button>
      </div>
      <Mouse dayTime={dayTime} />
      <Outlet />
    </>
  );
};

export default LayOut;
