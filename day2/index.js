const canvas2 = document.getElementById("canvas2")
const ctx1 = canvas2.getContext('2d')
const CANVAS_WIDTH1 = canvas2.width = 800
const CANVAS_HEIGHT1 = canvas2.height = 500
const playBgc1 = new Image()
playBgc1.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/城市背景图层/第1层.png'
const playBgc2 = new Image()
playBgc2.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/城市背景图层/第2层.png'
const playBgc3 = new Image()
playBgc3.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/城市背景图层/第3层.png'
const playBgc4 = new Image()
playBgc4.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/城市背景图层/第4层.png'
const playBgc5 = new Image()
playBgc5.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/城市背景图层/第5层.png'
let gameSpeed = 5
let gameFrame = 0
// let x1 = 0
// let x2 = 1667
const slider = document.querySelector('.slider')
console.log(slider);
gameSpeed = slider.value
const title = document.querySelector('.title')
title.innerText = gameSpeed

slider.addEventListener('change',function(){
    gameSpeed = slider.value
    title.innerText = gameSpeed
})

class PlayerBackground {
    constructor(image, speedModifer) {
        this.x = 0
        this.y = 0
        this.width = 1667
        this.height = 500
        this.x2 = this.width
        this.image = image
        this.speedModifer = speedModifer

    }
    update() {
        this.speed = this.speedModifer * gameSpeed
        // if (this.x <= -this.width) this.x = this.width + this.x2 - this.speed
        // this.x = Math.floor(this.x - this.speed)
        // if (this.x2 <= -this.width) this.x2 = this.width + this.x - this.speed
        // else this.x2 = Math.floor(this.x2 - this.speed)
        this.x = this.speed * gameFrame %  this.width
    }
    draw() {

        ctx1.drawImage(this.image, this.x, this.y,)
        // ctx1.drawImage(this.image, this.x2, this.y,)
        ctx1.drawImage(this.image, this.x+this.width, this.y,)
    }
}
const player1 = new PlayerBackground(playBgc1, 0.2)
const player2 = new PlayerBackground(playBgc2, 0.4)
const player3 = new PlayerBackground(playBgc3, 0.6)
const player4 = new PlayerBackground(playBgc4, 0.8)
const player5 = new PlayerBackground(playBgc5, 1)
let gameObj = [
    player1,
    player2,
    player3,
    player4,
    player5
]
function animate2() {
    ctx1.clearRect(0, 0, CANVAS_WIDTH1, CANVAS_HEIGHT1)
    // ctx1.drawImage(playBgc4, x1, 0)
    // ctx1.drawImage(playBgc4, x2, 0)
    gameObj.forEach(item=>{
        item.update()
        item.draw()
    })
    // if (x1 < -1667) x1 = 1667 + x2 - gameSpeed
    // else x1 -= gameSpeed
    // if (x2 < -1667) x2 = 1667 + x1 - gameSpeed
    // else x2 -= gameSpeed
    gameFrame--
    requestAnimationFrame(animate2)
}
animate2()