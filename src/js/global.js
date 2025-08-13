if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("--dark-theme");
} else if (localStorage.getItem("theme") === "light") {
  // do nothing, light theme is default
} else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("--dark-theme");
}

document.querySelector("#theme-toggle-button").addEventListener("click", () => {
  const theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  document.body.classList.toggle("--dark-theme");
});
