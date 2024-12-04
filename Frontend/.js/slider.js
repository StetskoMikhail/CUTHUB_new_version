let currentIndex = 0; // Индекс текущего изображения
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

function updateButtons() {
    // Скрыть левую кнопку, если это первый слайд
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    
    // Скрыть правую кнопку, если это последний слайд
    if (currentIndex === slides.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        document.querySelector('.slider-wrapper').style.transform = `translateX(-${currentIndex * 390}px)`;
    }
    updateButtons(); // Обновить видимость кнопок
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        document.querySelector('.slider-wrapper').style.transform = `translateX(-${currentIndex * 390}px)`;
    }
    updateButtons(); // Обновить видимость кнопок
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Инициализация кнопок на старте
updateButtons();
