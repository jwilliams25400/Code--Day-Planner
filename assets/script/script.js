$(document).ready(function () {
  var todayEl = $("#today");
  var currentHour = moment().format("H");
  var saveBtn = $(".save-btn");
  var clearEl = $("#clear-planner");
  var boxesEl = $("#time-boxes");
  var textboxes = [
    $("#area9"),
    $("#area10"),
    $("#area11"),
    $("#area12"),
    $("#area1"),
    $("#area2"),
    $("#area3"),
    $("#area4"),
    $("#area5"),
  ];

  // set date and time in header
  function displayDayTime() {
    var dayAndTimeEL = moment().format("MMM DD, YYYY [at] hh:mm:ss a ");
    todayEl.text(dayAndTimeEL);
  }
  setInterval(displayDayTime, 1000);

  // set color for various hours throughout day

  if (currentHour === "9") {
    $("#area9").css("background-color", "red");
    $("#area10").css("background-color", "green");
    $("#area11").css("background-color", "green");
    $("#area12").css("background-color", "green");
    $("#area1").css("background-color", "green");
    $("#area2").css("background-color", "green");
    $("#area3").css("background-color", "green");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "10") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "red");
    $("#area11").css("background-color", "green");
    $("#area12").css("background-color", "green");
    $("#area1").css("background-color", "green");
    $("#area2").css("background-color", "green");
    $("#area3").css("background-color", "green");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "11") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "red");
    $("#area12").css("background-color", "green");
    $("#area1").css("background-color", "green");
    $("#area2").css("background-color", "green");
    $("#area3").css("background-color", "green");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "12") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "red");
    $("#area1").css("background-color", "green");
    $("#area2").css("background-color", "green");
    $("#area3").css("background-color", "green");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "13") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "grey");
    $("#area1").css("background-color", "red");
    $("#area2").css("background-color", "green");
    $("#area3").css("background-color", "green");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "14") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "grey");
    $("#area1").css("background-color", "grey");
    $("#area2").css("background-color", "red");
    $("#area3").css("background-color", "green");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "15") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "grey");
    $("#area1").css("background-color", "grey");
    $("#area2").css("background-color", "grey");
    $("#area3").css("background-color", "red");
    $("#area4").css("background-color", "green");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "16") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "grey");
    $("#area1").css("background-color", "grey");
    $("#area2").css("background-color", "grey");
    $("#area3").css("background-color", "grey");
    $("#area4").css("background-color", "red");
    $("#area5").css("background-color", "green");
  } else if (currentHour === "17") {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "grey");
    $("#area1").css("background-color", "grey");
    $("#area2").css("background-color", "grey");
    $("#area3").css("background-color", "grey");
    $("#area4").css("background-color", "grey");
    $("#area5").css("background-color", "red");
  }
  else {
    $("#area9").css("background-color", "grey");
    $("#area10").css("background-color", "grey");
    $("#area11").css("background-color", "grey");
    $("#area12").css("background-color", "grey");
    $("#area1").css("background-color", "grey");
    $("#area2").css("background-color", "grey");
    $("#area3").css("background-color", "grey");
    $("#area4").css("background-color", "grey");
    $("#area5").css("background-color", "grey");
  }

  // set local storage to empty
  var dayPlannerNoteEl = JSON.parse(
    localStorage.getItem("dayPlannerNoteEl")
  ) || {
    area9: "",
    area10: "",
    area11: "",
    area12: "",
    area1: "",
    area2: "",
    area3: "",
    area4: "",
    area5: "",
  };

  localStorage.setItem("dayPlannerNoteEl", JSON.stringify(dayPlannerNoteEl));
  $("#area9").val(dayPlannerNoteEl.area9);
  $("#area10").val(dayPlannerNoteEl.area10);
  $("#area11").val(dayPlannerNoteEl.area11);
  $("#area12").val(dayPlannerNoteEl.area12);
  $("#area1").val(dayPlannerNoteEl.area1);
  $("#area2").val(dayPlannerNoteEl.area2);
  $("#area3").val(dayPlannerNoteEl.area3);
  $("#area4").val(dayPlannerNoteEl.area4);
  $("#area5").val(dayPlannerNoteEl.area5);

  // store calender notes

  // clear planner
  clearEl.on("click", function () {
    boxesEl.empty();
  });
  // function clearPlanner()
  // $("#clear-planner").click(() => {
  //   localStorage.clear();
  //   location.reload();
  // });

  // create our document ready function to make sure nothing runs before we load the page
  $(".save-btn").on("click", function () {
    var dayPlannerNoteEl = JSON.parse(localStorage.getItem("dayPlannerNoteEl"));
    var commentEl = $(this).siblings(".comment").val();

    var timeEl = $(this).siblings(".comment").attr("id");
    dayPlannerNoteEl[timeEl] = commentEl;
    localStorage.setItem("dayPlannerNoteEl", JSON.stringify(dayPlannerNoteEl));
  });
});

// function  to listen for click even on the page
// grab and save event options
//creat variables to save user input and time

//save to localstorage

//alert user that items have been saved to local storage

//creat some kind of timeout value that removes the notification

// creat time updater function()
//get the current time

// create  our loop to go over all the time blocks

// if else statnement for below 3
// need a ().removeClass() or add class
// check to see if we have passed our time

//check to see if current hour matches physical hour

// check to see if the time is in the future

// retrieve local storage an render items to correct.
