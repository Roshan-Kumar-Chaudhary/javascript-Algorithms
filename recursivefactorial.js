// given n integer find the factorial of that integer n using recursion
function recursiveFactorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * recursiveFactorial(n - 1);
    }
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(3));