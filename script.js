let canvas = document.getElementById('snake'); //chamando o canvas criado no html
let context = canvas.getContext('2d'); //contexto renderisa o desenho dentro do canvas. com 2d ele trata o arquivo em plano 2d.
let box = 32; //32px em cada quadradinho
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right';

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

function iniciarJogo() {
    criarBG();
    criarSnake();

    let snakeX = snake[0].x; //array na posição 0 de x
    let snakeY = snake[0].y; //array na posição 0 de y

    //criando coordenadas que serão seguidas. condicionais
    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    //função pop retira o ultimo elemento do array
    snake.pop();

    //colocando a cabeça da cobra
    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); //a cada 100 milisegundos ele renova
