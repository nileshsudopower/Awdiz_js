var bestphone = "Moto edge 50 pro";

switch (bestphone) {
    case "OP nord CE4":
        console.log("Best phone under 30k is OP nord CE4.");
        break;
    case "Nothing 2a":
        console.log("Best phone under 30k is Nothing 2a.");
        break;
    case "Moto edge 50 pro":
        console.log("Best phone under 30k is Moto edge 50 pro.");
        break;
    case "Samsung S21fe":
        console.log("Best phone under 30k is Samsung S21fe.");
        break;
    default:
        console.log("Best phone under 30k does not exist.");
}

var first = 25;
var second = 70;
var third = 99;

console.log(first > second);
console.log(first < third);
console.log(second > third);

console.log(first > second && first < second && third > second);
console.log(300 > 50 && 50 > 30 && 800 > 250);
console.log(first > second || first < second || third > second);


function DL(){
    const age = document.getElementById("age").value;
    console.log(age,"age")
    if(age > 18){
        alert(`Your age is valid for Driving License.`)
    }
    else if (age == 18) {
        alert(`You are only allowed for Learning license.`);
    } else {
        alert(`You are underage for a valid for Driving License.`);
    }
}