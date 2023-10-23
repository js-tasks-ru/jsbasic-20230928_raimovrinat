function makeFriendsList(friends) {
  let fullNames = friends.map(item => item.firstName + ' ' + item.lastName);
  
  let ul = document.createElement('ul');  
  document.body.append(ul);  
  
  ul.insertAdjacentHTML('beforeEnd', fullNames.map(p => `<li>${p}</li>`).join('') );  
  
  return ul;
}
