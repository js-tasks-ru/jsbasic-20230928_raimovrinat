function isEmpty(obj) {
  let counter = 0;

  for (let key in obj) {
    if(key) {
     counter++;
    }
  }

  return (counter == 0) ? true:false;
}
