import { DayTimeContextInterface } from "interface/dayTime";
import { createContext, useContext } from "react";

export const DayTimeContext = createContext<DayTimeContextInterface>({
  dayTime: "Night",
  toggleDayTime: () => {},
});

const useDayTimeContext = () => {
  const dayTimeContext = useContext(DayTimeContext);

  if (!dayTimeContext) throw Error("dayTimeContext가 존재하지 않습니다.");

  return dayTimeContext;
};

export default useDayTimeContext;
