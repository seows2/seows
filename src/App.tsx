import { useState } from "react";
import BackGround from "./Components/BackGround";
import Mouse from "./Components/Mouse";
import { currentDay, getHour } from "./utils/date";

export type DayTime = "Night" | "Day";

function App() {
  const [dayTime, setDayTime] = useState<DayTime>(currentDay(getHour()));

  return (
    <div className="App">
      <BackGround dayTime={dayTime} />
      <Mouse dayTime={dayTime} />
    </div>
  );
}

export default App;
