const wallSideSize = 32;
const countRows = 15;
const countColumns = 15;
const windowWidth = countColumns * wallSideSize + 1
const windowHeight = countRows * wallSideSize + 1

maze.createRandomMaze(countColumns, countRows)
player.getCoordinates()

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function update() {
    player.update()
}

function draw(){
    update()
    maze.render(countColumns, countRows)
    player.render()
}


