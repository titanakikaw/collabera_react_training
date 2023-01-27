const add = (...abc) => {
  return abc.reduce((p, c) => p + c, 0);
};

console.log(add(1, 2, 3, 4));
