var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 4;
varianceFactor = 250
context.strokeStyle = "#A9FBD7"

var step = 45;
var lines = [];

// Create the lines
for(var i = step; i <= size - step; i += step) {
    
  var line = [];
  for(var j = step; j <= size - step; j+= step) {
    var distanceToCenter = Math.abs(j - size / 2);
    var variance = Math.max(size / 2 - varianceFactor - distanceToCenter, -10);
    var random = Math.random() * variance / 2 * -1;
    var point = {x: j, y: i + random};
    var point = {x: j, y: i + random};
    line.push(point);
  } 
  lines.push(line);
}

// Do the drawing
for(var i = 4; i < lines.length; i++) {

    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);
    
    for(var j = 0; j < lines[i].length; j++) {
      context.lineTo(lines[i][j].x, lines[i][j].y);
    }

//   context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
  context.save();
  context.globalCompositeOperation = 'destination-out';
  context.fill();
  context.restore();
  

  context.stroke();
}
