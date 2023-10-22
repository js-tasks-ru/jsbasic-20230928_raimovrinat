function makeDiagonalRed(table) {
  
  let rows = table.rows; 
  
  let counter = 0;
  for(let i of rows) {
    i.cells[counter].style.backgroundColor = 'red';
    counter++;
  }
  
}
