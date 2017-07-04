//创建游戏界面
gameEngine={
	ele:null,
	Enermys:{},
	Bullets:{},
	ScoretoTal:0,
	init:function(){
		this.ele=document.getElementById('main')
		return this;
		
	},
	start:function(){
		gameEngine.loading(function(){
			//创造飞机
			   myPlan.init().move();
			   myPlan.fire()
		
			     gameEngine.ListenKey()
			     gameEngine.creatElemy()
			     gameEngine.Crash()
			     gameEngine.backgroundMove()
			   
			 
			
		})
	},
	
	loading:function(callback){
		var Logo=document.createElement("div");
		    Logo.className="logo"
		    gameEngine.ele.appendChild(Logo)
		var Run=document.createElement("div");
	        Run.className="run";
	        gameEngine.ele.appendChild(Run)
	        //console.log(Run);
	        
	        var arr=["images2/loading1.png","images2/loading2.png","images2/loading3.png"]
	        var i=0;
	        var timer=setInterval(function(){
	        	if(i>=5){
	        		clearInterval(timer)
	        		gameEngine.ele.removeChild(Logo);
	        		gameEngine.ele.removeChild(Run);
	        		callback()
	        	}
	        	//console.log(arr[++i%3])
	        	Run.style.background="url("+arr[++i%3]+") no-repeat";
	        	//Run.style.background="url(images2/loading1.png) no-repeat"
	        },50)
	},
 //创建敌机 
  creatElemy:function(){
	
    		 timer=setInterval(function(){
   	 	var flag=Math.random()>0.6?true:false;
   	 	if(flag){
   	 		var enermy=new Enermy(Enermy.prototype.Enermy_type_Big)
   	 		    enermy.init().move()
   	 		
   	 	}
   	 	
   	 },1500)
   	
     timer=setInterval(function(){
     	var flag=Math.random()>0.5?true:false;
   	 	if(flag){
   	 		var enermy=new Enermy(Enermy.prototype.Enermy_type_middle);
   	 		    enermy.init().move()
   	 		
   	 	}
   	 },700)
   	 
   	  timer=setInterval(function(){
   	  	var flag=Math.random()>0.4?true:false;
   	 	if(flag){
   	 		var enermy=new Enermy(Enermy.prototype.Enermy_type_small)
   	 		    enermy.init().move()
   	 		
   	 	}
   	 },500)
   	
    	
 },
//键盘监听
  ListenKey:function(){
 	    var xSpeed=0;
 	  	var ySpeed=0;
 	  //	console.log(0)
 	  window.onkeydown=function(e){
 	  	e=e||event;
 	  	//console.log(e.keyCode)
 	  	
 	  	if(e.keyCode==37){
 	  		xSpeed=-5
 	  	}
 	  	if(e.keyCode==38){
 	  		ySpeed=-5
 	  	}
 	  	if(e.keyCode==39){
 	  		xSpeed=5
 	  	}
 	  	if(e.keyCode==40){
 	  		ySpeed=5
 	  	}
 	     
 	      var timer=setInterval(function(){
 	 	 var x=myPlan.ele.offsetLeft+xSpeed;
 	 	 var y=myPlan.ele.offsetTop+ySpeed;
 	  if(x<0){
 	  	x=0
 	  }else if(x>gameEngine.ele.offsetWidth-myPlan.ele.offsetWidth){
 	  	x=gameEngine.ele.offsetWidth-myPlan.ele.offsetWidth
 	  }
 	   if(y<0){
 	  	y=0
 	  }else if(y>gameEngine.ele.offsetHeight-myPlan.ele.offsetHeight){
 	  	y=gameEngine.ele.offsetHeight-myPlan.ele.offsetHeight;
 	  }

 	  myPlan.ele.style.left=x+"px";
 	  myPlan.ele.style.top=y+"px";
 	
 	 	
 	 },100)
 	  
 	  }
 	  
 	  window.onkeyup=function(){
 	  	xSpeed=0;
 	  	ySpeed=0
 	  }
 	  
 	
 	 
 	
 },
//遍历
Crash:function(){
	//console.log("1");
	//console.log(gameEngine.Bullets)
	//console.log(gameEngine.Enermys)
	//检测敌机和子弹
	 timer=setInterval(function(){
		for(var k in gameEngine.Bullets){
		    for(var j in gameEngine.Enermys){
			     if(isCrash(gameEngine.Bullets[k].ele, gameEngine.Enermys[j].ele)){
			     	
			     	//console.log("发生了碰撞")
			     	gameEngine.Bullets[k].boom()
			     	gameEngine.Enermys[j].hurt()
			     }
				
			
		}
	}
	},30)
	var isCrashMyplane=false;
	timer=setInterval(function(){
		for(var i in gameEngine.Enermys){
			if(!isCrashMyplane&&isCrash(gameEngine.Enermys[i].ele,myPlan.ele)){
				console.log("碰撞到了我的飞机")
				isCrashMyplane=true;
				 myPlan.boom()
				 var UName=prompt("您的总分是"+gameEngine.ScoretoTal+",请输入大名")
			     if(UName){
			     	    ajax({
			     	      type:"post",
			     		  url:"http://60.205.181.47/myPHPCode4/getRank.php",
			     		  async:true,
			     		  data:{name:UName,score:gameEngine.ScoretoTal},
			     		  success:function(result){
			     		  	var arrStr=JSON.parse(result)
			     		 // 	console.log(arrStr)
			     		  	location.href="paihang.html"
			     		  	
			     		  }
			     	    })
			     		
			     			
			     			
			     		
			     		
			     	
			     }
			      else{
			      	location.reload()
			      }
			}
		
		}
	},30)
	
	
}
,
backgroundMove:function(){
	var y=0
	var timer=setInterval(function(){
		gameEngine.ele.style.backgroundPositionY=++y+"px"
		
	},100)
}

}

