var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Gemia = createSprite(395, 5, 5, 5);
var Ladroni = createSprite(15, 385, 15, 15);
var Laser = createSprite(100, 300, 250, 5);
var Laser1 = createSprite(300, 100, 250, 5);

Ladroni.shapeColor = ("black")
Laser.shapeColor = ("red")
Laser1.shapeColor = ("red")
Gemia.shapeColor = ("Cyan")

Laser.velocityX = 4
Laser1.velocityX = 4


createEdgeSprites(edges);
Laser.bounceOff(edges);
Laser1.bounceOff(edges);
Ladroni.collide(edges);
  
  
function draw(){
  background("Gray");
  createEdgeSprites(edges);
  if (keyDown("UP_ARROW")){
  Ladroni.velocityX = 0
  Ladroni.velocityY = -6;
  }
  if (keyDown("DOWN_ARROW")){
  Ladroni.velocityX = 0
  Ladroni.velocityY = 6
  }
  if (keyDown("RIGHT_ARROW")) {
  Ladroni.velocityX = 6;
  Ladroni.velocityY = 0 
  }
  if (keyDown("LEFT_ARROW")) {
  Ladroni.velocityX = -6
  Ladroni.velocityY = 0
  }
  Laser.bounceOff(edges);
  Laser1.bounceOff(edges);
  if (Laser.isTouching(Ladroni)) {
  Ladroni.velocityX=0
  Ladroni.velocityY=0
  Laser.velocityX=0
  Laser1.velocityX=0
  text("Game over...", 200, 200);
  background("yellow")
  }
  if (Laser1.isTouching(Ladroni)) {
  Ladroni.velocityX=0
  Ladroni.velocityY=0
  Laser.velocityX=0
  Laser1.velocityX=0
  text("Game over...", 200, 200);
  background("yellow")
  }
  if (Ladroni.isTouching(Gemia)) {
  background("white");
  Ladroni.velocityX = 0
  Ladroni.velocityY = 0
  text("Congratulations!", 200, 200);
  
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
