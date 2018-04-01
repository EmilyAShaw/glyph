var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  colorMode(HSL, 100);  // Use HSB with scale of 0-100
  // this means draw will only be called once
  noLoop();
}

function draw_shape(column, row, size, cur_color) {
  // replace this with your own logic
  var half_size = size/2;

  // defaults
  fill(60);
  strokeWeight(2);
  var rect_width = 60;

  var cur_hue = cur_color._getHue();
  var cur_sat = cur_color._getSaturation();
  var cur_lgt = cur_color._getLightness();

  x1 = map(cur_hue, 0, 100, 0, size);
<<<<<<< HEAD
  x2 = map(cur_sat, 0, 100, 0, size);
  x3 = map (cur_lgt, 0, 100, 0, size);

  xs =10;
  if (row === 0) {
    // hue
   scale(0.5);
   translate(60,60);
    noStroke();


=======
  xs =10;
  if (row === 0) {
    // hue

    noStroke();
>>>>>>> 604dd0a8e1c2cdb6dfd6fbb6d3395aa7c9cd1549
     beginShape();
  vertex(xs+x1-20, xs+0);
  vertex(xs+64, xs+30);
  vertex(xs+x1-10, xs+35);
  vertex(xs+73, xs+57);
  vertex(xs+x1-10, xs+90);
  vertex(xs+50, xs+75);
  vertex(xs+21, xs+90);
  vertex(xs+27, xs+57);
  vertex(xs+3, xs+35);
  vertex(xs+36, xs+30);
  endShape(CLOSE);
<<<<<<< HEAD
	
=======
>>>>>>> 604dd0a8e1c2cdb6dfd6fbb6d3395aa7c9cd1549
  }
  else if (row === 1) {
    // saturation
   scale(0.5);
    noStroke();
      beginShape();
  vertex(x2+xs+50, x2+xs+0);
  vertex(x2+xs+64, x2+xs+30);
  vertex(x2+xs+99, x2+xs+35);
  vertex(x2+xs+73, x2+xs+57);
  vertex(x2+xs+85, x2+xs+90);
  vertex(x2+xs+50, x2+xs+75);
  vertex(x2+xs+21, x2+xs+90);
  vertex(x2+xs+27, x2+xs+57);
  vertex(x2+xs+3, x2+xs+35);
  vertex(x2+xs+36, x2+xs+30);
  endShape(CLOSE);

  	
  }
  else {
    // lightness

    scale(0.5);
   translate(60,60);
   
    var fill_col = map(column, 0, 4, 30, 90);
    fill(fill_col);
    noStroke();
         beginShape();
  vertex(xs+50, xs+0);
  vertex(xs+64, xs+30);
  vertex(xs+99, xs+35);
  vertex(xs+73, xs+57);
  vertex(xs+85, xs+90);
  vertex(xs+50, xs+75);
  vertex(xs+21, xs+90);
  vertex(xs+27, xs+57);
  vertex(xs+3, xs+35);
  vertex(xs+36, xs+30);
  endShape(CLOSE);

 

  }
}

// some examples of how to specify a base color
var my_color = "#d24692"
// var my_color = "rgb(245, 225, 50)"
//var my_color = "rgb(20%, 47%, 67%)"

var shapes_should_draw = true;

// draw five colors and then five glyphs
function draw () {
  var size=120;
  var xsteps = 5;
  var xdiff = (width - xsteps * size) / xsteps;
  var xstep = size + xdiff;
  var ysteps = 3;
  var ydiff = (height - ysteps * size) / ysteps;
  var ystep = size + ydiff;

  var bg_color = color("#ffffdc");
  var base_color = color(my_color);
  var base_hue = hue(base_color);
  var base_sat = saturation(base_color);
  var base_lgt = lightness(base_color);

  background(bg_color);
  noStroke();

  for (var x=0; x<xsteps; x++) {
    for (var y=0; y<ysteps; y++) {
      var cur_color = base_color;

      if (y == 0) {
        // hue
        var cur_hue = (85 + base_hue + 100 * 0.3 * x / xsteps) % 100;
        cur_color = color(cur_hue, base_sat, base_lgt);
      }

      else if (y == 1) {
        // saturation
        var cur_sat = (5 + 90 * x / xsteps);
        cur_color = color(base_hue, cur_sat, base_lgt);
      }
      else if (y == 2) {
        // lightness
        var cur_lgt = (5 + 90 * x / xsteps);
        cur_color = color(base_hue, base_sat, cur_lgt);
      }

      fill(cur_color);
      noStroke();
      rect(xdiff/2 + xstep * x - 10, ydiff/2 + ystep * y - 10, size, size);

      strokeWeight(2);
      stroke(0);
      fill(bg_color);
      var curx = xdiff/2 + xstep * x + 10;
      var cury = ydiff/2 + ystep * y + 10;
      rect(curx, cury, size, size);

      if (shapes_should_draw) {
        push();
        translate(curx, cury);
        draw_shape(x, y, size, cur_color);
        pop();
      }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
