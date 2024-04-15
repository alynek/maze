const wallSize = 32;
const countRows = 11;
const countColumns = 15;
const windowWidth = countColumns * wallSize
const windowHeight = countRows * wallSize

let maze = createRandomWall()

function createRandomWall(){
    
    let wall = [];

    for(let x = 0; x < countColumns ; x++){
        wall[x] = []
        for(let y= 0; y< countRows; y++){
            if(y == 0 || y == (countRows - 1) || x == 0 || x == (countColumns - 1)) {
                wall[x][y] = 1
            }
            else
            {
                wall[x][y] = Math.floor(Math.random() * 2)
            }
        }
    }

    return wall
}


function render(){
    for(let x = 0; x < countColumns  ; x++){
        for(let y = 0; y < countRows; y++){

                let mazeWallValue = maze[x][y]
                let isBlackOrWhite = mazeWallValue == 0 ? "#222" : "#fff";
                let posicaoX = x * wallSize;
                let posicaoY = y * wallSize;
                stroke("#222");
                fill(isBlackOrWhite)
                rect(posicaoX, posicaoY, wallSize, wallSize)
        }
    }
}


function setup() {
    //let canvas = createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);

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


