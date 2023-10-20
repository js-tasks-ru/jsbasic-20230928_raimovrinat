function showSalary(users, age) {

  if ( Array.isArray(users) && users.length > 0 && (typeof age) == 'number' ) {
    
    let findedUsers = users.filter(item => item.age <= age);
    
    let result = '';

    for (let i of findedUsers) {
      result += i.name +', '+ i.balance + '\n';
    }  

    let splittedResult = [...result];

    splittedResult.pop();

    let joinedResult = splittedResult.join('');
    
    return joinedResult;
    
  }    
  else {
    console.log('There are no any users or age is not a number');
  }
}



