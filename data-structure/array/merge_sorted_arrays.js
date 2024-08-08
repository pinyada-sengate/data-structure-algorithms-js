function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let index1 = 0;
  let index2 = 0;
  let result = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] <= arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }

  let leftInArr;
  if (index1 < arr1.length) {
    leftInArr = arr1.slice(index1);
  }

  if (index2 < arr2.length) {
    leftInArr = arr2.slice(index2);
  }

  result = result.concat(leftInArr);
  console.log(result);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]
