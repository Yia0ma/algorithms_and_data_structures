exports.bubbleSort = (arr) => {
    const swap = (idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    for (let i = arr.length - 1; i >= 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
};