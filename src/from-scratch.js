const makeIdFunc = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

const makePasswordChecker = (correctPassword) => {
  let attempts = 0;

  return (guess) => {
    if (attempts >= 3) {
      return "Account locked";
    } else if (guess === correctPassword) {
      return true;
    } else {
      attempts++;
      return false;
    }
  };
};

const makeMultiplier = (multiplier) => {
  return (nums) => {
  return nums.map(nums => nums * multiplier)
}
};

const makeFilterByLength = (length) => {
  return (str) => {
    return str.filter(str => str.length <= length)
  }
};

const makeGradeTracker = () => {
  let grades = [];
  return {
    addGrade(grade) {
      if (grade >= 0 && grade <= 100) {
        grades.push(grade);
        return true;
      } else {
        return false;
      }
    },
    getAverage() {
      if (grades.length === 0) {
        return 0;
      }
      let sum = 0;
      for (let grade of grades) {
        sum += grade;
      }
      return sum / grades.length;
    },
  };
};

const makeShoppingList = () => {
  let list = [];

  return {
    getItems() {
      return [...list];
    },
    addItem(item) {
      list.push(item);
      console.log(
        `${item} successfully added! Now you have ${list.length} item(s).`
      );
      return list.length;
    },
    removeItem(item) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
          list.splice(i, 1);
          console.log(
            `${item} successfully removed. You now have ${list.length} item(s).`
          );
          return true;
        }
      }
      console.log(`${item} not found.`);
      return false;
    },
  };
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
