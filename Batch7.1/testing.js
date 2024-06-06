var number = 23;
for (i = 2; i <= number / 2; i++) {
  if (number % i == 1) {
    var x = true;
  }
}
if (x == true) {
  console.log("The number is a Prime");
} else {
  console.log("The number is Not a Prime");
}
var students = ["Nilesh", "Rohan", "Ram", "Vanita", "Riya"];
for (var i = 0; i < students.length; i++) {
  if (students[i].length > 5) {
    // console.log(students[i]);
    var temp = students[i];
  }
}
console.log(temp);
