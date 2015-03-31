function swap(array, i1, i2) {
    var temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

function quicksort(array, fromIndex, toIndex) {
    var pivotIndex,
        pivotValue,
        firstBiggerIndex,
        storeIndex,
        i;
        
    fromIndex = fromIndex === undefined ? 0 : fromIndex;
    toIndex = toIndex === undefined ? array.length - 1 : toIndex;

    if (fromIndex >= array.length || toIndex < 0 || fromIndex >= toIndex) {
        return array;
    }
    
    pivotIndex = Math.floor((fromIndex + toIndex) / 2);
    pivotValue = array[pivotIndex];
    
    swap(array, pivotIndex, fromIndex);
    firstBiggerIndex = fromIndex + 1;
    
    for (i = fromIndex + 1; i <= toIndex; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, firstBiggerIndex);
            firstBiggerIndex++;
        }
    }
    
    storeIndex = firstBiggerIndex - 1;
    swap(array, storeIndex, fromIndex);
    
    quicksort(array, fromIndex, storeIndex - 1);
    quicksort(array, storeIndex + 1, toIndex);
    
    return array;
}

var a = [16, 3, 15, 3, 7, 8, 8, 8, 14, 12, 10, 7, 7, 13, 11, 6, 1, 2, 8, 7, 3, 9, 4, 0, 5, 1];
console.log(quicksort(a));
