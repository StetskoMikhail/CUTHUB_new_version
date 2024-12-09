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
