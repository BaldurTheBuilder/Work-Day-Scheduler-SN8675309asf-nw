var arrayOfIds = ["hour-9","hour-10","hour-11","hour-12","hour-1","hour-2","hour-3","hour-4","hour-5"];
var ourCycleOfTimeCards = [];

//cycle through our hours and assign variables to each hour card
for (let index = 0; index < 9; index++) {
  ourCycleOfTimeCards[index] = document.getElementById(arrayOfIds[index]);
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //when we first run the program, we want to format the time blocks.
  formatTimeColors();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});



//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var displayTime = setInterval(function(){
  var time = dayjs().format('dddd, MMMM D, YYYY, h:mm:ss A');
  $('#time-display').text(time);
  var isNewHour = dayjs().format('mmss');
  //every time we reach a new hour, we want to reformat our time colors.
  if(isNewHour == '0000') {
    formatTimeColors();
  }
},1000);

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
function formatTimeColors() {
  //figure out what hour it is in military time
  var currentTime = dayjs().format('H');
  //for loop that cycles through our hours
  for (let testedTime = 0; testedTime < 9; testedTime++) {
    //if the current hour is greater than the checked hour, we know it is in the past.
    if(currentTime > 9+testedTime) {
      ourCycleOfTimeCards[testedTime].classList.add("past");
    }
    //else if the hour is equal to our current hour, we add the "present" class
    else if(currentTime == 9+testedTime ){
      ourCycleOfTimeCards[testedTime].classList.add("present");
    }
    //else we add the "future" class.
    else {
      ourCycleOfTimeCards[testedTime].classList.add("future");
    }
  }
};

//WHEN I click into a time block
//THEN I can enter an event
  //right now the premade blocks have textareas. 

//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
  //we need to save information for the week in local storage. This is similar to the score tracker from last week's challenge.

//WHEN I refresh the page
//THEN the saved events persist
  //the page loads local storage to display what we saved.