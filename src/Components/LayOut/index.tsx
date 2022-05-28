import useDayTimeContext from "hooks/useDaytime";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  const { dayTime, toggleDayTime } = useDayTimeContext();

  return (
    <>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <button onClick={toggleDayTime}>
          {dayTime === "Night" ? "Day" : "Night"}
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default LayOut;
