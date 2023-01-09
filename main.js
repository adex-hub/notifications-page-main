const markAsRead = document.querySelector("header > p");
const notificationCount = document.querySelector(".notif-count");
// const activeClass = document.querySelectorAll(".active");
const activeClasses = Array.from(document.getElementsByClassName("active"));
const notifications = document.querySelectorAll(".notif");

//To mark all as read.
markAsRead.addEventListener("click", () => {
  notificationCount.textContent = "0";
  for (i = 0; i < activeClasses.length; i++) {
    activeClasses[i].classList.remove("active");
  }
});

//Dynamic notifications.
const notifArr = Array.from(notifications);
notifArr.forEach((notif) => {
  notif.addEventListener("click", () => {
    //To toggle active Classes
    notif.classList.toggle("active");

    //To increase notification Count.
    const activeClasses = Array.from(document.getElementsByClassName("active"));
    notificationCount.textContent = activeClasses.length;
  });
});
