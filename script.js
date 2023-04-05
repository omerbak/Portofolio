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
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    sidebarTitle.classList.toggle("active");
    console.log("toggle-clicked")
    sidebar.classList.toggle("show-sidebar");
    body.classList.toggle("show-sidebar")
  })
})