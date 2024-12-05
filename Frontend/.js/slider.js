// JavaScript для слайдера
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentIndex = 0;

// Функция для перемещения слайдов
function updateSlider() {
	 const slideWidth = slides[0].clientWidth;
	 sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Событие для кнопки "вперед"
nextBtn.addEventListener('click', () => {
	 currentIndex = (currentIndex + 1) % slides.length; // Цикличность
	 updateSlider();
});

// Событие для кнопки "назад"
prevBtn.addEventListener('click', () => {
	 currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Цикличность
	 updateSlider();
});

// Обновление размера при изменении окна
window.addEventListener('resize', updateSlider);