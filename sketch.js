function setup() {
	createCanvas(700,700); // make an HTML canvas element width x height pixels
  console.log(frameRate())
}
let prev = -1
function draw() {
	background('#000000');
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(50);
	text(second(), 10, 90);
    let dir = -1;
    let t = minute();
    if (t !== prev){
      console.log(t);
      prev = minute();
//       dir = - dir;
    }
  
    let v = createVector(width/2, height/2);

    let frac = 3.75/6;
    let r = createVector(frac * width/2 , frac * height/2);
    
    let m = millis() / (36000*1.0);
  
  
    for (i=0;i<second();i++){
      let eps = i * PI / 3600;
      let angle =  dir*(eps + m);
      r.rotate(angle);
      drawball(v, r, '#006400',10);
    }
  
    let mfrac = 2.5/6
    let mr = createVector(mfrac * width/2 , mfrac * height/2);
    for (i=0;i<minute();i++){
      let eps = i * PI / 3600;
        let m = millis()/(36000*1.2);
      let angle =  -dir *(eps + m);
      mr.rotate(angle);
      drawball(v, mr,'#008000',20);
    }
    
    let hfrac = 1.25/6
    let hr = createVector(hfrac * width/2 , hfrac * height/2);
    for (i=0;i<hour();i++){
      let eps = i * PI / 3600;
      let m = millis()/(36000*1.3);
      let angle =  dir*(eps + m);
      hr.rotate(angle);
      drawball(v, hr,'#9ef01a',30);
    }
}


function drawball(v,r,c,d){
  push();
  fill(c)
  translate(v.x,v.y)
  circle(r.x,r.y, d);
  pop();
  
}
