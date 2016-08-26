window.onload = init;

var canvas;
var ctx;
var width;
var height;

function init()
{
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   width = canvas.width;
   height = canvas.height;

   ctx.fillStyle="#FFFFFF";
   ctx.beginPath();
   for(var i=0; i<5; i++) {
      ctx.moveTo(width/2+i*40, 50+i*20);
      ctx.lineTo(50+i*40, 125+i*20);
      ctx.moveTo(width/2+i*40, 50+i*20);
      ctx.lineTo(50-i*40, 125+i*20);
   }

   ctx.stroke();
}
