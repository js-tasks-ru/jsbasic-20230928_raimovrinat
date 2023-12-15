import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {   
    this.modal = this.render();
    this.addEventListeners();
  }

  render() {
    return createElement(`
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
      </div>
    </div>
    `);   

  }

  open() {        
    let modal = this.modal;
    document.body.append(modal);
    document.body.classList.add('is-modal-open');
    
  }

  setTitle(title) {
    let modal = this.modal;
    let modalTitle = modal.querySelector('.modal__title');    
    modalTitle.textContent = title;
  }

  setBody(body) {        
    let modal = this.modal;
    let modalBody = modal.querySelector('.modal__body');
    modalBody.textContent = body.innerHTML;
  }

  close() {
    let modal = this.modal;
    document.body.classList.remove('is-modal-open');
    modal.remove()
    
  }

  

  addEventListeners() {
    let modal = this.modal;

    document.addEventListener('keydown', function(event) {
      if(event.code === 'Escape') {
        document.body.classList.remove('is-modal-open');
        modal.remove()
      }
    });

    document.addEventListener('click', function(event) {
      if(event.target.closest('.modal__close')) {
        document.body.classList.remove('is-modal-open')
        modal.remove()
      
      }
    });

  }

}


