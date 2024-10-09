// Отримуємо елементи
const productCards = document.querySelector('.product-cards');
const loadMoreBtn = document.getElementById('loadMoreBtn');

function getProductsPerRow() {
  if (window.innerWidth >= 992) {
    return 3; // Три продукти в рядку
  } else if (window.innerWidth >= 576) {
    return 2; // Два продукти в рядку
  } else {
    return 1; // Один продукт в рядку
  }
}

function updateProductView() {
  const products = Array.from(
    document.querySelectorAll('.product-cards .card')
  );
  const productsPerRow = getProductsPerRow();
  const totalRows = Math.ceil(products.length / productsPerRow);

  if (window.innerWidth >= 768 && totalRows > 3) {
    // Приховуємо продукти після третього ряду
    const visibleProductsCount = productsPerRow * 3;
    products.forEach((product, index) => {
      if (index >= visibleProductsCount) {
        product.classList.add('hidden');
      } else {
        product.classList.remove('hidden');
      }
    });
    loadMoreBtn.style.display = 'block';
  } else {
    // Відображаємо всі продукти
    products.forEach(product => {
      product.classList.remove('hidden');
    });
    loadMoreBtn.style.display = 'none';
  }
}

// Обробник події для кнопки "Завантажити більше"
loadMoreBtn.addEventListener('click', () => {
  const products = document.querySelectorAll('.product-cards .card');
  products.forEach(product => {
    product.classList.remove('hidden');
  });
  loadMoreBtn.style.display = 'none';
});

// Обробник зміни розміру вікна
window.addEventListener('resize', updateProductView);

// Викликаємо функцію при завантаженні сторінки
updateProductView();
