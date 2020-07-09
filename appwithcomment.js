//explanation-- function sizing for rezising window everytime window is resized
//Ball class for balls, update method everytime updates the position of ball by adding the speed along particular axis
//if part in update method to detect collision with walls and reverse the speed on collision
//function gameloop is event loop that requests for frame  everytime an update is made
//in event loop deltatime to measure change from previous time stamp ,if no change then return
//if change then add the speed to position for new position and update the frame everytime
//now in the event loop check for collision with the second ball by checking x coordinates
import {Ball,sizing} from './ball.js' ;
import {startmove} from './movetouch.js';
import {responsive} from './responsive.js';
import {collision} from './collision.js';

var canvas = document.getElementById('gameScreen'); 
var ctx = canvas.getContext("2d");

var domRect = canvas.getBoundingClientRect();
console.log(domRect.x);
var dpi = window.devicePixelRatio;

var MAX_WIDTH =  getComputedStyle(canvas).getPropertyValue('width').slice(0,-2)*dpi;
var MAX_HEIGHT = getComputedStyle(canvas).getPropertyValue('height').slice(0,-2)*dpi;
// remeber the current canvas height and width need to be passed for currect result and in function sizing we set the size as above

let ball = new Ball(MAX_WIDTH,MAX_HEIGHT);
let ball1 = new Ball(MAX_WIDTH,MAX_HEIGHT);
ball1.image = document.getElementById('img_ball1');
ball1.position ={x:domRect.x+ball.size*3,y:domRect.y};

var x = window.matchMedia("(max-width: 700px)")
responsive(x,ball,ball1) // Call listener function at run time
x.addListener(responsive) // Attach listener function on state changes

startmove(ball,ball1);

let lastTime = 0;
function gameLoop(timestamp){
    sizing();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,800,600);
    ball.update(deltaTime);     //update position each after each delta time interval
    ball1.update(deltaTime);
    ball.draw(ctx);
    ball1.draw(ctx);
    collision(ball,ball1);
    requestAnimationFrame(gameLoop);
}
gameLoop();
//clean code
//gravity
//coefficient of restitution ,after bouncing speed less after each collision
//modes -static mode no gravity
//mode2-ball started gravity applied (no collision mode)
//mode3 -- vel. is zero and also height is more than 