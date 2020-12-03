if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 7500, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
    // nav: true, // se deve ou não mostrar a navegação
    // auto: true, // se o slide deve passar automaticamente
  });
  new SimpleSlide({
    slide: 'portfolio', // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
    // auto: true, // se o slide deve passar automaticamente
  });
}

new SimpleAnime();
