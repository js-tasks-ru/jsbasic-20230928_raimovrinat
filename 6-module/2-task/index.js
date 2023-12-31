import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {    
    this.product = product;  
    this.card = createElement(`
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>`);    
  }
  
  get elem() {    
    this.card.addEventListener('click', this.onClick);

    return this.card;
  }

  onClick = (event) =>  {      
    if(event.target.closest('.card__button')) {
      let addEvent = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true
      });

      this.card.dispatchEvent(addEvent); 
    }
  
  }
}