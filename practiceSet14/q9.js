// 9. Write a JavaScript function that determines whether a given year is a leap year or not.

function checkLeapYear(year) {
  if (year % 4 === 0 || year % 100 === 0) {
    console.log(year + " is a leap year");
  }
  else
  {
    console.log("not a leap year ");
    
  }
}
checkLeapYear(2024);
