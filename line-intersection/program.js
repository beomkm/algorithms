
/*
http://tibyte.kr/288
*/



window.addEventListener("load", init);


let canv;
let ctx;

let target = 0;
let btnSize = 5;
let gridSize = 20;

let pA={x:40, y:40}, pB={x:140, y:140};
let pC={x:200, y:140}, pD={x:140, y:200};

let pArr = [pA, pB, pC, pD];

function init()
{
    canv = document.getElementById("canvas");
    ctx = canv.getContext("2d");

    canv.addEventListener("mousedown", doMouseDown);
    canv.addEventListener("mouseup", doMouseUp);
    canv.addEventListener("mouseout", doMouseOut);
    canv.addEventListener("mousemove", doMouseMove);

    drawObj(ctx);

}

function getMousePos(event) {
    let rect = canv.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function drawObj() {

    ctx.clearRect(0, 0, canv.width, canv.height);

    ctx.beginPath();
    for(let i=0; i<canv.width; i+=gridSize) {
        ctx.moveTo(i+0.5, 0+0.5);
        ctx.lineTo(i+0.5, canv.height+0.5);
    }
    for(let i=0; i<canv.height; i+=gridSize) {
        ctx.moveTo(0+0.5, i+0.5);
        ctx.lineTo(canv.width+0.5, i+0.5);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "gray";
    ctx.stroke();

    ctx.strokeStyle = "black"

    pArr.forEach(function(p){
        ctx.beginPath();
        ctx.arc(p.x+0.5, p.y+0.5 ,btnSize, 0, 2*Math.PI);
        ctx.stroke();
    });

    ctx.beginPath();
    ctx.moveTo(pA.x+0.5, pA.y+0.5);
    ctx.lineTo(pB.x+0.5, pB.y+0.5);
    ctx.moveTo(pC.x+0.5, pC.y+0.5);
    ctx.lineTo(pD.x+0.5, pD.y+0.5);
    ctx.lineWidth = 2;
    if(isIntersect({p1:pA, p2:pB}, {p1:pC, p2:pD}))
        ctx.strokeStyle = "red";
    else
        ctx.strokeStyle = "black";

    ctx.stroke();

}


function doMouseDown(event) {
    let mouse = getMousePos(event);
    for(let p of pArr) {
        if(getDistance(mouse, p)<btnSize) {
        	target = p;
            break;
        }
    }
}

function doMouseUp(event) {
    target = 0;
}

function doMouseOut(event) {
   // target = 0;
}

function doMouseMove(event) {
    let mouse = getMousePos(event);

    if(target != 0) {
        target.x = Math.round(mouse.x/gridSize)*gridSize;
        target.y = Math.round(mouse.y/gridSize)*gridSize;
    }


    drawObj();
}

function getDistance(p1, p2)
{
    return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y));
}

function isIntersect(line1, line2)
{
    //algorithm 1
    /*
    let p1 = line1.p1;
    let p2 = line1.p2;
    let p3 = line2.p1;
    let p4 = line2.p2;

    let sign1 = (p2.x-p1.x)*(p3.y-p1.y) - (p3.x-p1.x)*(p2.y-p1.y);
    let sign2 = (p2.x-p1.x)*(p4.y-p1.y) - (p4.x-p1.x)*(p2.y-p1.y);

    let sign3 = (p4.x-p3.x)*(p1.y-p3.y) - (p1.x-p3.x)*(p4.y-p3.y);
    let sign4 = (p4.x-p3.x)*(p2.y-p3.y) - (p2.x-p3.x)*(p4.y-p3.y);

    return sign1*sign2<0 && sign3*sign4<0;
    */

    //algorithm 2

    let p1 = line1.p1;
    let p2 = line1.p2;
    let p3 = line2.p1;
    let p4 = line2.p2;

    if(Math.max(p1.x, p2.x) < Math.min(p3.x, p4.x)) return false;
    if(Math.min(p1.x, p2.x) > Math.max(p3.x, p4.x)) return false;
    if(Math.max(p1.y, p2.y) < Math.min(p3.y, p4.y)) return false;
    if(Math.min(p1.y, p2.y) > Math.max(p3.y, p4.y)) return false;

    let sign1 = (p2.x-p1.x)*(p3.y-p1.y) - (p3.x-p1.x)*(p2.y-p1.y);
    let sign2 = (p2.x-p1.x)*(p4.y-p1.y) - (p4.x-p1.x)*(p2.y-p1.y);

    let sign3 = (p4.x-p3.x)*(p1.y-p3.y) - (p1.x-p3.x)*(p4.y-p3.y);
    let sign4 = (p4.x-p3.x)*(p2.y-p3.y) - (p2.x-p3.x)*(p4.y-p3.y);

    if(sign1==0 && sign2==0 && sign3==0 && sign4==0) return true;

    return sign1*sign2<=0 && sign3*sign4<=0;


    //algorithm 3
    /*
    let p1 = line1.p1;
    let p2 = line1.p2;
    let p3 = line2.p1;
    let p4 = line2.p2;

    if(Math.max(p1.x, p2.x) <= Math.min(p3.x, p4.x)) return false;
    if(Math.min(p1.x, p2.x) >= Math.max(p3.x, p4.x)) return false;
    if(Math.max(p1.y, p2.y) <= Math.min(p3.y, p4.y)) return false;
    if(Math.min(p1.y, p2.y) >= Math.max(p3.y, p4.y)) return false;

    let sign1 = (p2.x-p1.x)*(p3.y-p1.y) - (p3.x-p1.x)*(p2.y-p1.y);
    let sign2 = (p2.x-p1.x)*(p4.y-p1.y) - (p4.x-p1.x)*(p2.y-p1.y);

    let sign3 = (p4.x-p3.x)*(p1.y-p3.y) - (p1.x-p3.x)*(p4.y-p3.y);
    let sign4 = (p4.x-p3.x)*(p2.y-p3.y) - (p2.x-p3.x)*(p4.y-p3.y);

    if(sign1==0 && sign2==0 && sign3==0 && sign4==0) return true;

    return sign1*sign2<0 && sign3*sign4<0;
    */
}
