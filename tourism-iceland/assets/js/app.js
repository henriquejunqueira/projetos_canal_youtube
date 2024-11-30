// Carrossel
let meuCarrossel = new bootstrap.Carousel(
  document.getElementById('carrosselImagens'),
  {
    interval: 3000,
    wrap: true,
  }
);

// Botão ir para o topo

// Quando o usuário rolar para baixo, mostra o botão retornar para o topo
window.onscroll = function () {
  let backToTopButton = document.getElementById('backToTop');
  const condition =
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;

  if (condition) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// Quando o usuário clicar no botão, irá rolar até o topo
document.getElementById('backToTop').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Evento de fechar o menu no modo mobile
let navbarToggler = document.getElementById('botaoMenu');
let navbarCollapse = document.getElementById('navbarNav');

// Verifica quando a navbar é fechada
navbarCollapse.addEventListener('hidden.bs.collapse', function () {
  navbarToggler.setAttribute('aria-expanded', 'false');
});

// Verifica quando a navbar é aberta
navbarCollapse.addEventListener('show.bs.collapse', function () {
  navbarToggler.setAttribute('aria-expanded', 'true');
});
