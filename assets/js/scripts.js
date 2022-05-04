let button = document.getElementById("mode-selector");
let body = document.getElementsByTagName("body");
let h1 = document.getElementById("page-title");


button.addEventListener("click", function (e) {
  button.classList.toggle("dark-mode");
  body[0].classList.toggle("dark-mode");

  changeTextMode();
});

function changeClassDarkMode() {
  button.classList.toggle("dark-mode");
  body[0].classList.toggle("dark-mode");
}

function changeTextMode() {
  const darkMode = "Dark Mode";
  const lightMode = "Light Mode";

  if (body[0].classList.contains("dark-mode")) {
    h1.innerText = darkMode + " ON";
    button.innerText = lightMode;
  } else {
    h1.innerText = lightMode + " ON";
    button.innerText = darkMode;
  }
}
