// Tell me the first recurring character
//Which number in given array get repeated first

//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should rturn 1

//Given an array = [2,3,4,5]
//It should return undefinded

//Write a function that can enter given array

function firstRecurring(numbers) {
  const result = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (result[number]) {
      return number;
    } else {
      result[number] = 1;
    }
  }

  return undefined;
}

console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurring([2, 3, 4, 5]));
