const header = document.querySelector("header")
const menuBtn = document.querySelector("#menu-btn")
const closeMenuBtn = document.querySelector("#close-menu-btn")


menuBtn.addEventListener("click", () => {
    header.classList.toggle("mobile-menu");
});

closeMenuBtn.addEventListener("click", () => {
   menuBtn.click();
});

document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('doe');
  if (botao) {
    botao.addEventListener('click', function() {
      window.location.href = 'cadastro.html';
    });
  }
});