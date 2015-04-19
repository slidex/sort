function mergesort(array) {
    var index,
        left,
        right,
        leftIndex,
        rightIndex,
        leftValue,
        rightValue,
        merged;
        
    if (array.length === undefined || array.length <= 1) {
        return array;
    }
    
    index = Math.floor(array.length / 2);
    left = mergesort(array.slice(0, index));
    right = mergesort(array.slice(index));
    merged = [];
    
    for (leftIndex = 0, rightIndex = 0; ;) {
        leftValue = leftIndex < left.length ? left[leftIndex] : undefined;
        rightValue = rightIndex < right.length ? right[rightIndex] : undefined;
        if (leftValue === undefined && rightValue === undefined) {
            break;
        } else if (leftValue === undefined) {
            merged.push(rightValue);
            rightIndex++;
        } else if (rightValue === undefined) {
            merged.push(leftValue);
            leftIndex++;
        } else {
            if (leftValue < rightValue) {
                merged.push(leftValue);
                leftIndex++;
            } else {
                merged.push(rightValue);
                rightIndex++;
            }
        }
    }

    return merged;
}

var a = [16, 15, 14, 12, 10, 13, 11, 6, 1, 2, 8, 7, 3, 9, 4, 0, 5, 1];
console.log(mergesort(a));
