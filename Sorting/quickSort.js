const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  if (left < right) {
    let pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
}

function partition(array, left, right) {
  let i = left - 1;
  let pivot = array[right];
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  i++;
  swap(array, i, right);
  return i;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);