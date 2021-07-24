export function getMergeSortAnimations(array) {
     const animations = [];
     if (array.length <= 1) return array;
     const auxiliaryArray = array.slice();
     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
     return animations;
}

function mergeSortHelper(
     mainArray,
     startIdx,
     endIdx,
     auxiliaryArray,
     animations,
) {
     if (startIdx === endIdx) return;
     const middleIdx = Math.floor((startIdx + endIdx) / 2);
     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
     mainArray,
     startIdx,
     middleIdx,
     endIdx,
     auxiliaryArray,
     animations,
) {
     let k = startIdx;
     let i = startIdx;
     let j = middleIdx + 1;
     while (i <= middleIdx && j <= endIdx) {
          // These are the values that we're comparing; we push them once
          // to change their color.
          animations.push([i, j]);
          // These are the values that we're comparing; we push them a second
          // time to revert their color.
          animations.push([i, j]);
          if (auxiliaryArray[i] <= auxiliaryArray[j]) {
               // We overwrite the value at index k in the original array with the
               // value at index i in the auxiliary array.
               animations.push([k, auxiliaryArray[i]]);
               mainArray[k++] = auxiliaryArray[i++];
          } else {
               // We overwrite the value at index k in the original array with the
               // value at index j in the auxiliary array.
               animations.push([k, auxiliaryArray[j]]);
               mainArray[k++] = auxiliaryArray[j++];
          }
     }
     while (i <= middleIdx) {
          // These are the values that we're comparing; we push them once
          // to change their color.
          animations.push([i, i]);
          // These are the values that we're comparing; we push them a second
          // time to revert their color.
          animations.push([i, i]);
          // We overwrite the value at index k in the original array with the
          // value at index i in the auxiliary array.
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
     }
     while (j <= endIdx) {
          // These are the values that we're comparing; we push them once
          // to change their color.
          animations.push([j, j]);
          // These are the values that we're comparing; we push them a second
          // time to revert their color.
          animations.push([j, j]);
          // We overwrite the value at index k in the original array with the
          // value at index j in the auxiliary array.
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
     }

     function quickSort(array) {
          if (array.length <= 1) {
               return array;
          }

          const pivot = (Math.floor(Math.random() * Math.floor(array.length - 1)));
          let rightPointer = 0;
          let leftPointer = array.length - 1;

          while (leftPointer > pivot && array[leftPointer] > array[pivot]) {
               leftPointer--;
          }

          while (rightPointer < pivot && array[rightPointer] < array[pivot]) {
               rightPointer++;
          }

          if (rightPointer === 0 && leftPointer === array.length - 1) {
               return array;
          }

          if (rightPointer !== 0 && leftPointer !== array.length - 1) {
               let temp = array[rightPointer];
               array[rightPointer] = array[leftPointer];
               array[leftPointer] = temp
          }

          let finalArray = [];
          finalArray.concat(quickSort(array.slice(0, pivot)), quickSort(array.slice(pivot + 1, array.length - 1)));

          return finalArray;
     }
}