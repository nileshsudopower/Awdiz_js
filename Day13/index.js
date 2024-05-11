const newarray = [1, 2, 3, 4];

const newoutput = newarray.map((awdiz) => awdiz * 2);

console.log(newoutput);






const array1 = [1, 2, 3, 4, 5];

array1.forEach((ele) => console.log(ele));






const array2 = [1, 2, 3, 4, 5];
const sum = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);





const array3 = [1, 2, 3];
const array4 = [4, 5, 6];

const combinedArray = array4.concat(3);
console.log(combinedArray);



const numbers = [1, 2, 3, 4, 5, 6];

const output = numbers.find((number) => number > 3);

console.log(output);




const number1 = [5, 6, 7, 8, 9];
const index = number1.findIndex((value) => value > 6);
console.log(index);





const data = [1, 2, 3, 4, "cat", "dog"];

const isExist = data.includes("cat");
console.log(isExist);

const data2 = [1, 2, 3, 4, "cat", "dog"];

const isExist1 = data2.includes("hat");
console.log(isExist1);