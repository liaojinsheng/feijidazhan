function Enermy(type) {
	this.ele = document.createElement("div");
	this.speed = 10;
	this.ph = 1;
	this.dieImgs = [];
	this.id = parseInt(Math.random() * 10000000)

	this.init = function() {
		gameEngine.ele.appendChild(this.ele)
		gameEngine.Enermys[this.id] = this;
		
		switch(type) {
			case this.Enermy_type_Big:
				this.ele.className = "plane-big"
				this.speed = this.Enermy_speed_Big;
				this.hp = this.Enermy_hp_Big;
				this.score = 30;
				this.dieImgs = ["images2/plane3_die1.png", "images2/plane3_die2.png", "images2/plane3_die3.png", "images2/plane3_die4.png", "images2/plane3_die5.png", "images2/plane3_die6.png"]

				break;
			case this.Enermy_type_middle:
				//console.log(this)
				this.ele.className = "plane-middle";
				this.speed = this.Enermy_speed_middle
				this.hp = this.Enermy_hp_middle;
				this.score = 20;
				this.dieImgs = ["images2/plane2_die1.png", "images2/plane2_die2.png", "images2/plane2_die3.png", "images2/plane2_die4.png"]

				break;
			case this.Enermy_type_small:
				this.ele.className = "plane-small";
				this.speed = this.Enermy_speed_small
				this.hp = this.Enermy_hp_small;
				this.score = 10
				this.dieImgs = ["images2/plane1_die1.png", "images2/plane1_die2.png", "images2/plane1_die3.png"]
				break;

			default:
				console.log('1')
				break;

		}
		this.ele.style.left =parseInt(Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth))+ "px";
		this.ele.style.top = -this.ele.offsetHeight + "px"

		return this
	}

	this.move = function() {
			var self = this;

			this.timer = setInterval(function() {
				var y = self.ele.offsetTop + self.speed
				if(y > gameEngine.ele.offsetHeight + self.ele.offsetHeight) {
					clearInterval(self.timer)
					gameEngine.ele.removeChild(self.ele)
					//console.log("停止计时器")
				} else {
					self.ele.style.top = y + "px";
				}

			}, 100)
		},

		this.hurt = function() {
			this.hp--;
			if(this.hp == 0) {
				this.boom()
				gameEngine.ScoretoTal += this.score;
			}
		},
		this.boom = function() {
			var self = this;
			var i = 0
			this.timer = setInterval(function() {
				if(i >= self.dieImgs.length) {
					clearInterval(self.timer);
					gameEngine.ele.removeChild(self.ele);
					delete gameEngine.Enermys[self.id]
				} else {
					self.ele.style.background = "url(" + self.dieImgs[i++] + ")"

				}

			}, 50)

		}
}
Enermy.prototype = {
	Enermy_type_Big: 1,
	Enermy_type_middle: 2,
	Enermy_type_small: 3,

	Enermy_speed_Big: 5,
	Enermy_speed_middle: 8,
	Enermy_speed_small: 10,

	Enermy_hp_Big: 3,
	Enermy_hp_middle: 2,
	Enermy_hp_small: 1
}