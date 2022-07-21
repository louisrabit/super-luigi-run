
class Game {
    constructor(ctx, width, height, player) {
      this.frames = 0;
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.obstacles = [];
      this.interval = null;
      this.isRunning = false;
      this.points = 0;
      this.life = 10
      const img = new Image();
      img.addEventListener('load', ()=> {})
      img.src = './docs/assets/images/image1.jpg'
      this.img = img;
      //this.life = 5//
      //this.floor = floor//
};


  
    start = () => {
        
      this.interval = setInterval(this.updateGameArea, 20);
      this.isRunning = true;
    };
  
    reset = () => {
      this.player.x = 320;
      this.player.y = 540;
      this.frames = 0;
      this.obstacles = [];
      this.life = 10
      this.points = 0
      this.start();
    };
  
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawBackground(){
      this.ctx.drawImage(this.img, 0, 0, cWidth, cHeight)
    }
  
    stop() {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  
    updateObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += this.obstacles[i].speed;
        this.obstacles[i].draw();

        if(this.obstacles[i].y >= cHeight){
          this.life--
          this.obstacles.splice(i, 1)
        }
      }
    
      this.frames += 1;
  //interval between enemies
      if (this.frames % 300 === 0) {
        this.obstacles.push(new Circle(120 , 10,  Math.floor(Math.random()* 3 + 1), this.ctx, "./docs/assets/images/enemy.png"));
        this.obstacles.push(new Circle(240, 10, Math.floor(Math.random()* 2 + 2),  this.ctx, "./docs/assets/images/enemy.png"));
        this.obstacles.push(new Circle(350, 10, Math.floor(Math.random()* 3 + 3),  this.ctx, "./docs/assets/images/enemy.png"));
        this.obstacles.push(new Circle(480, 10, Math.floor(Math.random()* 2 + 1),  this.ctx, "./docs/assets/images/enemy.png"));
  
      }

    }

/*
      //check if is correct
      checkhit= () => {
        const crashed = this.obstacles.some((obstacle) => {
          return this.player.crashWith(obstacle);
        });
    
        if (crashed) {
          this.life--
        }
      };
    
      life() {
        this.ctx.font = '24px sans-serif';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Life: ${this.life}`, 560, 35);
      }
  */

     





  
    checkPoints= () => {
      const crashed = this.obstacles.some((obstacle, index) => {

         if(this.player.crashWith(obstacle)){
          this.obstacles.splice(index, 1)
          return true
         }
      });
  
      if (crashed) {
        this.points++
      }
    };
  
    score() {
      //const points = Math.floor(this.frames / 5);
      this.ctx.font = '30px sans-serif';
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(`Score: ${this.points}`, 0, 30);
      this.ctx.fillText(`Life: ${this.life}`, 560, 30);
    }


   checkGameOver = () => {
    const crashedcircle = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle);
    });
    if (crashedcircle){
        //this.stop();
        this.life--
    } else if (this.life === 0){
        this.stop();
        return "Game over" ;
    }

 } 

 checkBoundaries(){
  if(this.player.x <=4){
    this.player.x = 4;
  } else if (this.player.x + this.player.width >= cWidth -4){
    this.player.x = cWidth - 4 - this.player.width
  }
 }
  
    updateGameArea = () => {
      this.clear();
      this.drawBackground();
      this.checkPoints();
      this.checkBoundaries();
      this.checkGameOver();
      this.updateObstacles();
      this.player.newPos();
      this.player.draw();
      this.score();
      
     // this.life();// check
     // this.hit();//check
    };
  }



//ver se esta correto !!!!

 


