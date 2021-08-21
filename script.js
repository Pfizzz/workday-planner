//create function to save data to localstorage
$(document).ready(function() {
$('.saveBtn').on("click", function() {
    console.log("item saved");
    var tasks= $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, tasks); 
  });
});

// loads data from local storage
$("#9AM .description").val(localStorage.getItem('9AM'));
$("#10AM .description").val(localStorage.getItem('10AM'));
$("#11AM .description").val(localStorage.getItem('11AM'));
$("#12PM .description").val(localStorage.getItem('12PM'));
$("#1PM .description").val(localStorage.getItem('1PM'));
$("#2PM .description").val(localStorage.getItem('2PM'));
$("#3PM .description").val(localStorage.getItem('3PM'));
$("#4PM .description").val(localStorage.getItem('4PM'));
$("#5PM .description").val(localStorage.getItem('5PM'));


// current time

var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime);


// logic for color changing

