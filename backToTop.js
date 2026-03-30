// Seleciona o botão
const backToTop = document.getElementById("backToTop");

// Mostra ou esconde o botão quando se faz scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scroll suave até ao topo quando clicado
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});