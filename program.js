let input = 'a whaleu ofu a deal';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
let inputString = [...input];
for(let n =0; n < inputString.length; n++){
  for(let m=0; m < vowels.length; m++){
    if(inputString[n] === vowels[m]) {
      resultArray.push(vowels[m]);
    }
  }
};
for(let i =0; i< inputString.length; i++){
if(inputString[i] === 'u'){
  let x = resultArray.indexOf('u');
  resultArray.splice(x, 0, 'u');
 }
};
for(let i = 0; i < inputString.length; i++){
  if(inputString[i] === 'e'){
    let y = resultArray.indexOf('e');
    resultArray.splice(y, 0 ,'e');
  }
};
console.log(resultArray.join('').toUpperCase());
