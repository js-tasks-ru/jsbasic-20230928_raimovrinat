/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  
  constructor(rows) {    
    this.rows = rows;  
    this.table = document.createElement('TABLE');   
    this.makeTable(); 
  }
  
  makeTable() {
    let thead = document.createElement('THEAD');
    let trThead = document.createElement('TR');  
    
    this.table.append(thead);
    thead.append(trThead); 
  
    let theads = ['Имя','Возраст','Зарплата','Город',''];
    trThead.insertAdjacentHTML('beforeEnd', theads.map(p => `<th>${p}</th>`).join(''));

    let tbody = document.createElement('TBODY');
    this.table.append(tbody);
    
    tbody.insertAdjacentHTML('beforeEnd', this.rows.map(cell => `<tr><td>${cell.name}</td><td>${cell.age}</td><td>${cell.salary}</td><td>${cell.city}</td><td><button>X</button></td></tr>`).join(''));    
    
    this.table.addEventListener('click', this.onClick);
    
    return this.table;
  }

  get elem() {    
    return this.table;
  }
  
  onClick = (event) => {
    
    if(event.target.closest('button')) {
      event.target.parentElement.parentElement.remove();      
    }
  }  
}
