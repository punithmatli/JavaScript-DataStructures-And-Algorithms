const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let i=0, j=0;
  let mergedArray = [];
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    }
    else {
      mergedArray.push(right[j]);
      j++;
    }
  }
  return mergedArray.concat(right.slice(j)).concat(left.slice(i))
}


const answer = mergeSort(numbers);
console.log(answer);