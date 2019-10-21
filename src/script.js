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
		return this.currentSecond()*360/60-90;
	},
	minuteDegrees(){
		return this.currentMinute()*360/60-90;
	},
	hourDegrees(){
		return this.currentHour()*360/12-90;
	},
	
};

window.addEventListener('load',function(){
	handSeconds.style.transform = `rotate(${clock.secondDegrees()}deg)`;
	handMinutes.style.transform = `rotate(${clock.minuteDegrees()}deg)`;
	handHours.style.transform = `rotate(${clock.hourDegrees()}deg)`;
});

setInterval(function(){
	handSeconds.style.transform = `rotate(${clock.secondDegrees()}deg)`;

},1000);

setInterval(function(){
	handMinutes.style.transform = `rotate(${clock.minuteDegrees()}deg)`;
	console.log(`I've change the minuteHand to ${clock.currentMinute()}`)
},60000);

setInterval(function(){
	handHours.style.transform = `rotate(${clock.hourDegrees()}deg)`;
	console.log(`I've change the hourHand to ${clock.currentHour()}`)
},3600000);