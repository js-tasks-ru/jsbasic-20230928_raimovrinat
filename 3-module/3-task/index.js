 function camelize(str) {
  if (!str) {
    return str;
  }

  return str
    .split('-') 
    .map((item, index) => {
      
      if (index === 0) { // Это нужно делать, чтобы не делать заглавной первую часть
        return item;
      }

      let firstLetter = item.slice(0, 1);
      let rest = item.slice(1);

      return `${firstLetter.toUpperCase()}${rest}`;
    })
    .join('');
}


// function camelize(str) {
//   let splittedString = str.split('-'); 
   
//   let camelizedArray = [];
  
//   for (let i = 1; i < splittedString.length; i++) {
//     camelizedArray[i] = splittedString[i][0].toUpperCase() + splittedString[i].slice(1);
//   }
  
//   camelizedArray[0] = splittedString[0];
  
//   let joinedArray = camelizedArray.join('');
  
//   return joinedArray;
//  }


