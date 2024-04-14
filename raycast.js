

const tamanhoCelula = 32;
const quantiLinhas = 11;
const quantiColunas = 15;

let labirinto = criarLabirinto()

function criarLabirinto(){
    
    let parede = [];

    for(let i = 0; i < quantiLinhas ; i++){
        parede[i] = []
        for(let j = 0; j < quantiColunas; j++){
            if(j == 0 || j == 14 || i == 0 || i == 10) {
                parede[i][j] = 1
            }
            else
            {
                parede[i][j] = Math.floor(Math.random() * 2)
            }
        }
    }

    return parede
}


function g(){
    for(let i = 0; i < quantiLinhas ; i++){
        for(let j = 0; j < quantiColunas; j++){

                let ehUmOuZero = labirinto[i][j]
                let desenhou = ehUmOuZero == 0 ? "#222" : "#fff";
                let posicaoX = i * tamanhoCelula;
                let posicaoY = j * tamanhoCelula;
                stroke("#222");
                fill(desenhou)
                rect(posicaoX, posicaoY, tamanhoCelula, tamanhoCelula)
        }
    }
}


function setup() {
    createCanvas(450, 500);

}

function update() {
    // TODO: update all game objects before we render the next frame
}

function draw(){
    update()
    g()
}


