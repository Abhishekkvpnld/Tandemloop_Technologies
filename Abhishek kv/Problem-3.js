// With a single integer as the input, generate the following until a = x
// (series of numbers as shown in the examples below)

// Output: (examples)
//   1) If the input a = 1, then output: 1
//   2) If the input a = 2, then output: 1
//   3) If the input a = 3, then output: 1, 3, 5
//   4) If the input a = 4, then output: 1, 3, 5
//   5) If the input a = 5, then output: 1, 3, 5, 7, 9
//   6) If the input a = 6, then output: 1, 3, 5, 7, 9
//   .
//   .
//   7) If the input a = x, then output: 1, 3, 5, 7, .......

function generateSeries(a) {
  const series = [];
  let val = a % 2 === 0 ? a - 1 : a;

  for (let i = 0; i < val; i++) {
    const number = 2 * i + 1;
    series.push(number);
  }

  console.log(series.join(", "));
}

generateSeries(1);
generateSeries(2);
generateSeries(3);
generateSeries(4);
generateSeries(5);
generateSeries(6);
