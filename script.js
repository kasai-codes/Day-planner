// currentHour

for ( var i = 9; i < 17; i++ ) {

}
// create a new block of html for each hour of the data
// saving the current hour to  a data attribute so it can be accessed from an event listener

// i = current hour of the loop, 9-17 

//  local storage key = "hour-9"
var savedValueForHour = localStorage.getItem(" hour- " + i);


$('.container').on('click', 'button', function() {
    
// $( event.target.dataset).data()

});