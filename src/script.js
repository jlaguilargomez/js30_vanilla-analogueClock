// From DOM to JS
let handSeconds= document.getElementById('seconds');
let handMinutes = document.getElementById('minutes');
let handHours= document.getElementById('hours');


let clock = {
	currentTime(){
        let newTime = new Date();
        return newTime;
    },
	currentSecond(){
		return this.currentTime().getSeconds();
	},
	currentMinute(){
		return this.currentTime().getMinutes();
	},
	currentHour(){
		return this.currentTime().getHours();
	},
	secondDegrees(){
		return this.currentSecond()*360/60;
	},
	minuteDegrees(){
		return this.currentMinute()*360/60;
	},
	hourDegrees(){
		return this.currentHour()*360/12;
	},
	
};

setInterval(console.log(clock.currentSecond()),1000);