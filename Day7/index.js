console.log("Addition of 2 numbers");

function Addition() {
    var number1 = 100;
    var number2 = 60;
    return number1 + number2;
  }
  const answer = Addition();
  console.log(answer);
  
  console.log("Addition of 1 number twice");
  function cart() {
    var value = 3000;
    return value + value;
  }
  const price = cart();
  console.log(price);

  console.log("Operations");
  function Addition(firstvalue, secondValue) {
    return firstvalue + secondValue;
  }
  function Subtraction(firstvalue, secondValue) {
    return firstvalue - secondValue;
  }
  function Multiplication(firstvalue, secondValue) {
    return firstvalue * secondValue;
  }
  function Division(firstvalue, secondValue) {
    return firstvalue / secondValue;
  }
  
  console.log("Addition ",Addition(30, 70));
  console.log("Subtraction ",Subtraction(20, 60));
  console.log("Multiplication ",Multiplication(50, 4));
  console.log("Division ",Division(5, 50));

  console.log("Find even or odd");
  function EvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log("Even", number);
    } else {
      console.log("Odd", number);
    }
  }
  EvenOrOdd(18);

console.log("Array, length, index");
var students = ["Nilesh", "raj", "Vanita"];
console.log(students, "students");
console.log(students.length); 
console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);


// Q. Print numbers from 1 to 100, by using for loop.

console.log("Printing numbers from 1 to 10");
for (var number = 1; number <= 5; number++) {
    console.log(number);
  }


// Q Print number from 10 to 60 with gap of 4;

console.log("Printing number from 10 to 60 with gap of 4");
for (var i = 10; i <= 60; i += 4) {
    console.log(i);
  }


// Q . Print number from 33 to 76 with gap of 3 but number also must be even
console.log("Printing number from 33 to 76 with gap of 3 but number also must be even");
for (var i = 33; i <= 76; i += 3) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }


// Whats the addition of number from 23 to 89 with gap of 2 and number must be odd.
console.log("Printing addition of number from 23 to 49 with gap of 2 and number must be odd");
var finalCount = 0;
for (var i = 23; i <= 49; i += 2) {
  if (i % 2 === 1) {
    console.log(i);
    finalCount += i;
  }
}
console.log("Addition",finalCount);


// Whats the multiplication of number from 1 to 5.
console.log("Print multiplication of number from 1 to 5");
var finalCount;
for (var i = 1; i <= 5; i++) {
  if (finalCount == undefined) {
    finalCount = i;
  } else {
    finalCount = finalCount * i;
  }
}
console.log(finalCount);

console.log("Addition with ++, +=");
var number = 10;
number = number + 1;
number += 3;
number++;
number++;
number++;
console.log(number);

console.log("Doing Subtraction with --, -=");
var number = 10;
number = number - 1;
number -= 10;
number--;
console.log(number);
  