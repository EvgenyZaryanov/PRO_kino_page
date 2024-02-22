const link = document.querySelector('.header__link');
const link2 = document.querySelector('.hero__link');
const trailersSection = document.getElementById('trailers');

link.addEventListener('click', function (event) {
  event.preventDefault();
  const trailersSectionTop = trailersSection.offsetTop;

  window.scrollTo({
    top: trailersSectionTop,
    behavior: 'smooth'
  });
});

link2.addEventListener('click', function (event) {
  event.preventDefault();
  const trailersSectionTop = trailersSection.offsetTop;

  window.scrollTo({
    top: trailersSectionTop,
    behavior: 'smooth'
  });
});

const arrow = document.querySelector('.hero__arrow');
const aboutSection = document.getElementById('about');

arrow.addEventListener('click', function (event) {
  event.preventDefault();
  const aboutSectionTop = aboutSection.offsetTop;

  window.scrollTo({
    top: aboutSectionTop,
    behavior: 'smooth'
  });
});

document.querySelectorAll('.trailers__button').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.trailers__button').forEach(button => {
      button.classList.remove('trailers__button_active');
    });
    this.classList.add('trailers__button_active');
  });
});

const buttons = document.querySelectorAll('.trailers__button');
const videos = document.querySelectorAll('.trailers__video');

buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    videos.forEach(video => {
      video.style.display = 'none';
    });

    const buttonIndex = Array.from(buttons).indexOf(button);

    videos[buttonIndex].style.display = 'block';
  });
});
