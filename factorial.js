// given an integer n find the factorial of that integer n

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        for(let i = n - 1; i >= 1; i--){
            n *= i;
        }
        return n;
    }

}


function factorial (n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720