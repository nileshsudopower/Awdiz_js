var number = 17;

console.log(number % 2 === 0)
if (number % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }

function Nilesh() {
    const number = document.getElementById("number").value;
  console.log(number, "number");
  if (!number) {
    alert("Please type the number.");
  } else if (number % 2 === 0) {
    alert(`Number ${number} is Even.`);
  } else {
    alert(`Number ${number} is Odd.`);
  }
}
