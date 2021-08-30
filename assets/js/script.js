// DISPLAYS today's date on HEADER
var todayDate = moment().format('MMM DD YYYY, h:mm a');
$("#currentDay").text(todayDate);

// SCHEDULER function
$(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        // GETS values in JQuery
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

       // SETS TASK and TIME into local storage
        localStorage.setItem(time, task);
    })
   
    function timeTracker() {

        //CHECK current number of hours.
        var currentTime = moment().hour();
        
        // LOOP time block
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // CHECK time to change colors
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    };

    // CHECKS if local storage has entries and GETS them if so
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
