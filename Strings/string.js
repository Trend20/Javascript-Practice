const name ="Michael";

const stringVal = (str) =>{
  console.log((str.charAt(2)));
  console.log(str.substring(2, 5));
}

stringVal(name);


// find the index of a word

let text = "The little fox was Yellow";
const findIndex = (word) =>{
 let myWord = word.indexOf('fox');
 console.log(myWord);
}

findIndex(text);

// decomposing a string
let myName = "Paylend";
let splittedString = myName.split('');
console.log(splittedString);

// replacing part of a string
let greeting = "Hello, how are you doing saints?";
greeting.replace("how", "tell");
console.log(greeting);

// regex
// set of characters that defines a search pattern

/*

some of the methods associated with the RegExp object in javascript include 

1. search() : Tests for matches in a string ans returns the index of the match.
2. match()  : Tests for  matches and returns all the matches.

Basic Regex
1. ^ : Indicates the start of a string or a line
2. \d : Finds any digit.
3. [abc]: Finds any character between the brackets
4. [^abc]: Finds any character that is not between the brackets.
5. [0-9]: Finds any digit between the brackets.
6. [^0-9]: Finds any digit not between the brackets.
7.(x|y): Finds either of the specified characters.

*/

// example of a search functionality
let testStr = "Javascript DataStructures";
let searchStr = testStr.search(/DataStructures/);
console.log(searchStr);

// STRING ENCODING
/*\
  Encoding is a general concept in computer science that represents characters in a
  specialized format for efficient transmission or storage
.*/

// Base64 Encoding
/*
 1. btoa() function creates a Base64-encoded ASCII string from a string. Each character
 in the string is treated as a byte (8 bits: eight 0 and 1s).

 2. .atob() function decodes a string of data that has been encoded using Base64
encoding.
*/

let myString = "Hello, this is the first and the last time that is am going to treat you.";

let decodedString = btoa(myString);

console.log(decodedString);

// OUTPUT: SGVsbG8sIHRoaXMgaXMgdGhlIGZpcnN0IGFuZCB0aGUgbGFzdCB0aW1lIHRoYXQgaXMgYW0gZ29pbmcgdG8gdHJlYXQgeW91Lg==
