let mySound;
function setup(){
createCanvas(600,600);
background(225);
textSize(60)
text('Press (M)', 100, 200);
}
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/529605__chalicewell__katzenmix.wav');
}
function  keyPressed() {
  if (key === 'M' || key === 'm') {
    if (mySound && !mySound.isPlaying()) {
      mySound.play();
    }
    return false;
  }
}

