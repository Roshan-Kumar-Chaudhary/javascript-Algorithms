//given an array of n elements and a target value, find the index of the target value in the array using linear search algorithm

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const target2 = 11;
console.log(linearSearch(arr, target)); // 4
console.log(linearSearch(arr, target2)); // -1