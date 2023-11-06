import createElement from '../../assets/lib/create-element.js';


export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.carousel = this.makeCarousel();    
    this.initCarousel();    
  }

  
  makeCarousel(){
    
    let carousel = createElement(`
    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>    
    `);

    let carouselInner = createElement(`<div class="carousel__inner"></div>`)

    carouselInner.insertAdjacentHTML('beforeend', this.slides.map(slide => 
      `<div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`).join(''));   
      
      
      carousel.append(carouselInner);
    
    carousel.addEventListener('click', this.addToCart);


    return carousel;
  }  

  get elem() {  
    return this.carousel;
  }

  addToCart = (event) => {
    if(event.target.closest('.carousel__button')) {
      let addEvent = new CustomEvent('product-add', {
        detail: event.target.closest('.carousel__slide').dataset.id,
        bubbles: true
      });

      this.carousel.dispatchEvent(addEvent); 
    }
  }

  

  initCarousel(){      
    let carousel = this.carousel;
    
    const carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');      
    const carouselArrowRight = carousel.querySelector('.carousel__arrow_right');
    carouselArrowLeft.style.display = 'none';
  
    let sliderCounter = 1;
    let currentOffset = 0;     
  
    carousel.addEventListener('click', (event)=> {
      
      let target = event.target;
      console.log(target)
      let carouselInner = carousel.querySelector('.carousel__inner');
      let slideWidth = carousel.querySelector('.carousel__slide').offsetWidth;   
      
  
      if(target.closest('.carousel__arrow_right') && sliderCounter < this.slides.length) {        
        
        carouselInner.style.transform = `translateX(-${slideWidth * sliderCounter}px)`; 
        carouselArrowLeft.style.display = '';
        sliderCounter++;
        currentOffset += slideWidth;
              
  
        if (sliderCounter == this.slides.length) {
          carouselArrowRight.style.display = 'none';
        }
      } 
  
      if(target.closest('.carousel__arrow_left')) {   
        currentOffset-= slideWidth;
        carouselInner.style.transform = `translateX(-${currentOffset}px)`; 
        carouselArrowRight.style.display = '';
        sliderCounter--;
      
  
        if(sliderCounter == 1) {        
          carouselArrowLeft.style.display = 'none';
        }
      }  
    });    
  }
}