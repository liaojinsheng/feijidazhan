class Bullet{
	constructor(ele,id){
		
		[this.ele,this.id]=[document.createElement("div"),parseInt(Math.random()*10000000)]
		
	}

	init(){
		this.ele.className="bullet";
		gameEngine.ele.appendChild(this.ele)
		gameEngine.Bullets[this.id]=this;
		this.ele.style.left=myPlan.ele.offsetLeft+myPlan.ele.offsetWidth/2-this.ele.offsetWidth/2+"px"
		this.ele.style.top=myPlan.ele.offsetTop-this.ele.offsetHeight+"px";
		return this
	}
	move(){
  	 let self1=this;
  	 var timer= setInterval(()=>{
  	 	var y=self1.ele.offsetTop-10
  	 	if(y<-18){
  	 		clearInterval(timer);
  	 		gameEngine.ele.removeChild(self1.ele)
  	 	}else{
  	 		self1.ele.style.top=y+"px";
  	 		
  	 	}
  	 	
  	 	
  	 },100)
  }
    boom(){
    	let self=this;
    	this.ele.className="die1"
    	const arr=["images2/die1.png","images2/die2.png"]
    	let i=0;
    	
    	this.timer=setInterval(()=>{
    		if(i>=2){
    			clearInterval(self.timer)
    			//gameEngine.ele.removeChild(self.ele)
    			
    		self.ele.remove()
    			delete gameEngine.Bullets[self.id];
    		}else{
    		 self.ele.style.background="url("+arr[++i]+") no-repeat"
    			
    		}

    	
    	},500)
    	
    	
    }

};
    
