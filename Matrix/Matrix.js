// finding the difference between the sum of diagonals in a matrix

function findDiagSum(arr){
  let diag1 = 0;
  let diag2 = 0;
  let arrLength = arr.length;
  arr.forEach((element, index, arr) => {
    diag1 += element[index];
    diag2 += element[arrLength - 1 - index];
  });
  console.log(Math.abs(diag1 - diag2));
  return Math.abs(diag1 - diag2);
}

findDiagSum([2, 3, 5, 7, 8, 9]);


// plus minus challenge on HackerRank

function plusMinus(arr){
  let positiveRatio = 0;
  let negativeRatio = 0;
  let zeroRatio = 0;
  let arrLength = arr.length;

  // loop through the arr elements
  arr.forEach(ele =>{
    if(ele > 0){
      positiveRatio++;
    }else if(ele < 0){
      negativeRatio++;
    }else{
      zeroRatio++;
    }
  });
  console.log((positiveRatio / arrLength).toFixed(6));
  console.log((negativeRatio / arrLength).toFixed(6));
  console.log((zeroRatio / arrLength).toFixed(6));
}

// check if a string is a palindrome

// FIRST SOLUTION
function checkPalindrome(str){
  // string length
  let len = str.length;

  for(let i = 0; i < len / 2; i++){
    if(str[i] !== str[len - 1 - i]){
      return false;
    }else{
      return true;
    }
  }
}

// SECOND SOLUTION
function checkPalindrome(str){
  // change string to array
  let strArray = str.split('');
  // reverse the array
  let reversedArray = strArray.reverse();

  // join the reversed array
  let joinedArray = strArray.join('');

  // compare the string
  if(str == joinedArray){
    console.log('It is a palindrome');
    // return true;
  }else{
    console.log('It is not a palindrome');
    // return false;
  }
}