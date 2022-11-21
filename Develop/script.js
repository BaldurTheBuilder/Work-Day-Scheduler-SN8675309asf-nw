var arrayOfIds = ["hour-9","hour-10","hour-11","hour-12","hour-1","hour-2","hour-3","hour-4","hour-5"];
var ourCycleOfTimeCards = [];

//cycle through our hours and assign variables to each hour card
for (let index = 0; index < 9; index++) {
  ourCycleOfTimeCards[index] = document.getElementById(arrayOfIds[index]);
}

// this code isn't run until the browser has finished rendering all the elements.
$(function () {
  //when we first run the program, we want to format the time blocks.
  formatTimeColors();
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
 
  //WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
  //we need to save information for the week in local storage. This is similar to the score tracker from last week's challenge.
  $("button").click(function(){
        //now that we know which section had its button pushed, we need to traverse the DOM to save the corresponding textArea to local storage.
    let buttonsParentId = $(this).parent().attr('id');
    let textAreaId = buttonsParentId + "-textarea";
    let ourHoursTextArea = $("#"+textAreaId).val();
    localStorage.setItem(buttonsParentId, ourHoursTextArea);
  })
});


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



//WHEN I refresh the page
//THEN the saved events persist
  //the page loads local storage to display what we saved.