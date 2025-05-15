// SECTION SERVICES - JavaScript
const track = document.getElementById('carousel-track');
const cards = track.querySelectorAll('.card');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let currentSlide = 0;

function getStep() {
  const style = getComputedStyle(track);
  const gap = parseInt(style.gap) || 30;
  const card = cards[0];
  return card.offsetWidth + gap;
}

function getVisibleCardCount() {
  const containerWidth = track.parentElement.offsetWidth;
  const cardWidth = cards[0].offsetWidth;
  const style = getComputedStyle(track);
  const gap = parseInt(style.gap) || 30;
  return Math.floor((containerWidth + gap) / (cardWidth + gap));
}

function getMaxSlideIndex() {
  return cards.length - getVisibleCardCount();
}

function updateCarousel() {
  const step = getStep();
  const maxIndex = getMaxSlideIndex();

  // Sécuriser l'index
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxIndex) currentSlide = maxIndex;

  const offset = step * currentSlide;
  track.style.transform = `translateX(-${offset}px)`;

  // Boutons
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide >= maxIndex;

  prevBtn.style.opacity = prevBtn.disabled ? 0.3 : 1;
  nextBtn.style.opacity = nextBtn.disabled ? 0.3 : 1;
  prevBtn.style.pointerEvents = prevBtn.disabled ? 'none' : 'auto';
  nextBtn.style.pointerEvents = nextBtn.disabled ? 'none' : 'auto';
}

function moveSlide(direction) {
  currentSlide += direction;
  updateCarousel();
}

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);


/* ILS PARLENT DE NOTRE PROJET*/
const logoTrack = document.getElementById('logos-carousel');
const logoCards = logoTrack.querySelectorAll('.logo-card');
const prevLogoBtn = document.querySelector('.logos-section .nav.prev');
const nextLogoBtn = document.querySelector('.logos-section .nav.next');

let logoIndex = 0;

function getLogoCardWidth() {
    const card = logoCards[0];
    const style = getComputedStyle(logoTrack);
    const gap = parseInt(style.gap || 30);
    return card.offsetWidth + gap;
}

function getMaxLogoOffset() {
    const totalWidth = logoCards.length * getLogoCardWidth();
    const containerWidth = logoTrack.parentElement.offsetWidth;
    return Math.max(0, totalWidth - containerWidth);
}

function moveLogoSlide(direction) {
    const cardWidth = getLogoCardWidth();
    const containerWidth = logoTrack.parentElement.offsetWidth;
    const maxOffset = getMaxLogoOffset();

    logoIndex += direction;
    let offset = cardWidth * logoIndex;

    // Limiter l'offset
    if (offset > maxOffset) {
        offset = maxOffset;
        logoIndex = Math.floor(offset / cardWidth);
    }
    if (offset < 0) {
        offset = 0;
        logoIndex = 0;
    }

    logoTrack.style.transform = `translateX(-${offset}px)`;
    updateLogoNavButtons(offset, maxOffset);
}

function updateLogoNavButtons(currentOffset, maxOffset) {
    prevLogoBtn.disabled = currentOffset <= 0;
    nextLogoBtn.disabled = currentOffset >= maxOffset - 1;

    prevLogoBtn.style.opacity = prevLogoBtn.disabled ? 0.3 : 1;
    nextLogoBtn.style.opacity = nextLogoBtn.disabled ? 0.3 : 1;
    prevLogoBtn.style.pointerEvents = prevLogoBtn.disabled ? "none" : "auto";
    nextLogoBtn.style.pointerEvents = nextLogoBtn.disabled ? "none" : "auto";
}

window.addEventListener('resize', () => moveLogoSlide(0));
window.addEventListener('load', () => moveLogoSlide(0));


/*=============================header ================== */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', function() {
  nav.classList.toggle('active');
});

//FOOTER
  document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top');

    // Affiche ou cache le bouton selon le scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    // Scroll fluide vers le haut quand on clique
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });



