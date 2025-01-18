let userDate = prompt("Enter your birth date");
let userMonth = prompt("Enter your birth month");
let userYear = prompt("Enter your birth year");

let birthDate = new Date(userYear, userMonth - 1, userDate);

let daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
let daysOfMonth = ["Jan","Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
let dayOfWeek = daysOfWeek[birthDate.getDay()];
let monthName = daysOfMonth[birthDate.getMonth()];

alert("Your birthday is on " + dayOfWeek + ", " + userDate + "-" + monthName + "-" + userYear);

