export function detectcollision(ball,ball1) {
let dx = ball.position.x - ball1.position.x;
    let dy = ball.position.y - ball1.position.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let r1 = ball.size/2;
    let r2 = ball1.size/2;
    //check for collision
    if(distance <= r1+r2){
        //logic -- calculate normal and tangent unit vectors-
        //then multiply by speed in that direction to get the speed in that particular direction i.e normal or tangent(by dot product)
        //then apply formula for final velocity
        //then get vector by multiplying by unit normal or unit vector
        //final velocity vector by adding normal and tangent components
        let normalx = ball.position.x - ball1.position.x;   //normal vector
        let normaly = ball.position.y - ball1.position.y;   //normal vector
        let unitnormalx = normalx/distance;      //unit normal vector
        let unitnormaly = normaly/distance;      //unit normal vector
        
        let unittangentx = - unitnormaly;        //unit tangent vector
        let unittangenty = unitnormalx;          //unit tangent vector
        let alongnormalballinivelx = ball.speed.x*unitnormalx;
        let alongnormalballinvely = ball.speed.y*unitnormaly;
        let alongnormalball1inivelx = ball1.speed.x*unitnormalx;
        let alongnormalball1invely = ball1.speed.y*unitnormaly;

        let alongtangentballinivelx = ball.speed.x*unittangentx;//this will be final also
        let alongtangentballinvely = ball.speed.y*unittangenty;//this will be final also
        let alongtangentball1inivelx = ball1.speed.x*unittangentx;//this will be final also
        let alongtangentball1invely = ball1.speed.y*unittangenty;//this will be final also
        
        let alongtangentinivelball = alongtangentballinivelx + alongtangentballinvely;
        let alongnormalinivelball = alongnormalballinivelx+alongnormalballinvely;
        let alongtangentinivelball1 = alongtangentball1inivelx + alongtangentball1invely;
        let alongnormalinivelball1 = alongnormalball1inivelx +alongnormalball1invely;
        
        let alongnormalballfinvel = (alongnormalinivelball*(r1-r2) + 2*r2*alongnormalinivelball1)/(r1+r2);
        let alongnormalball1finvel = (alongnormalinivelball1*(r2-r1) + 2*r1*alongnormalinivelball)/(r1+r2);
        
        //normal vector for ball
        let alongnormalballfinvelvectx = alongnormalballfinvel*unitnormalx;
        let alongnormalballfinvelvecty = alongnormalballfinvel*unitnormaly;
        //tangent vector for ball
        let alongtangentballfinvelvectx= alongtangentinivelball*unittangentx;
         let alongtangentballfinvelvecty= alongtangentinivelball*unittangenty;
        
        //normal vector for ball1
        let alongnormalball1finvelvectx = alongnormalball1finvel*unitnormalx;
        let alongnormalball1finvelvecty = alongnormalball1finvel*unitnormaly;
        //tangent vector for ball1
        let alongtangentball1finvelvectx= alongtangentinivelball1*unittangentx;
         let alongtangentball1finvelvecty= alongtangentinivelball1 *unittangenty;
        
        
        ball.speed.x =alongnormalballfinvelvectx + alongtangentballfinvelvectx ;
        ball.speed.y =alongnormalballfinvelvecty + alongtangentballfinvelvecty;
        ball1.speed.x = alongnormalball1finvelvectx + alongtangentball1finvelvectx;
        ball1.speed.y =alongnormalball1finvelvecty + alongtangentball1finvelvecty;
    }
}