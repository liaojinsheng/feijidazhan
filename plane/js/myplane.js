
 var myPlan={
	 ele:null,
	 fireValue:1000,
	 init:function(){
		this.ele=document.createElement("div");
		this.ele.className="Myplane";
	    gameEngine.ele.appendChild(this.ele);
		this.ele.style.left=(gameEngine.ele.offsetWidth-this.ele.offsetWidth)/2+"px";
		this.ele.style.top=gameEngine.ele.offsetHeight-this.ele.offsetHeight+"px";
		return this
    },
    
    move:function(){
    	var self=this;
    	this.ele.onmousedown=function(e){
    		e=e||event;
    		var disX=e.offsetX
    		var disY=e.offsetY
    	
    		document.onmousemove=function(e){
    			e=e||event;
    			var x=e.pageX-disX;
    			if(x<0){
    				x=0
    			}else if(x>gameEngine.ele.offsetWidth-self.ele.offsetWidth){
    				x=gameEngine.ele.offsetWidth-self.ele.offsetWidth;
    			}
    			myPlan.ele.style.left=x+"px";
    			myPlan.ele.style.top=e.pageY-disY+"px";
    			//console.log(self.ele)
    		}
    		
    		self.ele.onmouseup=function(e){
    			e=e||event;
    			document.onmousemove=null;
    			self.ele.onmouseup=null;
    			
    		}
    	}
    },
	
    fire:function(){
    	var timer=setInterval(function(){
    		var bullor=new Bullet();
      	     bullor.init().move()
    		
    	},myPlan.fireValue)
    	
    },
    boom:function(){
    	var self=this;
    	//console.log("bo")
    	var i=0
    	var arr=["images2/me_die1.png","images2/me_die2.png","images2/me_die3.png"]
    	var timer=setInterval(function(){
    		if(i>=arr.length){
    			clearInterval(timer);
    			gameEngine.ele.removeChild(self.ele)
    			alert("game-over")
    		}
    		self.ele.style.background="url("+arr[i++]+")"
    	},30)
    }
    
   
    
    
   

 
 
 
 
 
 }


