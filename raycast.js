const wallSideSize = 32;
const countRows = 11;
const countColumns = 15;
const windowWidth = countColumns * wallSideSize + 1
const windowHeight = countRows * wallSideSize + 1

let maze = createRandomMaze()

function createRandomMaze(){
    
    let wall = [];

    for(let x = 0; x < countColumns; x++){
        wall[x] = []
        for(let y= 0; y < countRows; y++){
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

    for(let x = 0; x < countColumns; x++){
        for(let y = 0; y < countRows; y++){

            let mazeWallValue = maze[x][y]
            let isBlackOrWhite = mazeWallValue == 0 ? "#222" : "#fff";
            let positionX = x * wallSideSize;
            let positionY = y * wallSideSize;
            stroke("#222");
            fill(isBlackOrWhite)
            rect(positionX, positionY, wallSideSize, wallSideSize)
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


