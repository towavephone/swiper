// eslint-disable-next-line
import '../../build/swiper-bundle.css';

// eslint-disable-next-line
import Swiper from '../../build/swiper-bundle.esm';

// eslint-disable-next-line
window.swiper = new Swiper({
  el: '.swiper-container',
  // scrollbar: true,
  createElements: true,
  pagination: true,
  // navigation: true,
  direction: 'vertical',
  mousewheel: {
    forceToAxis: true,
    sensitivity: 2,
  },
  speed: 2000,
  enableDelayScroll: true,
  delayScrollTime: 200,
});

// eslint-disable-next-line no-restricted-globals
document.querySelector('.append-slide').addEventListener('click', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-restricted-globals
  window.swiper.appendSlide('<div class="swiper-slide">Slide</div>');
});
