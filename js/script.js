let dayName;
let calendarDay;
let hour;
let date;
const minuteToMils = 60000;
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
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

const getTexts = (date) => {
  return {
    name: dayNames[date.getDay()],

    calendar: `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`,

    time: `${date.getHours()}:${String(date.getMinutes()).padStart(2, 0)}`,
  };
};

const setData = (date) => {
  const { name, calendar, time } = getTexts(date);
//   console.log(`name: ${name}, calendar: ${calendar}, time: ${time}`);
  dayName.innerText = name;
  calendarDay.innerText = calendar;
  hour.innerText = time;
};

const init = () => {
  dayName = document.getElementById("day-name");
  calendarDay = document.getElementById("calendar-day");
  hour = document.getElementById("hour");
  setData(new Date());
  setInterval(() => {
    setData(new Date());
  }, minuteToMils);
};

window.onload = init();
