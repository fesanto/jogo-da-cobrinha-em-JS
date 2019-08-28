let canvas = document.getElementById('snake'); //chamando o canvas criado no html
let context = canvas.getContext('2d'); //contexto renderisa o desenho dentro do canvas. com 2d ele trata o arquivo em plano 2d.
let box = 32; //32px em cada quadradinho
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//criando o background
function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha onde ficará o jogo
}

//a cobrinha será um array que adiciona um elemento e retira o ultimo
function criarSnake() {
    //for vai percorrer o array e incrementar
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarSnake();
