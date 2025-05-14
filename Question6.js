function arrangeFruit(friits) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < 4; i++) {
    arr.push(friits.pop());
  }
  console.log(arr);

  // merge(arr, friits);
  arr2 = arr2.merge(arr, friits);
//   console.log(arr2);
//   console.log(friits);
  return arr2;
}
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Peach",
  "Kiwi",
];
console.log(arrangeFruit(fruits));
