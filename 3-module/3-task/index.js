function splitString(str) {
  
  let splittedString = str.split('-'); 
  
  return splittedString;
}


function camelize(str) {
  let splittedString = splitString(str);
   
  let camelizedArray = [];
  
  for (let i = 1; i < splittedString.length; i++) {
    camelizedArray[i] = splittedString[i][0].toUpperCase() + splittedString[i].slice(1);
  }
  
  camelizedArray[0] = splittedString[0];
  
  let joinedArray = camelizedArray.join('');
  
  return joinedArray;
 }


camelize("background-color");
camelize("list-style-image");
camelize('-webkit-transition');


