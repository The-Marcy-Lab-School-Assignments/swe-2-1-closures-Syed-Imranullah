const makeIdFunc = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

const makePasswordChecker = (correctPassword) => {};

const makeMultiplier = (multiplier) => {};

const makeFilterByLength = (length) => {};

const makeGradeTracker = () => {};

const makeShoppingList = () => {};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
