let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function splitString(str) {
  
  let splittedString = str.split(' '); 
  
  return splittedString;
}


function getMinMax(str) {
  
  let splittedString = splitString(str);
  
  let resultArray = []
  for (let i of splittedString) {
    if (isFinite(i)) {
      resultArray.push(+i);
    }
  }
    
  return {
    min: Math.min(...resultArray),
    max: Math.max(...resultArray),
  };
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }