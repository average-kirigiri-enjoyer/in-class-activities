const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// map triples all items in originalArray, the result will be [3, 9, 6, 15, 30]
const tripledArray = originalArray.map(data => data * 3);

// map returns whether or not a number is odd or even, the result will be, odd, odd, even, odd, even
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(tripledArray);
console.log(oddOrEven);