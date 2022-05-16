import { useState } from "react";
import BackGround from "./Components/BackGround";
import Mouse from "./Components/Mouse";
import { currentDay, getHour } from "./utils/date";

export type DayTime = "Night" | "Day";

function App() {
  const [dayTime, setDayTime] = useState<DayTime>(currentDay(getHour()));

  const handleClick = () => setDayTime(dayTime === "Night" ? "Day" : "Night");

  return (
    <div className="App">
      <BackGround dayTime={dayTime} />
      <Mouse dayTime={dayTime} />
      <div style={{ position: "absolute", zIndex: 1 }}>
        <button onClick={handleClick}>
          {dayTime === "Night" ? "Day" : "Night"}
        </button>
      </div>
    </div>
  );
}

export default App;
