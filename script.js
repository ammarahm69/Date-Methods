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




