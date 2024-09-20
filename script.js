const sendButton = document.querySelector(".button-send");
const inputMessage = document.querySelector(".input-message");
const buttonMenu = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

sendButton.addEventListener("click", () => {
  alert("Message sent successfully");
  document.querySelectorAll(".contact-me input").forEach((input) => {
    input.value = "";
  });
  inputMessage.value = "";
});

buttonMenu.addEventListener("click", () => {
  if (menuList.style.display === "none" || menuList.style.display === "") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});
