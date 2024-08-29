function secondMax(arr) {
    if (arr.length === 0) { //Check if the array is empty.
        return "Error!"
    }

    let maxArr = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxArr) {
            secondMax = maxArr;
            maxArr = arr[i];
        } 
        else if (arr[i] > secondMax && arr[i] !== maxArr) {
            secondMax = arr[i];
        }
    }
    
    //If secondMax is -Infinity, means there was no secondMax
    //then return the max value instead. 
    //Otherwise, return secondMax.
    return secondMax === -Infinity ? maxArr : secondMax;
}

//Test:
console.log(secondMax([2, 3, 4, 5]));    //Output:4
console.log(secondMax([9, 2, 21, 21]));  //Output:9
console.log(secondMax([4, 4, 4, 4]));    //Output:4
console.log(secondMax([4123]));          //Output:4123
console.log(secondMax([]));              //Error!