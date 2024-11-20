let button = document.getElementById('button');
let nav_acessibilidade = document.getElementById('nav_acessibilidade')
let body = document.querySelector('body');


button.addEventListener('click', () => {
    button.classList.toggle("button_ativ");
    nav_acessibilidade.classList.toggle("nav_ativ");
});

function aumentarFonte() {
    let elementos = document.querySelectorAll('body *:not(header *):not(.nav_acessibilidade *)');
    elementos.forEach((elemento) => {
        const tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize); 
        elemento.style.fontSize = (tamanhoAtual + 1) + 'px';
    });   
}

function diminuirFonte() {
    let elementos = document.querySelectorAll('body *:not(header *):not(.nav_acessibilidade *)');
    elementos.forEach((elemento) => {
        const tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize); 
        elemento.style.fontSize = (tamanhoAtual - 1) + 'px';
    });   
}

let brilho = 1;

function aumentarLuz() {
    brilho += 0.1;
    if (brilho > 1.5) brilho = 1.5;
    body.style.filter = `brightness(${brilho})`;
}

function diminuirLuz() {
    brilho -= 0.1;
    if (brilho < 0.5) brilho = 0.5;
    body.style.filter = `brightness(${brilho})`;
}

let modoEscuroAtivo = false;

function alternarModo() {
    const main = document.querySelector('main');
    const conteudos = document.querySelectorAll('.conteudo');
    const links = document.querySelectorAll('.link')
    if (modoEscuroAtivo) {
        main.style.backgroundColor = 'rgb(249, 247, 247)';
        main.style.color = 'black';  
        conteudos.forEach(conteudo => {
            conteudo.style.backgroundColor = 'rgb(252, 223, 185)'; 
        });

        links.forEach(link => {
            link.style.color = 'rgb(0, 47, 255)';
        });
        modoEscuroAtivo = false;
    } else {
        main.style.backgroundColor = 'rgb(34, 34, 34)';
        main.style.color = 'rgb(205, 205, 205)';
        conteudos.forEach(conteudo => {
            conteudo.style.backgroundColor = 'rgb(52, 52, 52)';
        });

        links.forEach(link => {
            link.style.color = 'yellow';
        });
        modoEscuroAtivo = true;
    }
}

let speechSynthesisUtterance;
let isSpeaking = false;  // Controle do estado de leitura

function lerTexto() {
    const texto = document.querySelector('main').innerText;  // Obtém o texto do conteúdo principal
        speechSynthesisUtterance = new SpeechSynthesisUtterance(texto);
        speechSynthesisUtterance.lang = 'pt-BR';
        window.speechSynthesis.speak(speechSynthesisUtterance);
}

function pararTexto() {
    window.speechSynthesis.cancel();
}

window.addEventListener('beforeunload', function() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
});

document.getElementById("lerTexto").addEventListener("click", lerTexto);