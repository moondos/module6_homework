function OddAndEvenCount(arr) {
  
  let zerocount = 0;
  let evencount = 0;
  let oddcount = 0;

  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        
          if (arr[i] === 0) {
              zerocount++;
          } else if (arr[i] % 2 === 0) {
              evencount++;
          } else {
              oddcount++;
          }
      }
  }
  console.log(`В массиве ${zerocount} нулей, ${evencount} чётных и ${oddcount} нечётных!`);
}
  
let arr = [35, 4, 0, null, undefined, 566, 6, 33, 0, 87];
let arr1 = [678, 0, 0, null, undefined, 90, 7, 11, 0];


OddAndEvenCount(arr);
OddAndEvenCount(arr1);
