const getHour = () => new Date().getHours();
const currentDay = (h: number) => (h < 6 || h >= 18 ? "Night" : "Day");

export { getHour, currentDay };
