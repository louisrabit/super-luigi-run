class Component {
    constructor(width, height, color, x, y, ctx /* , url */) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.speedX = 0;
      this.speedY = 0;
    /*   const img = new Image();
      img.addEventListener('load', ()=> {})
      img.src = url
      this.img = img; */
    }
  

  
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      //this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)


      
          ctx.fillRect(115, 0, 50, 80);
          ctx.fillRect(230, 0, 50, 80);
          ctx.fillRect(340, 0, 50, 80);
          ctx.fillRect(470, 0, 50, 80);
        }
  
    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.width;
    }
  
    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.height;
    }


   
  
    crashWith(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }


    crashWith(floor) {
      return !(
        this.bottom() < floor.top() ||
        this.top() > floor.bottom() ||
        this.right() < floor.left() ||
        this.left() > floor.right()
      );
      
    }




  }

  class Circle extends Component {
    constructor(x, y, speed, ctx, imgUrl){
      super()
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.ctx = ctx;
      this.width = 30;
      this.height = 30;
      const img = new Image();
      img.addEventListener('load', ()=> {})
      img.src = imgUrl
      this.img = img;
    }

    draw(){
   /*    this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath(); */
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.width;
    }
  
    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.height;
    }
  }

