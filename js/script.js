// Função de saudação dinâmica baseada no horário
function carregarSaudacao() {
  const hora = new Date().getHours();
  const msg = document.getElementById("mensagemBoasVindas");

  let saudacao =
    hora < 12 ? "Bom dia! ☀️" :
    hora < 18 ? "Boa tarde! 🌤️" :
    "Boa noite! 🌙";

  if (msg) {
    msg.innerText = saudacao + " Bem-vinda!";
  }
}

// Função de boas-vindas com modal
function mensagemBoasVindas() {
  let hora = new Date().getHours();
  let mensagem = "";

  if (hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }

  const elemento = document.getElementById("mensagemModal");

  if (elemento) {
    elemento.innerText = mensagem + " Bem-vindo ao Benjamin Pet Shop 🐾";
  }

  const modalElement = document.getElementById("modalBoasVindas");

  if (modalElement) {
    let modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}

// Executa ao carregar a página
window.onload = function () {
  carregarSaudacao();
  mensagemBoasVindas();
};