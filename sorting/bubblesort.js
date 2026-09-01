// Given an array of integers, sort the array in ascending order using the bubble sort algorithm
function bubbleSort(arr) {

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }

        }
    }
    while (swapped)
}

const arr = [5, 2, 9, 1, 5, 6];
bubbleSort(arr);
console.log(arr); // [1, 2, 5, 5, 6, 9]