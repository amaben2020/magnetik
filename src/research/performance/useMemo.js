// https://www.codecademy.com/learn/learn-advanced-react/modules/advanced-react-optimization/cheatsheet
let x;
let y;
let z;
const calculateDistance = (x, y, z) => {
  return x * y * z;
};

const memoizedResultThanRunsOnlyIfArgsChange = () => {
  calculateDistance(x, y, z), [x, y, z];
};
