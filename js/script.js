let calendarDay, weekDay, date;
let clockInterval, currentTime;

const HOUR_OPTIONS = { hour: "numeric", minute: "numeric", hour12: false };
const WEEK_DAY_OPTIONS = { weekday: "long" };
const CALENDAR_DAY_OPTIONS = { year: "numeric", month: "long", day: "numeric" };
const ONE_MINUTE = 60_000;

function updateDay() {
  calendarDay = new Intl.DateTimeFormat("en-US", CALENDAR_DAY_OPTIONS).format(
    date
  );
  document.getElementById("calendar-day").innerText = calendarDay;

  weekDay = new Intl.DateTimeFormat("en-US", WEEK_DAY_OPTIONS).format(date);
  document.getElementById("day-name").innerText = weekDay;
}

function calendarClock() {
  date = new Date();
  currentTime = new Intl.DateTimeFormat("en-US", HOUR_OPTIONS).format(date);
  document.getElementById("hour").innerText = currentTime;

  if (!calendarDay || currentTime == "00:00") {
    updateDay();
  }
}

function checkInterval() {
  date = new Date();

  const newTime = new Intl.DateTimeFormat("en-US", HOUR_OPTIONS).format(date);
  if (!currentTime) {
    currentTime = newTime;
    calendarClock();
  }
  if (currentTime != newTime) {
    console.log("new minute", currentTime);
    clearInterval(clockInterval);
    clockInterval = setInterval(calendarClock, ONE_MINUTE);
    calendarClock();
  }
}

clockInterval = setInterval(checkInterval, 1000);
