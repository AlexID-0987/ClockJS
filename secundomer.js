let stop=document.getElementById("stop")
let begin=document.getElementById('begin')
let x=150;
let  can= document.getElementById("area")
let canvas=can.getContext('2d')
canvas.lineWidth=1
canvas.strokeStyle='green'
canvas.beginPath()
canvas.arc(150,70,60,0,Math.PI*2,false)
canvas.stroke()
canvas.strokeStyle='black'
canvas.lineWidth=1
canvas.beginPath()
canvas.moveTo(x,15)
canvas.lineTo(150,70)
canvas.stroke()
let sec=0
let beginSec
let minute=document.getElementById('minute')
minute.innerText='0'
let interval=setInterval(starting,1000)
function starting(){
    can.style.transform='rotate('+sec+'deg)'
    sec=sec+6
    console.log(sec)
    if(sec==360){
        minute.innerText++
        sec=0
    }
}
stop.onclick=function (){
    clearInterval(interval)
}

begin.onclick=function (){
    setInterval(starting,1000)
}
