const placeAtRight = (arr, i) => {
  // print(arr, "par")
  if (i > 0 && arr[i] < arr[i - 1]) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
    return placeAtRight(arr, i - 1);
  }
  return arr;
};

const sortAnArray = (arr, i) => {
  if (i >= arr.length) {
    return arr;
  } else if (arr[i - 1] <= arr[i]) {
    return sortAnArray(arr, i + 1);
  }
  return sortAnArray(placeAtRight(arr, i), i + 1);
};
export default function insertionSort(arr) {
  return sortAnArray(arr, 1);
}
