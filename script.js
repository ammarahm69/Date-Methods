/**Program that displays current date & time */
let date = new Date();
console.log(date);

// Prom that display current month in alert//
let monArr = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = date.getMonth() + 7;
console.log("Current month :" + monArr[month]);
var day = date.getDay();
console.log('Today is : ' + dayName[day].slice(0, 3));

function fun() {
    var day = date.getDay()+1;
    // console.log(dayName[day].slice(0, 3));
    if(dayName[day] == 'Saturday' ||dayName[day] == 'Sunday'){
        console.log(`Today is Fun day`);
    }
}
fun();

function dat(){
    var dat = date.getDate();
    console.log(`Today's date `+ dat);
    if(dat <=15){
        console.log("First fifteen days of the month");
    } else {
        console.log ("Last days of the month");
    }
}
dat();
let now = new Date();
console.log(now);
let given = new Date(`1 Jan 1970`);
console.log(given); 
let milliseconds = now - given;
console.log(milliseconds + ' miliseconds');

let minutes = milliseconds / (1000 * 60);
console.log(minutes + ' minutes'); 

let hours = now.getHours(); // Get the current hour (0-23)

if (hours < 12) {
    console.log(("It's AM"));
} else {
    console.log(("It's PM"));
}

let present = new Date();
// console.log(present); 
let passed = new Date('18 June 2015');
// console.log(passed); 
let milli = present - passed;
let days = milli / (1000 * 60 * 60 * 24);
console.log(Math.round(days) + ' days have passed since 2015 1st Ramadan'); 



