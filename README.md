## </> Javascript Rest Operator

## </> Description:
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.<br>

function sum(...theArgs) { <br>
  let total = 0; <br>
  for (const arg of theArgs) { <br>
    total += arg; <br>
  } <br>
  return total; <br>
} <br>

console.log(sum(1, 2, 3)); <br>
// expected output: 6 <br>

console.log(sum(1, 2, 3, 4)); <br>
// expected output: 10 <br>
