//binary search algorithm
function binarySearch(arr, target){
    let leftIndex= 0;
    let rightIndex= arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);

        if(arr[middleIndex] === target){
            return middleIndex;
        }
        else if(arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        }
        else {
            rightIndex = middleIndex - 1;
        }
    }
     return -1;
}

console.log(binarySearch( [-5,2,4,6,10], 10)); // 4
console.log(binarySearch( [-5,2,4,6,10], 6)); // 3
console.log(binarySearch( [-5,2,4,6,10], 20)); // -1
console.log(binarySearch( [-5,2,4,6,10], -5)); // 0
console.log(binarySearch( [-5,2,4,6,10], 4)); // 2

// o(log n) time complexity