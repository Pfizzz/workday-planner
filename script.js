//create function to save data to localstorage
$(document).ready(function() {
$('.saveBtn').on("click", function() {
    console.log("item saved");
    var tasks= $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, tasks); 
  });



// current time

var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime);


// logic for color changing

function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  var interval = setInterval(hourUpdater, 15000);
  hourUpdater();


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


});