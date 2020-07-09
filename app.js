import {Ball,sizeofcanvas} from './ball.js' ;   
import {startmove} from './movetouch.js';
import {responsive} from './responsive.js';
import {detectcollision} from './collision.js';

let canvas = document.getElementById('gameScreen');
  
let ctx = canvas.getContext("2d");

let domRect = canvas.getBoundingClientRect();
let dpi = window.devicePixelRatio;


let MAX_WIDTH =  getComputedStyle(canvas).getPropertyValue('width').slice(0,-2)*dpi;
let MAX_HEIGHT = getComputedStyle(canvas).getPropertyValue('height').slice(0,-2)*dpi;


let ball = new Ball(MAX_WIDTH,MAX_HEIGHT);
let ball1 = new Ball(MAX_WIDTH,MAX_HEIGHT);
ball1.image = document.getElementById('img_ball1');
ball1.position ={x:ball.size*(-3)+domRect.x+0.5*MAX_WIDTH,y:domRect.y+0.94*MAX_HEIGHT};

let x = window.matchMedia("(max-width: 700px)");
responsive(x,ball,ball1) ;
x.addListener(responsive);

startmove(ball,ball1);

let lastTime = 0;
function gameLoop(timestamp){
    sizeofcanvas();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,800,600);
    ball.update(deltaTime);     
    ball1.update(deltaTime);
    ball.draw(ctx);
    ball1.draw(ctx);
    detectcollision(ball,ball1);
    requestAnimationFrame(gameLoop);
}
gameLoop();
