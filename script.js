document.querySelectorAll('.trailers__button').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.trailers__button').forEach(button => {
      button.classList.remove('trailers__button_active');
    });
    this.classList.add('trailers__button_active');
  });
});

// Получаем все кнопки трейлеров и все видео
const buttons = document.querySelectorAll('.trailers__button');
const videos = document.querySelectorAll('.trailers__video');

// Добавляем обработчик события click для каждой кнопки
buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    // Скрываем все видео
    videos.forEach(video => {
      video.style.display = 'none';
    });

    // Находим индекс кнопки, по которой было совершено нажатие
    const buttonIndex = Array.from(buttons).indexOf(button);

    // Показываем соответствующее видео
    videos[buttonIndex].style.display = 'block';
  });
});
