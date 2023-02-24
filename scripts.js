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

const sr = ScrollReveal({
  distance: "70px",
  duration: 2700,
  reset: true,
});

sr.reveal(".info-section", { delay: 200, origin: "bottom" });
sr.reveal(".img-section", { delay: 350, origin: "top" });
