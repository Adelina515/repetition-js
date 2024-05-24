function filterArray(numbers, value) {
  // Change code below this line
  let newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  console.log("new", newArray);
  return newArray;

  // Change code above this line
}
filterArray([1, 2, 3, 4, 5], 3);
