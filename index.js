const MenuIcon = document.querySelector(".menu-icon");
const MenuContent = document.querySelector(".mobile-menu-content");
const Children = document.querySelectorAll(".mobile-menu-content > li");
const close = document.getElementById("close-menu");

console.log(Children);

MenuIcon.addEventListener("click", () => {
  MenuContent.classList.add("show-menu");
});

close.addEventListener("click", () => {
  MenuContent.classList.remove("show-menu");
});

// const phoneInputField = document.getElementById("#phone");
// const phoneInput = window.intlTelInput(phoneInputField, {
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });
