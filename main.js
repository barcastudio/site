// main.js - animações e utilidades do site

document.addEventListener("DOMContentLoaded", function(){

  // Atualiza automaticamente o ano no rodapé
  const ano = new Date().getFullYear();
  document.getElementById("ano").textContent = ano;
  document.getElementById("ano2").textContent = ano;
  document.getElementById("ano3").textContent = ano;
  document.getElementById("ano4").textContent = ano;

  // Animação: fade-in / slide-up quando elementos entram na viewport
  const faders = document.querySelectorAll('.fade-in, .slide-up');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});
