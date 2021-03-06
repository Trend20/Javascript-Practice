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


// ARRAY OPERATIONS AND THEIR BIG-Os
// insertion: uses the .push to add an item to the end of an array[O(1)]
// deletion: uses the .pop to remove an item from the end of an array[O(1)]
// access: uses the index of an item to get an array item[O(1)]
//iteration: this is the process of accessing each individual item of a data structure. All the operations has a time complexity of O(n);

let iterativeArr = [4, 3, 5, 7, 8, 9, 0];
function getArrItems(arr){
  for(let i =0; i<arr.length; i++){
    // console.log(arr[i]);
  }
}
getArrItems(iterativeArr);

// USING WHILE LOOP

let iterativeArray = [5, 8, 5, 6, 8, 9, 0];
function getArrItems(arr){
  let i =0;
  while(i<arr.length){
    console.log(arr[i])
    i++
  }
}
getArrItems(iterativeArray);


// FOR-IN LOOPS
let forInArr = ['Net', 'Mitchel','Website', 'Mobile', 'Blockchain'];
const findItems = (arr) =>{
  for(let item in arr){
    console.log(arr[item]);
  }
}
findItems(forInArr);

// FOR OF LOOP
let forOfArr = ['Net', 'Mitchel','Website', 'Mobile', 'Blockchain'];
for(let item of forOfArr){
  console.log(item)
}

// FOR-EACH
let forEachArr = ['Net', 'Mitchel','Website', 'Mobile', 'Blockchain'];
 forEachArr.forEach((item, index) =>{
   console.log(item);
 });

//  HELPER FUNCTIONS

// slice

let testArray = [30, 50, 7, 9, 20, 10, 45, 60];

let slicedArray = testArray.slice(3, 6);
console.log(slicedArray);

/*
  the .slice() does not include the element of the last index when used
 */

  /* 
   Given an array of numbers, return an array of numbers that add upto 9
   */
  let addArray = [1,2,3,4,5];

 const findNumPairs = (num, sum) =>{

  for(let i = 0; i<num.length; i++){
    for(let j = 1; j<num.length; j++){
      if(num[i] + num[j] == sum){
        return [i, j];
      }
    }
  }
  return -1;
 }
 findNumPairs(addArray, 7);
//  [3, 4] O(n^2);



// optimized solution
const findPairs = (arr, weight) =>{
  let hashTable = {};
  for(let i =0; i < arr.length; i++){
    let currentElement = arr[i];

    arrDifference = weight - currentElement;
    if(hashTable[currentElement] != undefined){
       return [i, hashTable[arrDifference]]
    }else{
      hashTable[arrDifference] = i
    }

  }
  return -1;
}






