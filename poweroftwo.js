// given a postive integer n , find out that given number n is power of 2 or not??

// pseudo code
// given that n is a positive integer
// lets say n = 8
// 8 / 2  = 4 remainder 0
// 4 / 2 = 2 remainder 0
// 2 / 2 = 1 remainder 0
// if remainder is not 0 in any step then n is not power of 2
// if remainder is 0 and the number comes to 1 then it is power of 2

function isPowerOfTwo(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false