let canvas = document.getElementById('snake'); //chamando o canvas criado no html
let context = canvas.getContext('2d'); //contexto renderisa o desenho dentro do canvas. com 2d ele trata o arquivo em plano 2d.
let box = 32; //32px em cada quadradinho

//criando o background
function criarBG() {
    context.fillStyle = 'purple';
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha onde ficará o jogo
}

criarBG();