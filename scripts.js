let darkmode = document.querySelector("#darkmod");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};

let menuBtn = document.querySelector("#menu-icon");
let menu = document.querySelector(".nav-menu");

menuBtn.onclick = () => {
  if (menuBtn.classList.contains("bx-menu")) {
    menuBtn.classList.replace("bx-menu", "bx-x");
    menu.classList.replace("close", "open");
  } else {
    menuBtn.classList.replace("bx-x", "bx-menu");
    menu.classList.replace("open", "close");
  }
};
