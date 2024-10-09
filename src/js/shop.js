// Отримуємо елементи
const productCards = document.querySelector('.product-cards');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const productsPerRow = 3; // Кількість продуктів в рядку на великих екранах

// Обчислюємо висоту одного рядка продуктів
function getRowHeight() {
  const card = document.querySelector('.product-cards .card');
  const style = window.getComputedStyle(card);
  const height = card.offsetHeight;
  const marginBottom = parseFloat(style.marginBottom);
  return height + marginBottom;
}

// Функція для оновлення стану
function updateProductView() {
  const products = document.querySelectorAll('.product-cards .card');
  const totalRows = Math.ceil(products.length / productsPerRow);

  if (window.innerWidth >= 768 && totalRows > 3) {
    const rowHeight = getRowHeight();
    const maxHeight = rowHeight * 3; // Висота трьох рядків
    productCards.style.maxHeight = `${maxHeight}px`;
    productCards.classList.add('collapsed');
    loadMoreBtn.style.display = 'block';
  } else {
    productCards.style.maxHeight = 'none';
    productCards.classList.remove('collapsed');
    loadMoreBtn.style.display = 'none';
  }
}

// Обробник події для кнопки
loadMoreBtn.addEventListener('click', () => {
  productCards.style.maxHeight = 'none';
  productCards.classList.remove('collapsed');
  loadMoreBtn.style.display = 'none';
});

// Обробник зміни розміру вікна
window.addEventListener('resize', updateProductView);

// Викликаємо функцію при завантаженні сторінки
updateProductView();
