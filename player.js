const player = {
    x: 0,
    y: 0,
    radius: 3,
    turnDirection: 0,
    walkDirection: 0,
    rotationAngle: Math.PI * this.radius / 2,
    moveSpeed: 2,
    rotaionSpeed: 2 * (Math.Pi / 180), //convert to radians

    getCoordinates(){
        this.x = windowWidth / 2,
        this.y = windowHeight / 2
    },

    render(){
        fill("red")
        circle(this.x, this.y, this.radius)
    },

    update(){
        //todo: update player position
    }
}