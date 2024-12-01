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
