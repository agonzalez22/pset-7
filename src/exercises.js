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
  //sometimes i wonder where my life went wrong then i remember it was always like that
  //every day i wonder why was i born because i am such a waste of space please end me
  //my dog slipped down the stairs today it was kinda sad
  //i sold my soul to the devil for free spotify 
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
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
