const wallSideSize = 32;
const countRows = 11;
const countColumns = 15;
const windowWidth = countColumns * wallSideSize + 1
const windowHeight = countRows * wallSideSize + 1

maze.createRandomMaze(countColumns, countRows)

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
    maze.render(countColumns, countRows)
}


