const markAsRead = document.querySelector("header > p");
const notificationCount = document.querySelector(".notif-count");
const activeClass = document.querySelectorAll(".active");

markAsRead.addEventListener("click", () => {
  notificationCount.textContent = "0";
  for (i = 0; i < 4; i++) {
    activeClass[i].classList.remove("active");
  }
});