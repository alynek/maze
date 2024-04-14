const wallSize = 32;
const countLines = 11;
const countColumns = 15;

let maze = createRandomWall()

function createRandomWall(){
    
    let wall = [];

    for(let i = 0; i < countLines ; i++){
        wall[i] = []
        for(let j = 0; j < countColumns; j++){
            if(j == 0 || j == 14 || i == 0 || i == 10) {
                wall[i][j] = 1
            }
            else
            {
                wall[i][j] = Math.floor(Math.random() * 2)
            }
        }
    }

    return wall
}


function render(){
    for(let i = 0; i < countLines ; i++){
        for(let j = 0; j < countColumns; j++){

                let mazeWallValue = maze[i][j]
                let isBlackOrWhite = mazeWallValue == 0 ? "#222" : "#fff";
                let posicaoX = i * wallSize;
                let posicaoY = j * wallSize;
                stroke("#222");
                fill(isBlackOrWhite)
                rect(posicaoX, posicaoY, wallSize, wallSize)
        }
    }
}


function setup() {
    let canvas = createCanvas(450, 500);

    // x = (windowWidth - width) / 2 
    // y = (windowHeight - height) / 20
    // canvas.position(x, y)

}

function update() {
    
}

function draw(){
    update()
    render()
}


