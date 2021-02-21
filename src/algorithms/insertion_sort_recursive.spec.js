import insertionSort from "./insertion_sort_recursive";
const randomArrayBetweenXnY = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
it("Insertion sort is working as expected", () => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(randomArrayBetweenXnY(5, 100));
  }

  const arr1 = [...arr].sort((a, b) => a - b);
  const arr2 = insertionSort([...arr]);
  expect(arr1).toEqual(expect.arrayContaining(arr2));
});
it("Insertion sort is working as expected for sort array", () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(randomArrayBetweenXnY(0, 100));
  }
  const arr1 = [...arr].sort((a, b) => a - b);
  const arr2 = insertionSort([...arr]);
  expect(arr1).toEqual(expect.arrayContaining(arr2));
});
