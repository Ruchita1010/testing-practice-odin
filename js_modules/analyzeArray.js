const analyzeArray = (array) => {
  return {
    // getting the sum using the reduce method
    average: array.reduce((prev, curr) => prev + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export default analyzeArray;
