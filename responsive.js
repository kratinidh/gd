export function responsive(x,ball,ball1) {
  if (x.matches) { // If media query matches
         ball.size = 90;
         ball1.size=90;
         ball.speed = {x:0,y:0};
         ball1.speed = {x:0,y:0};
  } else {
         ball.size = 70;
         ball1.size=70;
         ball.speed = {x:0,y:0};
         ball1.speed = {x:0,y:0};
  }
}