/**
3741822

3
7  4
18 22

8341722
341722

3
4  1
72 2
*/

function heapsort(array) {
  if (!array || array.length <= 1) {
    return array;
  }
  for (var len = array.length; len > 1; len--) {
    toHeap(array, len);
    swap(array, 0, len - 1);
  }
  return array;
}

function toHeap(array, len) {
  for (var i = len - 1; i > 0; i--) {
    var parentIndex = Math.floor((i - 1) / 2);
    var parentValue = array[parentIndex];
    if (parentValue < array[i]) {
      swap(array, parentIndex, i);
    }
  }
}

function swap(array, pos1, pos2) {
  var tmp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = tmp;
}

console.log('1: ' + heapsort());
console.log('2: ' + heapsort([]));
console.log('3: ' + heapsort([5]));
console.log('4: ' + heapsort([3,7,4,1,8,2,2]));
console.log('5: ' + heapsort([3,3,3,9,7,1,1]));
console.log('6: ' + heapsort([5,4,3,2,1]));
