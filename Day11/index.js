var InsituteDetails = {
    name: "Awdiz",
    studentname: "Nilesh Devadiga",
    age: 25,
    location: "Vashi",
    isOpen: true,
    courses: [
      "Full stack Development",
      "CCNA",
      "WINDOWS",
      "LINUX",
      ["Nilesh", "Rupali", "Chetan"],
    ],
    batchesDetails: { totalBatches: 10, totalStudents: 250, totalStudentsperbatch: 25 },
  };
// console.log("batchesDetails",InsituteDetails.batchesDetails);
// console.log("totalStudentsperbatch",InsituteDetails.batchesDetails.totalStudentsperbatch)
// console.log("courses",InsituteDetails.courses);
// console.log("studentname",InsituteDetails.studentname);
// console.log("location",InsituteDetails.location);
// console.log("totalStudents",InsituteDetails.batchesDetails.totalStudents)

const subArray = InsituteDetails.courses[4];
console.log(subArray[2]);

for(var i = 0; i < subArray.length; i++){
    if(subArray[i] === "Chetan"){
        console.log(i)
    }
}

// console.log(InsituteDetails["studentname"])
// console.log(InsituteDetails["batchesDetails"])
// console.log(InsituteDetails["courses"].length)

// const keys = Object.keys(InsituteDetails);
// // console.log(keys);
// const values = Object.values(InsituteDetails);
// console.log(values);


// for (let key in InsituteDetails) {
//     console.log(key, InsituteDetails[key]);
//   }