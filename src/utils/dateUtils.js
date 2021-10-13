// import moment from "moment";

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => (mins < 10 ? `0${mins}` : mins);

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const roundMultiple15 = (num) => Math.round(Number(num) / 15) * 15;

export const hours = Array(24)
  .fill()
  .map((val, index) => index);

export const getMonths = (weekDates, weekStartDate, monthsArray) => {
  const Month = weekDates.find(
    (day) => day.getMonth() !== weekStartDate.getMonth()
  );
  if (Month) {
    return `${monthsArray[weekStartDate.getMonth()]} - ${
      monthsArray[Month.getMonth()]
    }`;
  }
  return monthsArray[weekStartDate.getMonth()];
};


