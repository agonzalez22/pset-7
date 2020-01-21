function commonEnd(a, b) {

  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  let lastElementA = a.length - 1;
  let lastElementB = b.length - 1;

  if (a[0] === b[0] || a[lastElementA] === b[lastElementB]) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  let newA = []

  if (!values || values.length < n || !(n % 1 === 0) || n <= 0) {
    return newA;
  } else {
    if (n === 0) {
      return values;
    } else {
      for (let x = 0; x < n; x++) {
        if (values[x] !== undefined) {
          newA.push(values[x]);
        }
      }
      for (let x = n; x > 0; x--) {
        if (values[values.length - x] !== undefined) {
          newA.push(values[values.length - x]);
        }
      }
      return newA;
    }
  }
}

function difference(numbers) {
  if (!numbers || numbers.some(isNaN) || numbers.length < 1) {
    return undefined;
  } else {
    let maximum = Number(Math.max.apply(null, numbers));
    let minimum = Number(Math.min.apply(null, numbers));
    let difference = maximum - minimum

    return difference;
  }
}

function max(number) {
  if (!number || number.length % 2 === 0 || number.length < 3 || number.some(isNaN)) {
    return undefined;
  } else {
    let newA = [];
    newA.push(number[0]);

    let mid = Math.floor(number.length / 2);
    newA.push(number[mid]);

    let end = number[number.length - 1];
    newA.push(end);

    let max = Number(Math.max.apply(null, newA));

    return max;
  }
}

function middle(values) {
  if (!values || values.length % 2 === 0 || values.length < 3) {
    return [];
  } else {
    let newA = [];

    let middle = Math.floor(values.length / 2);
    newA.push(values[middle - 1], values[middle], values[middle + 1]);

    return newA;
  }
}

function increasing(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  let flag = false;
  for (let i = 0; i < numbers.length - 2; i++) {
    let index = Number.isInteger(numbers[i]);
    if (index === false) {
      return false;
    }
    let first = numbers[i];
    let second = numbers[i + 1];
    let third = numbers[i + 2];
    let indexsecond = Number.isInteger(second);
    let indexthird = Number.isInteger(third);

    if (indexsecond === false || indexthird === false) {
      return false;
    }
    if (first < second && second < third) {
      flag = true;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

function everywhere(values, x) {
  let flag;
  if (!values || values.length < 1 || !x) {
    return false;
  } else {
    for (let y = 0; y < values.length - 1; y++) {
      if (values[y].isNaN) {
        flag = false;
        return false;
      }
    }

    let first;
    let second;
    let third;

    for (let i = 0; i < values.length - 1; i++) {
      if (i === 0) {
        if (values[i] === x) {
          flag = true;
        } else if (values[i + 1] === x) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      } else if (i === (values.length - 1)) {
        if (values[i] === x) {
          flag = true;
        } else if (values[i - 1]) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      } else {
        second = values[i];
        first = values[i - 1];
        third = values[i + 1];

        if (second === x) {
          flag = true;
        } else if (first === x) {
          flag = true;
        } else if (third === x) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      }
    }

    if (flag === false) {
      return false;
    } else {
      return true;
    }
  }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  let isTru = false;
  for (let i = 0; i < numbers.length - 2; i++) {
    let a = numbers[i];
    let b = numbers[i + 1];
    let c = numbers[i + 2];
    if (Number.isInteger(a) == false || Number.isInteger(b) == false || Number.isInteger(c) == false) {
      return false;
    }
    if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
      isTru = true;
    } else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 1) {
      isTru = true;
    }

  }
  return isTru;
}

function balance(numbers) {
  let flag;
  let sum = 0;
  let halfSum;
  let balanceSum = 0;

  if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
    flag = false;
    return false;
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (Number.isInteger(numbers[i]) === false) {
        flag = false;
        return false;
      }
    }

    for (let x = 0; x < numbers.length; x++) {
      sum += numbers[x];
    }

    halfSum = sum / 2;

    if (sum % 2 === 1) {
      flag = false;
      return false;
    }

    for (let z = 0; z < numbers.length - 1; z++) {
      balanceSum += numbers[z];
      if (balanceSum === halfSum) {
        flag = true;
        return true;
      }
    }

    if (flag === true) {
      return true;
    } else {
      return false;
    }
  }
}


function clumps(values) {
  let clumps = 0;
  let flag;
  let lastIndexOfClump;

  if (!values) {
    return -1;
  } else {
    let target;
    let surroundingTarget;

    for (let x = 0; x < values.length - 1; x++) {
      let counter1 = x;
      let counter2 = x + 1;
      target = values[counter1];
      surroundingTarget = values[counter2];

      if (target === surroundingTarget) {
        while (target === surroundingTarget) {
          target = values[counter1++];
          surroundingTarget = values[counter2++];
        }

        flag = true;
        lastIndexOfClump = counter1 - 1;
        x = lastIndexOfClump;
        clumps++;
      } else {
      }
    }
    return clumps;
  }
}
/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
