function SpotGlyph() {
  this.spot_hue = 333;

  /*
   * values is an array of 3 numbers: [hue, saturation, brightness]
   *   + hue ranges from 0..360
   *   + saturation ranges from 0..100
   *   + brightness ranges from 0..100
   * this matches the default range for p5.js colorMode(HSB) as describe at:
   *   https://p5js.org/reference/#/p5/colorMode
   *
   * size is the number of pixels for width and height
   *
   * use p5.js to draw a round grayscale glpyh
   * the glyph should stay within the bounding box [0, 0, width, height]
   *
   * this glyph can utilize changes in brightness and saturation, but only
   * using the spot_hue set above. So:
   *
   *    + hue will always be set to spot_hue (a value from 0-360)
   *    + saturation can vary from 0-100
   *    + brighness can vary from 0-100
   *
   * examples:
   *    - fill(this.spot_hue, 25, 50);     // desaturated. middle brightness.
   *    - stroke(this.spot_hue, 100, 100); // fully saturated and maximum brightness
   */
  this.draw = function(values, size) {
    var hue = values[0];
    var sat = values[1];
    var brt = values[2];
    var color1 = map(values[2], 0, 100, 10, 70);
    var color2 = map(values[1], 0, 100, color1+20, 240)
    var color3 = map(values[0], 0, 100, 10,70);

    var s2 = size/2;
    var halfSize = size/2;

    var level = map(hue, 0, 360, 0.2, 0.8);
    var noCir = map(saturation, 0,100,3,17);
    var big = map(hue, 0, 360, 0.2, 0.8);
    var inner_size = 0.2 + 0.4 * 0.3;
    var s3 = size * inner_size;

    var shift_frac = (values[1] - 50.0) / 50.0;
    var max_shift = 0.5 * (size - s3);
    var x_shift = shift_frac * max_shift;

//color controlling 
    noStroke();
    if(hue>200 && hue<300) {
      fill(this.spot_hue, sat, brt, big);
     
    }

    else {
      fill(this.spot_hue, 0, 59, big);
      
    }

     translate(size/2,size/2);
 //calling polygon
    polygon(size/512, size/512, s2, color1/8); 
    var s4= s2/2;
    var s6 = s2*1.5;
    for(var i=0; i<15; i++){
    push();

    pop();

//controls the center - both the flower and the ellipses.
     for (var i = 0; i < 17; i++) {
            push();
         
            rotate(360 * i/2);
            scale(0.35);
            noStroke();
           fill(0, 0, 59, level);
            ellipse(s4-12,10+s4,s2/3,s2*2);
            fill(color1);
          ellipse(s6+x_shift, s4/2, s4);
            pop();
           
          }

}


  }
}
//polygon function 
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
