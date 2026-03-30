document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("wedding-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nome: document.getElementById("nome").value,
      sobrenome: document.getElementById("sobrenome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      presenca: document.getElementById("presenca").value,
      adultos: document.getElementById("adultos").value,
      criancas: document.getElementById("criancas").value,
      restricoes: document.getElementById("restricoes").value,
      musica: document.getElementById("musica").value,
      comentarios: document.getElementById("comentarios").value
    };

    fetch("https://script.google.com/macros/s/AKfycbz1wGrrEab5VMJ18d4pNiZHS8UQbc0mksGwYYZGR6IizY3A6CZSXUHHXWwz-GPQBmEb/exec", {
      method: "POST",
      mode: "no-cors", // importante para evitar erro CORS
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("Resposta enviada com sucesso!");
      form.reset();
    })
    .catch(() => {
      alert("Erro ao enviar. Tenta novamente.");
    });
  });
});