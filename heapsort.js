function log2(x) {
    return Math.log(x) / Math.log(2);
}
/*
function level(index) {
    return Math.floor(log2(index + 1)) + 1;
}

function depthToString(index) {
    var str = '',
        lev = level(index),
        i;
    
    if (lev > 1) {
        str += '|-';
    }
    if (lev > 2) {
        for (i = 0; i < lev - 1; i++) {
            str = '| ' + str;
        }
    }
    return str;
}
*/
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

var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
console.log(toString(a));

