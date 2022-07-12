let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
let resultString = resultArray.join('').toUpperCase();

for(let i = 0; i < input.length; i++){
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  } else if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    };
  };
};

console.log(resultString)
