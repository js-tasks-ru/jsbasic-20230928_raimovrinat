function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let txt = document.querySelector('#text'); 
  
  btn.addEventListener('click', function() {
    if(!txt.hidden) {
      txt.hidden = true;
    }
    else
      txt.hidden = false;
    });
   
}