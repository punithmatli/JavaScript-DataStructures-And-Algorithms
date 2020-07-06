const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let length = array.length
  for (let i = 1; i < length; i++) {
    let key = array[i]
    let j;
    for (j = i - 1; (j >= 0) && (array[j] > key); j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = key
  }
  return array
}

insertionSort(numbers);