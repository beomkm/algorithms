var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


ctx.font="15px Consolas";
drawTextBox(ctx, "다람쥐 헌 쳇바퀴에 타고파\n다람쥐 헌 쳇바퀴에 타고파", 100, 100, 170, 1.2)

function drawTextBox(ctx, text, x, y, fieldWidth, spacing) {
  var line = "";
  var fontSize = parseFloat(ctx.font);
  var currentY = y;
  ctx.textBaseline = "top";
  for(var i=0; i<text.length; i++) {
    var tempLine = line + text[i];
    var tempWidth = ctx.measureText(tempLine).width;

    if (tempWidth < fieldWidth && text[i] != '\n') {
      line = tempLine;
    }
    else {
      ctx.fillText(line, x, currentY);
      if(text[i] != '\n') line = text[i];
      else line = "";
      currentY += fontSize*spacing;
    }
  }
  ctx.fillText(line, x, currentY);
  ctx.rect(x, y, fieldWidth, currentY-y+fontSize*spacing);
  ctx.stroke();
}
