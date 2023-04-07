const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarTitle = document.querySelector(".sidebar-title")
const links = document.querySelectorAll(".links li");
const body = document.querySelector("body")
console.log(body)
toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebarTitle.classList.toggle("active");
  console.log("toggle-clicked")
  sidebar.classList.toggle("show-sidebar");
  body.classList.toggle("show-sidebar")
  socialIconsAnime = anime({
    targets: ".links li",
    translateX: [-500, 0],
    duration: 200,
    delay: function(el, i, l){
      return (i+1) * 300;
    },
    endDelay: 100,
    easing: "easeInOutElastic",
  })
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    sidebarTitle.classList.toggle("active");
    console.log("toggle-clicked")
    sidebar.classList.toggle("show-sidebar");
    body.classList.toggle("show-sidebar")
  })
})


socialIconsAnime = anime({
  targets: ".social-icons a",
  translateY: [-1000, 0],
  duration: 500,
  delay: function(el, i, l){
    return i * 500;
  },
  
  easing: "linear",
})

mainButtonAnime = anime({
  targets: ".main-btn",
  translateX: ["-1000px", "0px"],
  duration: 500,
  delay: 1000,
  easing: "linear"
})

