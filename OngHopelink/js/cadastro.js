document.addEventListener("DOMContentLoaded", () => {
  const btnHome = document.querySelector("#btn-default");

  // ===== BOTÃO "HOME" =====
  if (btnHome) {
    btnHome.addEventListener("click", (event) => {
      event.preventDefault(); // evita envio de form
      window.location.href = "index.html";
    });
  }
});
