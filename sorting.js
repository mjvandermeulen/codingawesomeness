const log_sort = (numberList) => {
  console.log(`\nArray: ${numberList}`);
  const sortFun = difference();
  numberList.sort(sortFun);
};

const difference = () => {
  let counter = 0;

  const diffAndPrintCount = (a, b) => {
    counter++;
    console.log(counter);
    return a - b;
  };

  return diffAndPrintCount;
};

log_sort([1, 3, 2]);
log_sort([1, 4, 2, 3]);
log_sort([1, 6, 2, 5, 3, 4]);
log_sort([1, 2, 3, 4, 5, 6]);
log_sort([6, 5, 4, 3, 2, 1]);
