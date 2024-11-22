// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");
  
    // Alternar o menu em dispositivos móveis
    menuBtn.addEventListener("click", function() {
      navbar.classList.toggle("active");
    });
  
    // Adicionar a classe 'scrolled' ao header quando rolar a página
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
  