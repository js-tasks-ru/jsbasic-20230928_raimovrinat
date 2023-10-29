function initCarousel() {  
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  carouselArrowLeft.style.display = 'none';

  let carousel = document.querySelector('.carousel');
  let sliderCounter = 1;
  let currentOffset = 0;

  carousel.addEventListener('click', function() {
    let target = event.target;
    let carouselInner = document.querySelector('.carousel__inner');
    let slideWidth = document.querySelector('.carousel__slide').offsetWidth;   
    

    if(target.closest('.carousel__arrow_right') && sliderCounter < 4) {      
    
      carouselInner.style.transform = `translateX(-${slideWidth * sliderCounter}px)`; 
      carouselArrowLeft.style.display = '';
      sliderCounter++;
      currentOffset += slideWidth;
            

      if (sliderCounter == 4) {
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








