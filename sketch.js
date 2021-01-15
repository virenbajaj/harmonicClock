function setup() {
  createCanvas(700,700); // make an HTML canvas element width x height pixels
}
let prev = -1 // used to print minute() everytime minute changes

function draw() {
  // AM colors
  
  //sun palette
  let bg_color = '#200' 
  let sec_color = '#e85d04'
  let min_color = '#f48c06'
  let hr_color = '#9d0208'
  
  // palette
  // let bg_color = '#2d00f7' 
  // let sec_color = '#f20089'
  // let min_color = '#ff8800'
  // let hr_color = '#16db93'
  
  // let bg_color = 200
  // let sec_color = 'blue'
  // let min_color = 'red'
  // let hr_color = 'yellow'
  
  // green palette
  // let bg_color = '#000000'
  // let sec_color = '#006400'
  // let min_color = '#008000'
  // let hr_color = '#9ef01a'
  
  // earth palette
  // let bg_color = '#000000'
  // let sec_color = '#562c2c'
  // let min_color = '#f5dfbb'
  // let hr_color = '#f2542d'
  
  // PM colors
  // neon palette
    // bg_color = '#000000'
    // sec_color = '#78ff15'
    // min_color = '#00fff7'
    // hr_color = '#df1bcb'
  
  // magblue palette
    // bg_color = '#000000'
    // sec_color = '#4cc9f0'
    // min_color = '#480ca8'
    // hr_color = '#f72585'
  
  // moon palette 
    // bg_color = '#000000'
    // sec_color = '#f2f2f2'
    // min_color = '#a5a5a5'
    // hr_color = '#595959'
  
  if (hour()>=12){
    // green palette
    bg_color =  'black'
    sec_color = '#006400'
    min_color = '#008000'
    hr_color = '#9ef01a'
  }
  stroke(bg_color)
 
  
  
  // ratio of radius of concentric cirles
  let sec_rad_ratio = 4/6; 

  let min_15_rad_ratio = 2.0/6;
  let min_30_rad_ratio = 2.3/6;
  let min_45_rad_ratio = 2.6/6;
  let min_60_rad_ratio = 2.9/6;
  
  let hr_rad_ratio = .7/6;
  
  background(bg_color);

  //original clock for debugging
  // textSize(32);
  // fill(180);
  // text(hour(), 10, 30);
  // fill(100);
  // text(minute(), 10, 60);
  // fill(50);
  // text(second(), 10, 90);
  
  // print minute() everytime minute changes
  let t = minute();
  if (t !== prev){
    console.log(t);
    prev = minute();
  }
  let center = createVector(width/2, height/2);//define center of canvas
  // create hours
  let hr_speed_divider = 1.3;
  let hr_size = 30;
  createComponent('hr',center,hr_rad_ratio,hr_speed_divider,hr_color,hr_size);
  
  //create minutes 
  let min_speed_divider = -1.3;
  let min_size = 20;
  createComponent('min15',center,min_15_rad_ratio,min_speed_divider,min_color,min_size);
  createComponent('min30',center,min_30_rad_ratio,min_speed_divider,min_color,min_size);
  createComponent('min45',center,min_45_rad_ratio,min_speed_divider,min_color,min_size);
  createComponent('min60',center,min_60_rad_ratio,min_speed_divider,min_color,min_size);
  
  
  //create seconds
  let sec_speed_divider = 3.3
  let sec_size = 15;  
  createComponent('sec',center,sec_rad_ratio,sec_speed_divider,sec_color,sec_size)
}

function createComponent (type, center,rad_ratio,speed_divider,color,size){
  // console.log(type)
  let t = 0;
  let current_min = minute();
  let r = current_min/15;
  // console.log(r)
  if (type==='hr'){t = hour()%12;}
  else if (type==='min15'){
    if (r<1){t = current_min%15;}
    else{t = 15;}
  }
  else if (type==='min30'){
    if (r>1){
      if (r<2){      
        t = current_min%15;}
      else {t=15;}
    }
    else {t = 0;}
  }
  else if (type==='min45'){
     if (r>2){
      if (r<3){      
        t = current_min%15;}
      else {t=15;}
    }
    else {t = 0;}
  }
  else if (type==='min60'){
     if (r>3){
      if (r<4){      
        t = current_min%15;}
      else {t=15;}
    }
    else {t = 0;}
  }
  else if (type==='sec'){t = second();}
  let rotation_vec = createVector(rad_ratio * width/2 , rad_ratio* height/2);
  if (typeof t === 'undefined') {console.log(typeof t)}
  else{
    for (i=0;i<t;i++){
    let eps = i * PI / 3600;
    let m = millis()/(36000*speed_divider);
    let angle =  1*(eps + m);
    rotation_vec.rotate(angle);
    drawball(center, rotation_vec,color,size);
  }
}
  
}

function drawball(v,r,c,d){
  push();
  fill(c)
  translate(v.x,v.y)
  circle(r.x,r.y, d);
  pop();
  
}

function drawmins(v,r,c,d,m){
  push();
  fill(c);
  translate(v.x,v.y);
  let del = PI/60;
  for (i=0;i<m;i++){
    r.rotate(del)
    circle(r.x,r.y, d);
  }
  pop();
}
