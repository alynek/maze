const maze = {

    wall: [],
    
    createRandomMaze(countColumns, countRows){
    
        for(let x = 0; x < countColumns; x++){
            this.wall[x] = []
            for(let y= 0; y < countRows; y++){
                if(y == 0 || y == (countRows - 1) || x == 0 || x == (countColumns - 1)) {
                    this.wall[x][y] = 1
                }
                else
                {
                    this.wall[x][y] = Math.floor(Math.random() * 2)
                }
            }
        }
    },

    render(countColumns, countRows){

        for(let x = 0; x < countColumns; x++){
            for(let y = 0; y < countRows; y++){
    
                let mazeWallValue = this.wall[x][y]
                let isBlackOrWhite = mazeWallValue == 0 ? "#222" : "#fff";
                let positionX = x * wallSideSize;
                let positionY = y * wallSideSize;
                stroke("#222");
                fill(isBlackOrWhite)
                rect(positionX, positionY, wallSideSize, wallSideSize)
            }
        }
    }
}