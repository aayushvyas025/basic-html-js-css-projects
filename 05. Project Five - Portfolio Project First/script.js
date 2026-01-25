document.addEventListener("DOMContentLoaded", () => {
  console.log(`DOM Content Loaded Successfully !!!`);
  const darkTheme = document.querySelector(".dark-theme");
  const application = document.querySelector("body");
  darkTheme.addEventListener("click", () => {
    console.log("Dark Theme Event Listener Working");
    application.classList.toggle("night");

  });
});
