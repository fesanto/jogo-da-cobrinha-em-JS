let canvas = document.getElementById('snake'); //chamando o canvas criado no html
let context = canvas.getContext('2d'); //contexto renderisa o desenho dentro do canvas. com 2d ele trata o arquivo em plano 2d.
let box = 32; //32px em cada quadradinho
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right';
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, //random retorna numero aleatorio até 1 e o floor tira o 0. e deixa um numero aleatório
    y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}

//escutando o botão para determinar onde a cobra irá
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo() {

    //impedir a cobrinha de sair dos limites do jogo
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0; //se a cobrinha passar de 15, voltará a ter valor 0 e aparecerá do outro lado
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over');
        }
    }

    criarBG();
    criarSnake();
    drawFood();

    let snakeX = snake[0].x; //array na posição 0 de x
    let snakeY = snake[0].y; //array na posição 0 de y

    //criando coordenadas que serão seguidas. condicionais
    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    //colocando a cabeça da cobra
    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); //a cada 100 milisegundos ele renova
