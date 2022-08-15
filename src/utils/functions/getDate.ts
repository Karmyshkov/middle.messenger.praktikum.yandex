export function getDate(time: string) {
  const date = new Date(time);
  return {
    minute: date.getMinutes(),
    hour: date.getHours(),
    day: date.getDay() + 1,
    month: date.getMonth(),
  };
}
