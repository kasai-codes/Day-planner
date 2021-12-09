//  Adds the current day with moment(), and the format in which to be diplayed on the page.
var currentTime = moment().format("MMMM Do YYYY");

var timeBlock = $(".hour");
var currentMoment = parseInt(moment().format("H"));
$("#currentDay").text(currentTime);

// Function to check each hour and add a class to then select and style with css.
// .each used to iterate through (hour) and deteremine if timeBlock should be grey, red, or green depending on the moment in time.

$.each(timeBlock, function (i, hour) {
  var hourEl = parseInt($(this).attr("id"));
  if (hourEl === currentMoment) {
    $(this).next().addClass("present");
  } else if (hourEl < currentMoment) {
    $(this).next().addClass("past");
  } else if (hourEl > currentMoment) {
    $(this).next().addClass("future");
  }
});

// If Save button clicked, set item to local storage.
// Returns the value of the parent element.
$(".saveBtn").on("click", function (event) {
  var eventItem = event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, eventItem);
});
// .ready  to have the function accesible after the page has loaded.
// making sure text is there to be saved
$(document).ready(function () {
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
    var tenAm = $("<p>" + localStorage["10am"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
    $("#elevenAm").append(elevenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
    $("#twelvePm").append(twelvePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
    var onePm = $("<p>" + localStorage["1pm"] + "</p>");
    $("#onePm").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
    var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
    $("#twoPm").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
    var threePm = $("<p>" + localStorage["3pm"] + "</p>");
    $("#threePm").append(threePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
    var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
    $("#fourPm").append(fourPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
    var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
    $("#fivePm").append(fivePm[0].innerText);
  } else {
    ("");
  }
});
