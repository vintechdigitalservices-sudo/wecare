// Intersection Observer to slide in image from right
const globeSection = document.querySelector('.globe-image-wrapper');

const globeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        globeSection.classList.add('active-globe');
      }
    });
  },
  { threshold: 0.3 }
);

globeObserver.observe(globeSection);

document.addEventListener('DOMContentLoaded', function() {
  const certHeaderEl = document.querySelector('.animate-cert-header');
  const certSectionEl = document.querySelector('.animate-cert-video');
  const videoEl = document.getElementById('certVideo');

  const certObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        certHeaderEl.classList.add('show');
        certSectionEl.classList.add('show');
        if (videoEl) videoEl.play();
      } else {
        certHeaderEl.classList.remove('show');
        certSectionEl.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  certObserver.observe(document.getElementById('certificate-verification'));
});

document.addEventListener('DOMContentLoaded', () => {
  const footerElements = document.querySelectorAll('.animate-footer-reveal');

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
  };

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Enters viewport (either from top or bottom)
        entry.target.classList.add('active-footer');
      } else {
        // Exits viewport - Resets the animation so it can fire again
        entry.target.classList.remove('active-footer');
      }
    });
  }, observerOptions);

  footerElements.forEach(el => footerObserver.observe(el));
});

const newsElements = document.querySelectorAll('.animate-news-right, .animate-news-left, .animate-news-bottom, .animate-news-fadeup');

const newsObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-news');
    } else {
      entry.target.classList.remove('show-news');
    }
  });
}, { 
  threshold: 0.1,
  /* RootMargin helps trigger the animation slightly before it enters view */
  rootMargin: '0px 0px -50px 0px' 
});

newsElements.forEach(el => newsObserver.observe(el));

window.addEventListener('scroll', function() {
  const header = document.getElementById('mainHeader');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleNav() { document.getElementById('navDrawer').classList.toggle('active'); }

let familiesAnimated = false, studentsAnimated = false, teamAnimated = false;
function countUp(el, end, duration=600){
  let start=0, range=end, increment=range/(duration/15);
  let counter = setInterval(()=>{
    start+=increment;
    if(start>=range){ start=range; clearInterval(counter); }
    el.innerText=Math.floor(start)+'+';
  },15);
}
function typeText(el, text){
  el.innerText=''; let i=0;
  let interval = setInterval(()=>{
    el.innerText+=text.charAt(i); i++;
    if(i>=text.length) clearInterval(interval);
  }, 100);
}

const scrollElements = document.querySelectorAll(
'.scroll-animate, .service-card, .animate-on-scroll, .animate-join, .animate-academy'
);
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      if(entry.target.id==='stat-families' && !familiesAnimated) { countUp(document.getElementById('families'), 50); familiesAnimated = true; }
      if(entry.target.id==='stat-students' && !studentsAnimated) { countUp(document.getElementById('students'), 45); studentsAnimated = true; }
      if(entry.target.id==='stat-team' && !teamAnimated) { typeText(document.getElementById('typing'),'Expert Team'); teamAnimated = true; }
    } else {
      if(!entry.target.classList.contains('service-card')) entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.15 });

scrollElements.forEach(el=>observer.observe(el));

// Review Slider Logic
const slider = document.querySelector('.reviews-slider');
const slides = document.querySelectorAll('.review-card');
let index = 0;
const showSlide = i => { slider.style.transform = `translateX(-${i * 100}%)`; };
const nextSlide = () => { index = (index + 1) % slides.length; showSlide(index); };
const prevSlide = () => { index = (index - 1 + slides.length) % slides.length; showSlide(index); };
let autoSlide = setInterval(nextSlide, 5000);
document.querySelector('.slider-arrow.next').addEventListener('click', () => {
  nextSlide(); clearInterval(autoSlide); autoSlide = setInterval(nextSlide, 5000);
});
document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
  prevSlide(); clearInterval(autoSlide); autoSlide = setInterval(nextSlide, 5000);
});
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.cpr-content');
    const heroImage = document.querySelector('.cpr-image');

    // Simple Fade In Effect
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateX(-20px)';
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(20px)';

    setTimeout(() => {
        heroContent.style.transition = 'all 0.8s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
        
        heroImage.style.transition = 'all 0.8s ease-out';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 200);
});
  
