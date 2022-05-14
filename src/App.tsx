import { useState } from "react";
import { currentDay, getHour } from "./utils/date";

type DayTime = "night" | "day";

function App() {
  const [dayTime, setDayTime] = useState<DayTime>(currentDay(getHour()));

  return <div className="App">{dayTime}</div>;
}

export default App;
