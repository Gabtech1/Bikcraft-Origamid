// links menu ativo
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// items orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');

    if (ativa) {
        pergunta.setAttribute('aria-expanded', 'true');
    } else {
        pergunta.setAttribute('aria-expanded', 'false');
    }
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// galeria bicicletas
const galeria = document.querySelectorAll('.bicicleta-img img');
const galeriaContainer = document.querySelector('.bicicleta-img');

function trocarImg(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 920px)').matches;

    if (media) {
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImg);
}

galeria.forEach(eventosGaleria);

// animação
if (window.SimpleAnime) {
    new SimpleAnime();
}