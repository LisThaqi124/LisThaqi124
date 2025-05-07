function toggle(id) {
  const element = document.getElementById(id);
  element.hidden = !element.hidden;
}

const toggleButton = document.querySelector(".circle");
toggleButton.addEventListener("click", () => {
  const sidebar = document.querySelector(".item2");
  sidebar.classList.toggle("collapsed");
  sidebar.classList.toggle("expanded");
});

const button = document.getElementById("notify-js");
const box = document.querySelector(".notification");
const list = document.getElementById("collapsed_notification");

const messages = [
  "You have a new message",
  "Someone sent you a message!",
  "Someone sent you a friend request!",
  "Someone liked your comment!",
  "Someone liked your photo!",
];
localStorage.setItem("notificationMessages", JSON.stringify(messages));
button.addEventListener("click", () => {
  const stored = localStorage.getItem("notificationMessages");
  const notifications = JSON.parse(stored);
  list.innerHTML = "";
  notifications.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    list.appendChild(li);
  });

  box.style.display = "block";
  if ((box.style.display = "block")) {
    box.addEventListener("click", () => {
      box.style.display = "none";
    });
  }
});
