/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let numDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");

function dayTracker(day) {
  if (!document.getElementById(day).classList.contains("clicked")) {
    document.getElementById(day).classList.add("clicked");
    numDays++;
  } else if (document.getElementById(day).classList.contains("clicked")) {
    document.getElementById(day).classList.remove("clicked");
    numDays--;
  }
  calculate();
}

mon.addEventListener("click", function () {
  dayTracker("monday");
}); //[1] Still don't understand why it has to be this way, but it does
tue.addEventListener("click", function () {
  dayTracker("tuesday");
});
wed.addEventListener("click", function () {
  dayTracker("wednesday");
});
thu.addEventListener("click", function () {
  dayTracker("thursday");
});
fri.addEventListener("click", function () {
  dayTracker("friday");
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let dayList = [mon, tue, wed, thu, fri];
let clearButton = document.getElementById("clear-button");

function resetDay(day) {
  if (day.classList.contains("clicked")) {
    day.classList.remove("clicked");
  }
}

function clearDays() {
  dayList.forEach(resetDay);
  numDays = 0;
  calculate();
}

clearButton.addEventListener("click", clearDays);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");

function dayToggle(to, from) {
  if (!document.getElementById(to).classList.contains("clicked")) {
    document.getElementById(to).classList.add("clicked");
    document.getElementById(from).classList.remove("clicked");

  }
  if (to === "half") {
    costPerDay = 20;
  } else if (to === "full") {
    costPerDay = 35;
  }
  calculate();
}

halfDayButton.addEventListener("click", function () {
  dayToggle("half", "full");
});
fullDayButton.addEventListener("click", function () {
  dayToggle("full", "half");
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/*                     was easier to do it all in one section (see above)                         */

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  document.getElementById("calculated-cost").innerHTML = numDays * costPerDay;
}

/*
[1] clav. "addEventListener calls the function without me even asking it to." stackoverflow. Accessed Dec. 6, 2023. [Online]. Available: https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to
*/
