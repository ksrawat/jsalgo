/*
  Given a sorted array in ascending order, having N integers, count and display any existing pair of array elements 
  such that their sum is equal to x.
*/

const array = [2,3,4,5,6,7,8,9];
const sum = 11;

function findPairs(arr, sum){
  let start = 0;
  let end = array.length - 1;
  let pairArray = [];
  
  while( start < end ){
    if(array[start] + array[end] === sum){
      pairArray.push([array[start], array[end]]);
      // increment the start pointer from left
      start = start + 1;
      // decrement the end pointer from right
      end = end - 1;
    }else if(array[start] + array[end] < sum){
      start = start + 1;
    }else if(array[start] + array[end] > sum){
      end = end - 1;
    }
  }
  console.log('Total Pairs making sum: ',pairArray.length);
  return pairArray;
}

console.log(findPairs(array, sum));
