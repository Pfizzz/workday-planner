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

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);


// loads data from local storage
$("#09 .description").val(localStorage.getItem('09'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));


});