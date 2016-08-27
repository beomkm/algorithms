window.onload = init;

var canvas;
var ctx;

function init()
{
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");

   //ctx.fillRect(100,100,1,1);

   ctx.lineWidth = 1;
   ctx.arc(120, 119, 100, 0, 2 * Math.PI, true);
   ctx.stroke();
   //drawCircle1(ctx, 80, 120, 119);
   //drawCircle2(ctx, 100, 120, 119);

}

function drawCircle1(ctx, r, cx, cy)
{
    var x, y;
    var p;

    x = 0;
    y = r;
    p = 1 - r;

    ctx.fillStyle = "#00FF00";



    ctx.fillRect(x+cx, y+cy, 1, 1);
    ctx.fillRect(x+cx, -y+cy, 1, 1);
    ctx.fillRect(y+cx, x+cy, 1, 1);
    ctx.fillRect(-y+cx, x+cy, 1, 1);

    ++x;
    while(x < y) {
        if(p < 0) {
            p += x+x+3;
        }
        else {
            p += x+x-y-y+3;
            --y;
        }

        ctx.fillRect(x+cx , y+cy, 1, 1);
        ctx.fillRect(x+cx , -y+cy , 1, 1);
        ctx.fillRect(-x+cx, y+cy , 1, 1);
        ctx.fillRect(-x+cx, -y+cy, 1, 1);
        ctx.fillRect(y+cx , x+cy , 1, 1);
        ctx.fillRect(y+cx , -x+cy, 1, 1);
        ctx.fillRect(-y+cx, x+cy , 1, 1);
        ctx.fillRect(-y+cx, -x+cy, 1, 1);

        ++x;
    }
}

function drawCircle2(ctx, r, cx, cy)
{
    var x, y;
    var p;

    x = 0;
    y = r;
    p = 1.25 - r;

    ctx.fillStyle = "#FF0000";



    ctx.fillRect(x+cx, y+cy, 1, 1);
    ctx.fillRect(x+cx, -y+cy, 1, 1);
    ctx.fillRect(y+cx, x+cy, 1, 1);
    ctx.fillRect(-y+cx, x+cy, 1, 1);

    ++x;
    while(x < y) {
        if(p < 0) {
            p += x+x+1;
        }
        else {
            p += x+x-y-y+1;
            --y;
        }

        ctx.fillRect(x+cx , y+cy, 1, 1);
        ctx.fillRect(x+cx , -y+cy , 1, 1);
        ctx.fillRect(-x+cx, y+cy , 1, 1);
        ctx.fillRect(-x+cx, -y+cy, 1, 1);
        ctx.fillRect(y+cx , x+cy , 1, 1);
        ctx.fillRect(y+cx , -x+cy, 1, 1);
        ctx.fillRect(-y+cx, x+cy , 1, 1);
        ctx.fillRect(-y+cx, -x+cy, 1, 1);

        ++x;
    }
}
