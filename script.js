$(init);
var timeBlocksCount = 12;

function init() {
  // displaying current date in the header
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // color our time blocks and start interval for changing color based on the time.
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000);
  
  GetEvents();
}

function colorTimeBlocks() {
    // for each time block
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id"));
  
      var currentHour = parseInt(moment().format("H"));
     
      // remove any class we may have added before
      $(this).removeClass("past present future");
      // color block based on past, present, future class
      if (blockHour < currentHour) {

        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  }
  


  $(document).on('click','.saveButton',function(){
    var SaveBtnValue = $(this).val();
   
    var desctiption = document.getElementById(SaveBtnValue).value;
    localStorage.setItem(SaveBtnValue, desctiption);

});

function GetEvents() {

  for (var i = 0; i <= timeBlocksCount; i++) {
    
      var GetStoreNotes = localStorage.getItem(i+9);
     
      var TextAreas = document.getElementById(i+9);
      console.log(GetStoreNotes);
      TextAreas.value = GetStoreNotes;
  }
}
