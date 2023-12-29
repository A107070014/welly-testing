function filterNumbersGreaterThanFive(numbers: number[]) {
  // 實作你的解答
  const filterData = numbers.filter((number) => number > 5);
  return filterData;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
