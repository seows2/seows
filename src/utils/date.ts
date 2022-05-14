export const getHour = () => new Date().getHours();
export const currentDay = (h: number) => (h < 6 || h >= 18 ? "night" : "day");
