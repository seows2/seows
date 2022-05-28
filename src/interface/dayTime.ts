export type DayTime = "Night" | "Day";

export interface DayTimeContextInterface {
  dayTime: DayTime;
  toggleDayTime: () => void;
}
