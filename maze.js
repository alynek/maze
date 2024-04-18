const maze = {

    wall: [],

    createRandomMaze(countColumns, countRows){

        //todo: study and implement a better algorithm to make random maze
    
        for(let x = 0; x < countColumns; x++){
            this.wall[x] = []
            for(let y= 0; y < countRows; y++){
                if(y == 0 || y == (countRows - 1) || x == 0 || x == (countColumns - 1) 
                || y == Math.floor(countRows/2) || x == y || x == Math.floor(countColumns / 2)){
                    this.wall[x][y] = 0
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
                let isBlackOrWhite = mazeWallValue == 1 ? "#222" : "#fff";
                let positionX = x * wallSideSize;
                let positionY = y * wallSideSize;
                stroke("#222");
                fill(isBlackOrWhite)
                rect(positionX, positionY, wallSideSize, wallSideSize)
            }
        }
    }
}