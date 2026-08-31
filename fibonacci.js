// given a number 'n' find the first n elemments of the fibonacci  sequence

function fibonacci(n){
 let first = 0, second = 1, next, result = [];
 for(let i = 0; i < n; i++){
   if(i <= 1){
     next = i;
   } else {
     next = first + second;
     first = second;
     second = next;
   }
   result.push(next);
 } 
 return result;
}

console.log(fibonacci(10));


// // or 
// function fibinacci(n){
//     let fib = [0, 1];
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
// }