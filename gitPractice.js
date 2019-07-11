function multiplyArrayNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
}

let randoArray = [5, 10, 15, 20];
multiplyArrayNumbers(randoArray);
