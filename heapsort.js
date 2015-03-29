function log2(x) {
    return Math.log(x) / Math.log(2);
}

function toString(array, index, depth) {
    var str = '',
        leftIndex,
        rightIndex,
        i;
    
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

function add(array, value) {
	var index,
	    parentIndex,
	    tmp;
	
	if (!array) {
		return;
	}
	
	array.push(value);

	for (index = array.length - 1; ; ) {
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

var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
//console.log(toString(a));

var heap = [];
add(heap, 0);
add(heap, 1);
add(heap, 2);
add(heap, 3);
add(heap, 4);
add(heap, 5);
console.log(toString(heap));
