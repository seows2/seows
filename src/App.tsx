import { useState } from "react";
import Mouse from "./Components/Mouse";
import { currentDay, getHour } from "./utils/date";

export type DayTime = "night" | "day";

function App() {
  const [dayTime, setDayTime] = useState<DayTime>(currentDay(getHour()));

  return (
    <div className="App">
      <Mouse dayTime={dayTime} />
    </div>
  );
}

export default App;
