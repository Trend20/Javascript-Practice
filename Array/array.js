let numbers = [1, 45, 8, 9, 4, 5];

// find the sum of all array elements
let sumOfArray = 0;

// loop through the array elements

for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
   sumOfArray += numbers[i];
}


// concat
function showConcat(){
  let treeNames = ['moon', 'base'];
let nums = [2, 3, 5, 7];

combinedDetails = treeNames.concat(nums);
console.log(combinedDetails);
}

showConcat();

// ARRAY OPERATIONS

function performArrayOperations(){
  // creating array
let studentMarks = [20, 30 ,50, 60, 70];
// find the sum of the array

let sum =0;
for(let i =0; i< studentMarks.length; i++){
  sum += studentMarks[i];
}
console.log(sum);


// create array using the constructor
let marks = new Array(20);
marks.push(30, 40, 50, 80, 90);
console.log(marks);

// creating arrays from string
let greeting = 'Hello! How are you doing?';
const greetingArray = greeting.split(' ');
console.log(greetingArray);

// loop through the array

for(let i =0; i<greetingArray.length; i++){
  console.log(greetingArray[i]);
}

}

performArrayOperations();