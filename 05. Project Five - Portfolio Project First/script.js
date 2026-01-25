document.addEventListener("DOMContentLoaded", () => {
  console.log(`DOM Content Loaded Successfully !!!`);
  const darkTheme = document.querySelector(".dark-theme");
  const application = document.querySelector("body");
  new Typed("#dynamic-text", {
    strings: ["DropXOut", "Youtuber", "Teacher", "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelayed: 1000,
  });

  darkTheme.addEventListener("click", () => {
    console.log("Dark Theme Event Listener Working");
    application.classList.toggle("night");
  });
});
