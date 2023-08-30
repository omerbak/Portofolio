const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarTitle = document.querySelector(".sidebar-title");
const links = document.querySelectorAll(".links li");
const body = document.querySelector("body");
const main = document.querySelector(".main .container");
const sections = document.querySelectorAll("section .container");

toggleBtn.addEventListener("click", function () {
  sidebarTitle.classList.toggle("active");
  console.log("toggle-clicked");
  sidebar.classList.toggle("show-sidebar");
  body.classList.toggle("show-sidebar");
  if (sidebarTitle.classList.contains("scrolled")) {
    sidebarTitle.classList.remove("scrolled");
  } else {
    if (window.scrollY > 85) {
      sidebarTitle.classList.add("scrolled");
    }
  }
  socialIconsAnime = anime({
    targets: ".links li",
    translateX: [-500, 0],
    duration: 200,
    delay: function (el, i, l) {
      return (i + 1) * 300;
    },
    endDelay: 100,
    easing: "easeInOutElastic",
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    sidebarTitle.classList.toggle("active");
    console.log("toggle-clicked");
    sidebar.classList.toggle("show-sidebar");
    body.classList.toggle("show-sidebar");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    if (!body.classList.contains("show-sidebar")) {
      sidebarTitle.classList.add("scrolled");
    }
  } else {
    sidebarTitle.classList.remove("scrolled");
  }
});

socialIconsAnime = anime({
  targets: ".social-icons a",
  translateY: [-1000, 0],
  duration: 300,
  delay: function (el, i, l) {
    return i * 300;
  },

  easing: "easeInOutElastic",
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      entry.target.classList.toggle("container-appear", entry.isIntersecting);
      if (entry.isIntersecting) sectionObserver.unobserve(entry.target);
    },
    {
      treshold: 0.3,
    }
  );
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});
