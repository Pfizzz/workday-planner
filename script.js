// javascript for challenge 5 //


var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime);


//create function to save data to localstorage

function saveCalendar() {
 console.log("placeholder");
};

//functions calls
$("li #cal-enter").on("click", editCalendar)
$("li .cal-enter").on("click", editCalendar)