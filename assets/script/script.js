var todayEl = $("#today")
var CurrentDate = moment().format("MMMM Do YYYY");
var currentHour = moment().format("H")
var textbox = [
    $('#comment-area9'),
    $('#comment-area10'),
    $('#comment-area11'),
    $('#comment-area12'),
    $('#comment-area1'),
    $('#comment-area2'),
    $('#comment-area3'),
    $('#comment-area4'),
    $('#comment-area5'),
    
]

if(currentHour === "9"){
    $("#comment-area9").style.backgroundColor = "red"
    $("#comment-area10").style.backgroundColor = "green"
    $("#comment-area11").style.backgroundColor = "green"
    $("#comment-area12").style.backgroundColor = "green"
    $("#comment-area1").style.backgroundColor = "green"
    $("#comment-area2").style.backgroundColor = "green"
    $("#comment-area3").style.backgroundColor = "green"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "10"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "red"
    $("#comment-area11").style.backgroundColor = "green"
    $("#comment-area12").style.backgroundColor = "green"
    $("#comment-area1").style.backgroundColor = "green"
    $("#comment-area2").style.backgroundColor = "green"
    $("#comment-area3").style.backgroundColor = "green"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "11"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "red"
    $("#comment-area12").style.backgroundColor = "green"
    $("#comment-area1").style.backgroundColor = "green"
    $("#comment-area2").style.backgroundColor = "green"
    $("#comment-area3").style.backgroundColor = "green"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "12"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "grey"
    $("#comment-area12").style.backgroundColor = "red"
    $("#comment-area1").style.backgroundColor = "green"
    $("#comment-area2").style.backgroundColor = "green"
    $("#comment-area3").style.backgroundColor = "green"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "1"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "grey"
    $("#comment-area12").style.backgroundColor = "grey"
    $("#comment-area1").style.backgroundColor = "red"
    $("#comment-area2").style.backgroundColor = "green"
    $("#comment-area3").style.backgroundColor = "green"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "2"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "grey"
    $("#comment-area12").style.backgroundColor = "grey"
    $("#comment-area1").style.backgroundColor = "grey"
    $("#comment-area2").style.backgroundColor = "red"
    $("#comment-area3").style.backgroundColor = "green"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "3"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "grey"
    $("#comment-area12").style.backgroundColor = "grey"
    $("#comment-area1").style.backgroundColor = "grey"
    $("#comment-area2").style.backgroundColor = "grey"
    $("#comment-area3").style.backgroundColor = "red"
    $("#comment-area4").style.backgroundColor = "green"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "4"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "grey"
    $("#comment-area12").style.backgroundColor = "grey"
    $("#comment-area1").style.backgroundColor = "grey"
    $("#comment-area2").style.backgroundColor = "grey"
    $("#comment-area3").style.backgroundColor = "grey"
    $("#comment-area4").style.backgroundColor = "red"
    $("#comment-area5").style.backgroundColor = "green"
}
else if(currentHour === "5"){
    $("#comment-area9").style.backgroundColor = "grey"
    $("#comment-area10").style.backgroundColor = "grey"
    $("#comment-area11").style.backgroundColor = "grey"
    $("#comment-area12").style.backgroundColor = "grey"
    $("#comment-area1").style.backgroundColor = "grey"
    $("#comment-area2").style.backgroundColor = "grey"
    $("#comment-area3").style.backgroundColor = "grey"
    $("#comment-area4").style.backgroundColor = "grey"
    $("#comment-area5").style.backgroundColor = "red"
}

// store calender notes
function newPlan9() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan9", JSON.stringify(newPlan));
    $$('#comment-area9').val("")
    $('#comment-area9'). val(JSON.parse(localStorage.plan9))
}
$("#save9").click (newPlan9)
function newPlan10() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan10", JSON.stringify(newPlan));
    $$('#comment-area10').val("")
    $('#comment-area10'). val(JSON.parse(localStorage.plan10))
}
$("#save10").click (newPlan10)
function newPlan11() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan11", JSON.stringify(newPlan));
    $$('#comment-area11').val("")
    $('#comment-area11'). val(JSON.parse(localStorage.plan11))
}
$("#save11").click (newPlan11)
function newPlan12() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan12", JSON.stringify(newPlan));
    $$('#comment-area12').val("")
    $('#comment-area12'). val(JSON.parse(localStorage.plan12))
}
$("#save12").click (newPlan12)
function newPlan1() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan1", JSON.stringify(newPlan));
    $$('#comment-area1').val("")
    $('#comment-area1'). val(JSON.parse(localStorage.plan1))
}
$("#save1").click (newPlan1)
function newPlan2() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan2", JSON.stringify(newPlan));
    $$('#comment-area2').val("")
    $('#comment-area2'). val(JSON.parse(localStorage.plan2))
}
$("#save2").click (newPlan2)
function newPlan3() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan3", JSON.stringify(newPlan));
    $$('#comment-area3').val("")
    $('#comment-area3'). val(JSON.parse(localStorage.plan3))
}
$("#save3").click (newPlan3)
function newPlan4() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan1", JSON.stringify(newPlan));
    $$('#comment-area4').val("")
    $('#comment-area4'). val(JSON.parse(localStorage.plan4))
}
$("#save4").click (newPlan4)
function newPlan5() {
    var plan = $(this).prev().val() + " On this day: " + moment().format("dddd, MMMM, Do");
    localStorage.setitem("plan5", JSON.stringify(newPlan));
    $$('#comment-area5').val("")
    $('#comment-area5'). val(JSON.parse(localStorage.plan5))
}
$("#save5").click (newPlan5)

function deletePlans() {
    for (var i = 0; i <)
}











function showTime() {
    var currentTd =  moment().format('MMM DD, YYYY [at] hh:mm:ss a');
     actDayTimeEl.text(currentTd);
  }


// create our docuemnt ready function to make sure nothing runs before we load the page
$(document).ready(function(){
    $(".save-btn").on("click", function(){
        var notes = $(this).sibling(".comment").setInterval();
        var time = $(this).parent().attr("id");
        localStorage.setitem(time, value);
    });

    function updateTheHour() {
        var currentHour = moment().hours();

        $
    }




}

    
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

    // retrieve local storage an render items to correct rows
}

)
setInterval(showTime), 1000);