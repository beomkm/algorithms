
window.onload = init;

var canvas;
var ctx;

function init()
{
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");

   drawCircle(ctx, 100, 100, 10);
   drawCircle(ctx, 100, 100, 12);
   drawCircle(ctx, 100, 100, 14);

}

function drawCircle(ctx, cx, cy, r)
{
    var x, y;
    var p;

    x = 0;
    y = r;
    p = 1 - r;

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
