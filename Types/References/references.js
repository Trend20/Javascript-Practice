// References
// Use 'const' for refecences and avoid using 'var' this helps to avoid reassigning them.


var a = 30;

const a = 30;

// If you must reassign, then use 'let' for references
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}


// const and let only exist in the blocks they are defined in.
{
    let a = 1;
    const b = 1;
  }
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
  