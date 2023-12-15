import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.ribbon = this.renderMenu();
    this.slideMenu();    
    this.selectedItems = [];
  }

  renderMenu() {
    let ribbon = createElement(`
    <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
    </div>`)

    ribbon.insertAdjacentHTML('afterbegin', `<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon"></button>`);

    ribbon.insertAdjacentHTML('beforeend',`<button class="ribbon__arrow ribbon__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon"></button>`);    

    let ribbonInner = createElement(`
    <nav class="ribbon__inner">
    </nav>
    `);

    ribbonInner.insertAdjacentHTML('beforeend', this.categories.map( item => 
      `<a href="" class="ribbon__item" data-id="${item.id}">${item.name}</a>`).join(''));   
    

    ribbon.append(ribbonInner)
      
    return ribbon;
  }

  get elem() {
    this.ribbon.addEventListener('click', this.selectCategory);

    return this.ribbon;    
  }

  selectCategory = (event) => {  
    
    if (event.target.closest('.ribbon__item')) {
      event.preventDefault();
      
      if(this.selectedItems.length == 0) {
        this.selectedItems.push(event.target);
        event.target.classList.add('ribbon__item_active');      
      }
      else {
        let previousItem = this.selectedItems.pop();     
        this.selectedItems.push(event.target);      
        previousItem.classList.remove('ribbon__item_active');
        event.target.classList.add('ribbon__item_active')
      }    
      
      
      let selectEvent = new CustomEvent('ribbon-select', { 
        detail: event.target.closest('.ribbon__item').dataset.id,
        bubbles: true 
      })
  
      this.ribbon.dispatchEvent(selectEvent);

    }       
    
  }

  slideMenu() {
    let ribbon = this.ribbon;
    const arrowLeft = ribbon.querySelector('.ribbon__arrow_left');
    const arrowRight = ribbon.querySelector('.ribbon__arrow_right');
    let ribbonInner = ribbon.querySelector('.ribbon__inner');
    

    ribbon.addEventListener('click', function(event){   
      
      let target = event.target;      

      if(target.closest('.ribbon__arrow_left')) {       
        ribbonInner.scrollBy(-350,0);     
      }

      if(target.closest('.ribbon__arrow_right')) {
        ribbonInner.scrollBy(350, 0);        
      }
    });    


    ribbonInner.addEventListener('scroll', function(event) {

      
      let scrollLeft = ribbonInner.scrollLeft;          
      
      if (scrollLeft == 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
        arrowRight.classList.add('ribbon__arrow_visible');
      }
  
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
  
      let scrollRight = scrollWidth - scrollLeft - clientWidth; 
  
      if (scrollRight == 0) {
        arrowRight.classList.remove('ribbon__arrow_visible');
        arrowLeft.classList.add('ribbon__arrow_visible');
      }

    });

    

  }
}
