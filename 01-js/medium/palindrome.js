/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // if (str === null || str.trim().length == 0)
  //   return true;
  // else {
  //   let strArr = str.toLowerCase().split("");
  //   for (let start = 0, end = (strArr.length - 1); start < (strArr.length), end >= (strArr.length / 2); start++, end--) {
  //     if (strArr[start] != strArr[end])
  //       return false;
  //     else
  //       return true;
  //   }
  // }

  clearedstring = str.replace(/[^[a-zA-Z0-9]/g, '').toLowerCase();

  return clearedstring == clearedstring.split('').reverse().join('');
}

let str = null;
console.log(isPalindrome(''));

module.exports = isPalindrome;
