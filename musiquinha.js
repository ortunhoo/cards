let musica;

function preload(){
  musica = loadSound("som.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}