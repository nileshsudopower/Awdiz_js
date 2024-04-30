// Q. Print reversae number from given array, use for loop .

var array = [5, 3, 30, 45, 10, 16, 99];
console.log(array[4]);

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// Q .  find addition of numbers from array who are odd
console.log("Printing addition of numbers from array who are odd")
var array1 = [2, 33, 18, 28, 99, 6, 71, 3, 12];

var count = 0; 
for (var i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 1) {
    count += array1[i];
  }
}
console.log("Count", count);

// Q. Print "Hello world" 8 times.
console.log("--------Print `hello world` 8 times--------")
for (var i = 1; i <= 8; i++) {
    console.log("Hello World");
}

// Q. Given an array find name of student whose lenght is more than 5.
console.log("Print name of student whose lenght is more than 5")
var students = ["Nilesh", "Rohan", "Ram", "Vanita","Riya"];

for (var i = 0; i < students.length; i++) {
  if (students[i].length > 5) {
    console.log(students[i]);
  }
}
