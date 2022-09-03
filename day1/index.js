const canvas1 = document.getElementById("canvas1")
const ctx = canvas1.getContext('2d')
const CANVAS_WIDTH = canvas1.width = 600
const CANVAS_HEIGHT = canvas1.height = 600
const playImg = new Image()
playImg.src = '../素材及源代码/JavaScript 游戏开发课程素材/JavaScript 游戏开发课程素材/项目1.png'
let x = 0
const spritWidth = 573
const spritHeight = 523
let frameX = 0
let frameY = 0
// 游戏帧
let gameFram = 0
// 交错帧
const staggerFrams = 4
let spriteAnimations = []
const animationsState = [
    {
        name: "idel",
        frams: 7
    },
    {
        name: "jump",
        frams: 7
    },

    {
        name: "fall",
        frams: 7
    },

    {
        name: "run",
        frams: 9
    },

    {
        name: "dizzy",
        frams: 11
    },

    {
        name: "sit",
        frams: 5
    },
    {
        name: "roll",
        frams: 7
    },
    {
        name: "bite",
        frams: 7
    },
    {
        name: "ko",
        frams: 12
    },
    {
        name: "gitHit",
        frams: 4
    },
]
let state='idel'
let select = document.querySelector('#select')
select.onchange= function (){
    state=select.value
}
animationsState.forEach((state, index) => {
    let frams = {
        loc: []
    }
    for (let j = 0; j < state.frams; j++) {
        let positionX = j * spritWidth
        let positionY = index * spritHeight
        frams.loc.push({ x: positionX, y: positionY })

    }
    spriteAnimations[state.name]=frams
})
console.log(spriteAnimations);
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // 填充一个区域 x位置,y位置 宽度 高度
    // ctx.fillRect(x, 50, 100, 100);
    // x++
    let position = Math.floor(gameFram / staggerFrams) % spriteAnimations[state].loc.length
    frameX = position * spritWidth
    frameY = spriteAnimations[state].loc[position].y
    // 绘制图片 图片 图片x位置,图片y位置,图片宽度,图片高度, 目标x位置,目标y位置,目标宽度,目标高度
    ctx.drawImage(playImg, frameX, frameY, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight)
    // if (gameFram % staggerFrams == 0) {
    //     if (frameX < 6) frameX++
    //     else frameX = 0
    // }
    gameFram++
    requestAnimationFrame(animate)
}
animate()