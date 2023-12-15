import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.slider = this.renderSlider();
    this.addEventListeners();
  }

  renderSlider() {

    let slider = createElement(`
    <!--Корневой элемент слайдера-->
    <div class="slider">

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>

      <!--Полоска слайдера-->
      <div class="slider__progress"></div>

    </div>
    `);

    let sliderSteps = createElement(
      `<!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">

       </div>`);

    slider.append(sliderSteps);

    for (let i = 0; i < this.steps; i++) {
      let newItem = document.createElement('SPAN');
      sliderSteps.append(newItem);
    }

    slider.append(sliderSteps);

    return slider;
  }

  get elem() {
    return this.slider;
  }

  addEventListeners() {
    let slider = this.slider;
    let segments = this.steps - 1;
    let steps = slider.querySelectorAll('.slider__steps span');
    steps[0].classList.add('slider__step-active');
    let stepsStack = [];
    stepsStack.push(steps[0]);


    slider.addEventListener('click', function(event) {
      let target = event.target;

      if(target.closest('.slider')) {

        let thumb = slider.querySelector('.slider__thumb');
        let sliderValue = slider.querySelector('.slider__value');
        let progress = slider.querySelector('.slider__progress');


        let left = event.clientX - slider.getBoundingClientRect().left;
        let leftRelative = left / slider.offsetWidth;
        let approximateValue = leftRelative * segments;
        let value = Math.round(approximateValue);
        let valuePercents = value / segments * 100;

        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
        sliderValue.textContent = value;


        let lastItem = stepsStack.pop();
        lastItem.classList.remove('slider__step-active');
        stepsStack.push(steps[value])

        steps[value].classList.add('slider__step-active');



        let addEvent = new CustomEvent('slider-change', {
          detail: value,
          bubbles: true
        });

        slider.dispatchEvent(addEvent);

      }

    });

  }


}


