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
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
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
