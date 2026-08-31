// given a number 'n' find the first n elemments of the fibonacci  sequence

// function fibonacci(n){
//  let first = 0, second = 1, next, result = [];
//  for(let i = 0; i < n; i++){
//    if(i <= 1){
//      next = i;
//    } else {
//      next = first + second;
//      first = second;
//      second = next;
//    }
//    result.push(next);
//  } 
//  return result;
// }

// console.log(fibonacci(10));


// // or 
// function fibinacci(n){
//     let fib = [0, 1];
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
// }

// or even better soltution with less bug
function fibonacci(n){
    let fb = [];
    for (let i =0; i <n; i++){
        if(i<=1){
            fb.push(i);
        }
        else{
            fb[i]= fb[i-1] + fb[i-2];
        }

    }
    return fb;
}

console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(4)); // [0, 1, 1, 2]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(9)); // [0, 1, 1, 2, 3, 5, 8, 13,21]


// Big 0 Notation cheat code
// calculation not dependent on input size == o(1) or constant
// 1 loop == o(n) or linear
// 2 loops == o(n^2) or quadratic
// input sice reduced by half == o(log n) or logarithmic