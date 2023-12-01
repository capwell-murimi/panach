const words = [
    'Onsite Simultaneous Interpretation',
    'Remote Simultaneous Interpretation',
    'Hybrid Interpretation',
    'Translation',
    'Voice Overs',
    'Transcription',
    'Subtitling'
];

const colors = [
    '#3498db', // Blue
    '#f39c12', // Orange+--+
    '#2ecc71', // Green
    '#f39c12', // Orange
    '#2ecc71', // green
    '#1abc9c'  // Teal
];

let currentWordIndex = 0;

function animateWords() {
    const wordAnimation = document.getElementById('wordAnimation');
    wordAnimation.innerHTML = words[currentWordIndex];
    wordAnimation.style.color = colors[currentWordIndex];

    currentWordIndex = (currentWordIndex + 1) % words.length;

    setTimeout(animateWords, 1000);
}

document.addEventListener('DOMContentLoaded', animateWords);





document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
  