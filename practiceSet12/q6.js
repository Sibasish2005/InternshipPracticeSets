// 6. If-else:
// Write a function to determine the grade of a student based on their score
function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "Grade A";
  } else if (score >= 80 && score < 90) {
    return "Grade B";
  } else if (score >= 70 && score < 80) {
    return "Grade C";
  } else if (score >= 60 && score < 70) {
    return "Grade D";
  } else if (score >= 0 && score < 60) {
    return "Grade F";
  } else {
    return "Invalid score";
  }
}

console.log(getGrade(61));