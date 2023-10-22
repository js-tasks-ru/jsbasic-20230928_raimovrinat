function highlight(table) {
  let rows = table.tBodies;

  for(let i of rows) {
    for (let j of i.rows) {
      
      if (j.cells[3].getAttribute('data-available') == 'true') {
        j.classList.add('available');
      } 
      else if (j.cells[3].getAttribute('data-available') == 'false') {
        j.classList.add('unavailable');  
      }   
      else {
        j.setAttribute('hidden','true'); 
      }
      
      if (j.cells[2].innerHTML == 'm') {
        j.classList.add('male');
      } 
      else if (j.cells[2].innerHTML == 'f') {
        j.classList.add('female');  
      }  
      
      if((+j.cells[1].innerHTML) < 18) {
        j.style.textDecoration = 'line-through'
      }    
      
    }
  }
}
