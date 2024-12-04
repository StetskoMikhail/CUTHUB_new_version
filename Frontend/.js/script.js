//скрипт для переключения тем
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Слушатель событий для кнопки
themeToggleButton.addEventListener('click', () => {
  // Переключаем класс 'dark-theme' у body
  body.classList.toggle('dark-theme');

  // Сохраняем выбранную тему в localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Проверяем сохранённую тему при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }
});

//Скрипт для скролла вверх
const scrollUpButton = document.createElement('button');
scrollUpButton.textContent = '↑';
scrollUpButton.classList.add('scroll-up-btn');
document.body.appendChild(scrollUpButton);

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
});

scrollUpButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//Код для увел.карточек

// Получаем все изображения в галерее
const galleryImages = document.querySelectorAll('.gallery-item img');

// Создаем модальное окно и элемент для изображения
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);

// Добавляем обработчик события на каждое изображение в галерее
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        // Устанавливаем источник изображения в модальное окно
        modalContent.src = image.src;

        // Показываем модальное окно
        modal.style.display = 'flex';
    });
});

//Для кнопки подробнее

// Добавляем обработчик для закрытия модального окна при клике
modal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Получаем все кнопки "Подробнее"
const detailButtons = document.querySelectorAll('.details-btn');

// Добавляем обработчик кликов для каждой кнопки
detailButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Находим скрытую информацию рядом с кнопкой
    const extraInfo = this.nextElementSibling;

    // Переключаем видимость дополнительной информации
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
      extraInfo.style.display = 'block'; // Показываем информацию
    } else {
      extraInfo.style.display = 'none'; // Скрываем информацию
    }
  });
});

