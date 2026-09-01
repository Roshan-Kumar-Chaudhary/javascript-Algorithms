//binary search algorithm
function binarySearch(arr, target){
    let leftIndex= 0;
    let rightIndex= arr.length - 1;

    while(leftIndex<= rightIndex){
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