// Get the total count of numbers listed in the dictionary which are multiples of [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Input example:
//   [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]

// Output example:
//   { 1: 11,2: 8, 3: 4, 4: 4, 5: 3,6: 2,7: 0,8: 1,9: 1}

const countNumber = (input, multiples) => {
  const result = {};

  for (const multiple of multiples) {
    const count = input.filter(num => num % multiple === 0).length;
    result[multiple] = count;
  }
  console.log(result);
};


countNumber([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9]);