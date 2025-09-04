// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Image Slider
let slideIndex = 1;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Auto slide
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

setInterval(nextSlide, 4000);

// Visitor Counter Animation
function animateCounter() {
    const counter = document.getElementById('followers-count');
    let count = 12450;
    let increment = Math.floor(Math.random() * 5) + 1;
    
    setInterval(() => {
        count += increment;
        counter.textContent = `followers: ${count.toLocaleString('id-ID')}`;
    }, 5000);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu after click
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Article Hover Effects
const articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.transform = 'translateY(-8px)';
    });
    
    article.addEventListener('mouseleave', () => {
        article.style.transform = 'translateY(-5px)';
    });
});

// Dynamic Welcome Message
function setWelcomeMessage() {
    const hour = new Date().getHours();
    const headerSubtitle = document.querySelector('.header-content p');
    
    if (hour < 10) {
        headerSubtitle.textContent = '🌅 WAKEYWAKEY! ITS TIME TO GRIND!';
    } else if (hour < 15) {
        headerSubtitle.textContent = '☀️ HOLAA! DONT FORGET TO EAT LUNCH';
    } else if (hour < 18) {
        headerSubtitle.textContent = '🌤️ OOIITT! Get some rest and treat yourself';
    } else {
        headerSubtitle.textContent = '🔥 ITS TIME! GO GRIND YOUR WAY TO SUCCESS';
    }
}

// Initialize functions when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateCounter();
    setWelcomeMessage();
    showSlides(slideIndex);
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Dynamic quick facts rotation
const quickFacts = [
    "I once filmed a live performance of Didi Kempot at UGM",
    "I usually start my day with coffee and end it with tea",
    "I joined Capture the Flag competitions and ranked top 10 nationally",
    "I enjoy experimenting with cinematography and editing styles",
    "I dream of owning a luxury watch one day",
    "I once led over 100 committee members as Vice Project Officer of a campus election",
    "I’m passionate about cybersecurity and have mentored 40+ students in CTF training",
    "I love meeting new people and building connections wherever I go"
];

function rotateQuickFacts() {
    const factsList = document.querySelector('.quick-facts');
    const listItems = factsList.querySelectorAll('li');
    
    setInterval(() => {
        // Random fact rotation
        const randomIndex = Math.floor(Math.random() * quickFacts.length);
        const randomItemIndex = Math.floor(Math.random() * listItems.length);
        listItems[randomItemIndex].textContent = quickFacts[randomIndex];
    }, 10000);
}

setTimeout(rotateQuickFacts, 3000);

document.addEventListener('DOMContentLoaded', function() {
    const storiesLink = document.querySelector('.stories-link');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (storiesLink && dropdownContent) {
        storiesLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownContent.classList.toggle('show');
            }
        });
    }
});