// footer.js

function loadFooter(options = {}) {
  const {
    names = "Maria e João",
    date = "10 de maio de 2025",
    creditName = "António Moita",
    creditLink = ""
  } = options;

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-main serif">${names}</div>
      <div class="footer-date">${date}</div>
      <div class="footer-divider"></div>
      <div class="footer-credit">
        criado com carinho por ${
          creditLink
            ? `<a href="${creditLink}" target="_blank">${creditName}</a>`
            : creditName
        }
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
}