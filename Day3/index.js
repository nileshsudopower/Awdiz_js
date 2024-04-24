// console.log("Hello");
// Difference between var let const
// 1. redeclare and reassign
//          redeclare       reassign
// var ->   possible        possible
// let ->   not possible    possible
// const->  not possible    not possible

// 2. Scope

// var - global scope
// let const - block scope

// 3. Hoisting
// var - hoisting applicable
// let const - hoisting not applicable

// 2. Scope

// console.log("Hii");

// console.log("Hii 2");

function myfunction() {
    console.log("Welcome world");
  }
  console.log(myfunction());
  
  {
    var number = 50;
  }
  console.log(number);
  
//   {
//     let number = 10;
//   }
//   console.log(number);
  
  {
    let number = 1220;
    {
      console.log(number);
    }
  }
  
  // console.log(number);
  
  let firstNumber = 11;
  {
    const secondNumber = 222;
    var thirdNumber = 333;
    console.log(firstNumber);
    {
      {
        console.log(thirdNumber);
        console.log(firstNumber);
      }
      console.log(secondNumber);
    }
  }
  console.log(thirdNumber);
  
  mynumber = 101;
  console.log(mynumber);
  
  var mynumber;
  
  
  mynumber = 7;
  console.log(mynumber);
  
//   let mynumber;