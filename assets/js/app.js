const currentTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let mid = "AM";

  mid = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;

  hour = updateTime(hour);
  minute = updateTime(minute);
  second = updateTime(second);
  document.querySelector("#time").innerHTML = `${hour}:${minute}`;
  document.querySelector("#sec").innerHTML = `${second}`;
  document.querySelector("#mid").innerHTML = `${mid}`;

  let currentDate = date.getDate();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let month_name = [
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

  let showDay = document.querySelectorAll(".days span");
  document.querySelector(
    "#show-date"
  ).innerHTML = `${month_name[month]} ${currentDate}, ${year}.`;
  showDay[day].style.opacity = "1";
};

const updateTime = (e) => {
  if (e < 10) return "0" + e;
  else return e;
  console.log(e);
};

setInterval(currentTime, 1000);
