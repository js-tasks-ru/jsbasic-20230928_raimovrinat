let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let items = arr.filter((item) => (item >= a && item <= b));
  
  return items;
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
