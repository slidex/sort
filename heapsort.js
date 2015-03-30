function log2(x) {
    return Math.log(x) / Math.log(2);
}

function toString(array, index, depth) {
    var str = '',
        leftIndex,
        rightIndex,
        i;
    
    if (array.length === undefined) {
        return str;
    }
    
    index = index || 0;
    depth = depth || 0;

    if (index < array.length) {
        for (i = 0; i < depth; i++) {
            str += '| ';
        } 
        str += array[index] + '\n';
    }

    depth++;
    
    leftIndex = index * 2 + 1;
    if (leftIndex < array.length) {
        str += toString(array, leftIndex, depth);
    }

    rightIndex = index * 2 + 2;
    if (rightIndex < array.length) {
        str += toString(array, rightIndex, depth);
    }

    return str;
}

function add(array, value, length) {
    var index,
        parentIndex,
        maxIndex,
        tmp;
    
    if (array.length === undefined) {
        return;
    }
    
    length = length !== undefined ? length : array.length;
    array[length] = value;
    maxIndex = length;
    
    for (index = maxIndex; ;) {
        if (index === 0) {
            break;
        }
        parentIndex = (index - (index % 2 == 1 ? 1 : 2)) / 2;
        if (array[index] > array[parentIndex]) {
            tmp = array[index];
            array[index] = array[parentIndex];
            array[parentIndex] = tmp;
        }
        index = parentIndex;
    }
}

function pop(array, length) {
    var result,
        index,
        leftIndex,
        rightIndex,
        biggerChildIndex,
        tmp;
    
    if (array.length === undefined) {
        return;
    }
    
    result = array[0];
    maxIndex = (length !== undefined ? length : array.length) - 1;
    array[0] = array[maxIndex];

    for (index = 0; ;) {
        leftIndex = index * 2 + 1;
        rightIndex = index * 2 + 2;
        
        if (leftIndex >= maxIndex && rightIndex >= maxIndex) {
            break;
        } else if (rightIndex >= maxIndex) {
            biggerChildIndex = leftIndex;
        } else {
            biggerChildIndex = array[leftIndex] > array[rightIndex] ? leftIndex : rightIndex;
        }
        
        if (array[biggerChildIndex] < array[index]) {
            break;
        }
        
        tmp = array[index];
        array[index] = array[biggerChildIndex];
        array[biggerChildIndex] = tmp;
        
        index = biggerChildIndex;
    }
    
    return result;
}

function heapsort(array) {
    var max,
        tmp,
        i;
    
    if (array.length === undefined) {
        return;
    }
    
    for (i = 0; i < array.length; i++) {
        add(array, array[i], i);
    }
    
    for (i = 0; i < array.length; i++) {
        max = pop(array, array.length - i);
        array[array.length - i - 1] = max;
    }
}

function testToString() {
    var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    console.log(toString(a));
}

function testPop() {
    var heap = [];
    for (var i = 0; i < 6; i++) {
        add(heap, i, i);
    }
    pop(heap);
    pop(heap);
    console.log(toString(heap));
}

function testPop2() {
    var a = [ 16, 15, 14, 12, 10, 13, 11, 6, 1, 2, 8, 7, 3, 9, 4, 0, 5, 1 ];
    console.log(toString(a))
    pop(a, 17)
    console.log(toString(a))
}

function testHeapsort() {
    var a = [9, 2, 7, 1, 8, 17, 13, 0, 6, 15, 10, 14, 3, 11, 4, 12, 5, 16];
    heapsort(a);
    console.log(a);
}

//testPop();
//testPop2();
testHeapsort();
