const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 400
const CANVAS_HEIGHT = canvas.height = 800
const enamyArrary = []
const npc = new Image()
let gameFrame = 0
// npc.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/项目 3：敌人的移动模式/enemy1.png'
npc.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/项目 3：敌人的移动模式/enemy2.png'
class Enamy {
    constructor() {
        this.x = Math.random() * CANVAS_WIDTH
        this.y = Math.random() * CANVAS_HEIGHT
        this.speed1 = Math.sin(90)
        this.speed = Math.random() * 4 + 1
        // npc 1
        // this.width = 293
        // this.height = 155
        this.width = 266
        this.height = 188
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    updated() {
        this.x -= this.speed
        this.y +=  this.speed1 
        if( this.x +CANVAS_WIDTH<0){this.x =CANVAS_WIDTH

        }
        // if (gameFrame % this.flapSpeed === 0) {
        //     this.frame < 4 ? this.frame++ : this.frame = 0
        // }
    }
    draw() {
        // ctx.strokeRect(this.x, this.y, 50, 50)
        ctx.drawImage(npc, this.width * this.frame, 0, this.width, this.height, this.x, this.y, this.width / 2.5, this.height / 2.5)
    }
}
for (let i = 0; i < 50; i++) {
    enamyArrary.push(new Enamy())
}
function animation() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enamyArrary.forEach(enamy => {
        enamy.updated()
        enamy.draw()
    })
    gameFrame++
    requestAnimationFrame(animation)
}
animation()

