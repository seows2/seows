import Header from "Components/Header";
import useDayTimeContext from "hooks/useDaytime";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  const { dayTime, toggleDayTime } = useDayTimeContext();

  return (
    <>
      <Header />
      <Outlet />
      <div style={{ position: "absolute", top: "95%", zIndex: 1 }}>
        <button onClick={toggleDayTime}>
          {dayTime === "Night" ? "Day" : "Night"}
        </button>
      </div>
    </>
  );
};

export default LayOut;
