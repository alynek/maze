const maze = {

    wall: [],

    createRandomMaze(countColumns, countRows){

        //todo: study and implement a better algorithm to make random maze
    
        for(let x = 0; x < countColumns; x++){
            this.wall[x] = []
            for(let y= 0; y < countRows; y++){
                if(y == 0 || y == (countRows - 1) || x == 0 || x == (countColumns - 1)){
                    this.wall[x][y] = 0
                }
                else
                {
                    if(x % 2 == 0 && y % 2 == 0){ //apenas números pares
                        this.wall[x][y] = Math.floor(Math.random() * 2)
                    }
                }
            }
        }

        for(let x = 1; x < countColumns; x++){
            for(let y= 1; y < countRows; y++){
                if((x % 2 == 0 && y % 2 == 0) && this.wall[x][y] == 0){ //apenas números pares

                    let sortedNumber = Math.floor(Math.random() * 4) //escolhe números aleatórios do 0 ao 3

                    //valor 0 na wall, quer dizer que já tem uma parede preta ali

                    switch(sortedNumber){
                        //anda + 1 no x (direita) 
                        case(0):
                            let increaseX = x
                            increaseX++

                            while((increaseX > 1 && increaseX < countColumns - 2 && y > 1 && y < countRows - 2) && this.wall[increaseX][y] != 0  
                            && y != Math.floor(countRows / 2)
                            ){
                                //adicione uma parede
                                this.wall[increaseX][y] = 0
                                increaseX++
                            }
                            break

                            //se 1, anda - 1 no x (esquerda)
                        case(1):
                            let decreaseX = x
                            decreaseX--
                            while((decreaseX > 1 && decreaseX < countColumns - 2 && y > 1 && y < countRows - 1) && this.wall[decreaseX][y] != 0 
                            && y != Math.floor(countRows / 2)
                            ){
                                //adicione uma parede
                                this.wall[decreaseX][y] = 0
                                decreaseX--
                            }
                            break

                        //se 2, anda + 1 no y (baixo)
                        case(2):
                            let increaseY = y
                            increaseY++
                            
                            while((x > 1 && x < countColumns &&  increaseY > 1 && increaseY < countRows - 2) && this.wall[x][increaseY] != 0
                           && increaseY != Math.floor(countRows / 2)
                            ){
                                //adicione uma parede
                                this.wall[x][increaseY] = 0
                                increaseY++
                            }
                            break

                        //se 3, anda - 1 no y (cima)
                        case(3):
                            let decreaseY = y
                            decreaseY--
                            
                            while((decreaseY > 1 && decreaseY < countRows - 2 && x > 1 && x < countColumns) && this.wall[x][decreaseY] != 0
                            && decreaseY != Math.floor(countRows / 2)
                            ){
                                //adicione uma parede
                                this.wall[x][decreaseY] = 0
                                decreaseY--
                            }
                            break
                    }
                }
            }
        }
    },

    render(countColumns, countRows){

        for(let x = 0; x < countColumns; x++){
            for(let y = 0; y < countRows; y++){
    
                let mazeWallValue = this.wall[x][y]
                let whiteColor = "#fff" 
                let blackColor = "#222"
                let isBlackOrWhite = mazeWallValue == 0 ? blackColor : whiteColor;
                let positionX = x * wallSideSize;
                let positionY = y * wallSideSize;
                stroke("#222");
                fill(isBlackOrWhite)
                rect(positionX, positionY, wallSideSize, wallSideSize)
            }
        }
    }
}