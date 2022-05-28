import { DayTime } from "interface/dayTime";
import { ReactNode, useState } from "react";
import { currentDay, getHour } from "utils/date";
import { DayTimeContext } from "hooks/useDaytime";

type DayTimeProviderProps = {
  children: ReactNode;
};

const DayTimeProvider = ({ children }: DayTimeProviderProps) => {
  const [dayTime, setDayTime] = useState<DayTime>(currentDay(getHour()));

  const toggleDayTime = () => setDayTime(dayTime === "Night" ? "Day" : "Night");

  return (
    <DayTimeContext.Provider value={{ dayTime, toggleDayTime }}>
      {children}
    </DayTimeContext.Provider>
  );
};

export default DayTimeProvider;
