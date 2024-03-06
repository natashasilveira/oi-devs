
// function fibonacci (num) { 
//   let fib1 = 0;
//   let fib2 = 1;
//   let termo = 0;

//   if (num === 2) {
//     termo = 1;
//   }

//   for (let i = 3; i <= num; i++) {
//     termo = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = termo;
//   }

//   return termo;
// }


function fibonacci (num) { 
  let termo = 0;

  if (num === 2) {
    termo = 1;
  } else if (num > 2) {
    termo = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return termo;
}


// console.log(fibonacci(11));


function somatorio (num) {
  if (num === 0) return 0;
  else {
    return num + somatorio(num - 1);
  }
}
  
 
console.log(somatorio(3000));
