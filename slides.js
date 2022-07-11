let position = document.getElementById("position");
let quant = document.querySelectorAll('#item-slide .images'); // Pega a quantidade de slides
let imagem = document.getElementById("atual");
let avancar = document.getElementById('avancar');
let voltar = document.getElementById('voltar');
let rolar = true;
let atual = 0;

let carrosel = document.getElementById('item-slide');
carrosel.style.width = (100 * quant.length) + "%"; // Define a largura do carrosel com base na quantidade de slides

document.getElementById("contadorSlides").innerText = "1 / " + quant.length;

// Cria <div> que são os botões seletores na mesma quantidade de imagens
for (let i = 0; i < quant.length; i++) {
    let div = document.createElement('div');
    div.id = i; // Cada <div>/botões criado recebe um id="" numerico começando do 0
    position.appendChild(div); // Faz as <div>/botões criados serem adicionados dentro da div position
}

// Marca o primeiro botão seletor
document.getElementById('0').style.backgroundColor = "white";

// Adiciona uma classe, class="primeira" ao primeiro botão seletor
document.getElementById('0').classList.add('primeira');

/* Esse bloco e para quando clicar nos botoes ir para o slide desejado */
let pos = document.querySelectorAll('#position div'); // Pega a quantidade de botões seletores criados
let total  = Number(pos.length); // Faz uma conversão de tipo
for (let i = 0; i < total; i++) {
    pos[i].addEventListener('click', () => { // Para cada botão seletor adiciona um evento de escutar um click, tipo um onclick=""
        atual = pos[i].id; // Atual é igual ao numero do id do botão seletor clicado
        rolar = false;
        slide();
    });
}

voltar.addEventListener('click', () => {
    atual--;
    rolar = false;
    slide();
});

avancar.addEventListener('click', () => {
    atual++;
    rolar = false;
    slide();
});
/*-------------------------------------------------------------------*/

function slide() {
    if (atual >= quant.length) {  // Se atual for maior que a quantidade de slides
        atual = 0;
    } else if (atual < 0) {
        atual = quant.length - 1;
    }

    // Mostra o numero de slides na tela
    let numSlide = Number(atual);
    let countSlide = document.getElementById("contadorSlides");
    countSlide.innerText = (numSlide + 1) + " / " + quant.length;

    // Cria uma função para desmarcar/apagar o botão do slide referente não aparente
    const vigente = document.querySelectorAll('.primeira');
    vigente.forEach(btn => {
        btn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    });

    document.querySelector('.primeira').classList.remove('primeira'); // Remove a class="primeira"
    carrosel.style.marginLeft = -100 * atual + '%';
    document.getElementById(atual).classList.add('primeira'); // a variavel 'atual' recebe a class="primeira" para o slide continuar a partir dela

    document.getElementById(atual).style.backgroundColor = "white"; // Destaca o botão do slide aparente
}

setInterval(()=>{
    if(rolar){ // Cria uma condição para quando um botão for clicado faz zerar a contagem
        atual++;
        slide();
    }else{
        rolar = true;
    }
},4000); // 4000

