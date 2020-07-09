let canvas = document.getElementById('gameScreen'); 
let domRect = canvas.getBoundingClientRect();
let dpi = window.devicePixelRatio;
let clientX, clientY;
let xball =0;  //set coordinates of ball initially to 0
let yball=0;   
let xball1 =0;   //set coordinates of ball1 initially to 0
let yball1=0;
export function startmove(ball,ball1){ 
canvas.addEventListener('touchstart', function(e) {
    // Catch the client X/Y coordinates
    clientX = e.changedTouches[0].clientX ;      
    clientY = e.changedTouches[0].clientY ;
    console.log(e);
    //match with coordinates of ball
    if(((clientX>=ball.position.x)&&(clientX<=(ball.position.x+(ball.size)/2)))&&((clientY>=domRect.y +domRect.height-ball.size)&&(clientY<=domRect.y +domRect.height))){
        xball = clientX;  //then assign to this variable the touch start coordinates of ball
        yball = clientY;
    }
    
    if(((clientX>=domRect.x+ball1.size)&&(clientX<=(domRect.x+ball1.size)+((ball1.size)/3)))&&(clientY<=(domRect.y+ball1.size) +((ball1.size)/2))){
        xball1 = clientX;  //then assign to this variable the touch start coordinates of ball1
        yball1 = clientY;
    }
    
    
}, false);

let deltaX, deltaY;
canvas.addEventListener('touchend', function(e) {
 
 console.log(xball);
    console.log(yball);
  // Compute the change in X and Y coordinates. 
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = e.changedTouches[0].clientX - clientX;    //end of touch of ball
  deltaY = e.changedTouches[0].clientY - clientY;   //end of touch of ball1
if(xball!=0&&yball!=0){
    let driftvectx = deltaX - xball;            //this is basically x of drift vector
    let driftvecty = deltaY - yball;            //this is basically y of drift vector
    let driftmagt = Math.sqrt(driftvectx * driftvectx + driftvecty * driftvecty);
    let driftunitx = driftvectx/driftmagt;   
    let driftunity = driftvecty/driftmagt;
    ball.speed.x = 10*driftunitx ;       
    ball.speed.y = 10*driftunity;
}
if(xball1!==0&&yball1!==0){
    let driftvectx1 = deltaX - xball1;
    let driftvecty1 = deltaY - yball1;
    let driftmagt1 = Math.sqrt(driftvectx1 * driftvectx1 + driftvecty1 * driftvecty1);
    let driftunitx1 = driftvectx1/driftmagt1;
    let driftunity1 = driftvecty1/driftmagt1;
    console.log(driftunitx1);
    console.log(driftunity1);
    ball1.speed.x = 10*driftunitx1;
    ball1.speed.y = 10*driftunity1;
}
    console.log(xball1);
    console.log(yball1);
  console.log(deltaX);
    console.log(deltaY);
  // Process the data ... 
}, false);
}