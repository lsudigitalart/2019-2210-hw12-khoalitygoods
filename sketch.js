var vid;
var playing = false;
var completion;
function setup() {
	// noCanvas();

	createCanvas(windowWidth,2000);

	vid = createVideo("Untitled.mp4");
	vid.loop();
	vid.hide();
	noStroke();
  }
	

function draw() {
	background(0);
  	vid.loadPixels();
  	for (var y = 0; y < height; y += 10) {
    for (var x = 0; x < width; x += 5) {
      var offset = ((y*width)+x)*4;
      rect(x, y, 10,
		10 * (vid.pixels[offset+1]/255));
			fill(vid.pixels[offset],
			vid.pixels[offset+1],
			vid.pixels[offset+2]);
		   rect(x, y, 8, 8); 
    }
  }
}

function mousePressed() {
	if (!playing) {
	  vid.play();
	  vid.time((mouseX/width) * vid.duration());
	  playing = true;
	}
	else {
	  vid.pause();
	  playing = false;
	}
  }