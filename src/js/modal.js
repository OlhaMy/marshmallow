document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.card .button');
  const backdrop = document.querySelector('.backdrop');
  const modalContent = document.querySelector('.modal-content');
  const btnCloseModal = document.querySelector('.btnCloseModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.querySelector('.title-modal');
  const modalDescription = document.getElementById('modalDescription');
  const modalCalories = document.getElementById('modalCalories');

  // Функція для відкриття модального вікна
  function openModal(event) {
    const card = event.currentTarget.closest('.card');
    const imageSrc = card.querySelector('img').getAttribute('src');
    const title = card.querySelector('.card-title').innerText;
    const description = card.getAttribute('data-description');
    const calories = card.getAttribute('data-calories');

    modalImage.setAttribute('src', imageSrc);
    modalImage.setAttribute('alt', title);
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalCalories.innerText = `Калорійність: ${calories} ккал`;

    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Забороняємо прокрутку сторінки
  }

  // Функція для закриття модального вікна
  function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
  }

  // Додаємо обробник подій для кнопок "Деталі"
  buttons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  // Закриваємо модальне вікно при натисканні на кнопку закриття
  btnCloseModal.addEventListener('click', closeModal);

  // Закриваємо модальне вікно при натисканні на бекдроп
  backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  // Закриваємо модальне вікно при натисканні клавіші Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
});
