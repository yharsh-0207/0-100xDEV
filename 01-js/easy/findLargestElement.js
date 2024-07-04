/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = Number.NEGATIVE_INFINITY;
    numbers.forEach(element => {
        if(element > max)
            max = element
    });
    if(max == Number.NEGATIVE_INFINITY)
        return undefined;
    else
        return max;
}

console.log(findLargestElement([-5, -10, -2, -8]));
module.exports = findLargestElement;