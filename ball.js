let canvas = document.getElementById('gameScreen'); 
let domRect = canvas.getBoundingClientRect();
let dpi = window.devicePixelRatio;
//object class will detect collison with boundary automatically
export class Ball{
    constructor(width,height){
        this.image =  document.getElementById('img_ball');
        this.position = {x:domRect.x+0.5*width,y:domRect.y +0.94*height};
        this.speed = {x:1,y:1};
        this.size=40;
        this.width = width;
        this.height = height;
    }
    draw(ctx){
          ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    update(deltaTime){
        if(! deltaTime) return;
        this.position.x +=this.speed.x;
        this.position.y +=this.speed.y;
        if(this.position.x > this.width-this.size||this.position.x<0){
            this.speed.x = - this.speed.x;
        }
        if(this.position.y>this.height-this.size||this.position.y<0){
            this.speed.y = - this.speed.y; 
        }
    }
}

export function sizeofcanvas(){
                let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
    }
  }
//set the correct attributes for a crystal clear image!
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
    }
    