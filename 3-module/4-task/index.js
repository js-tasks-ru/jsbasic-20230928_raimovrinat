let users = [{
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
},
{
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 31,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Duncan Randall! You have 7 unread messages.",
  "favouriteFruit": "banana"
},            
            
];




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

showSalary(users, 40);

