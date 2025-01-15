// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");
  
    menuBtn.addEventListener("click", function() {
      navbar.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  
document.getElementById('menu-btn').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('active');
});
  