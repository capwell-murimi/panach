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
    const menuToggle = document.getElementById('check');
    const menu = document.querySelector('nav ul');
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    document.addEventListener('click', function (e) {
      // Close the menu if the click is outside of the menu and toggle button
      if (!menu.contains(e.target) && e.target !== menuToggle) {
        menuToggle.checked = false;
      }
    });
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for header height
        behavior: 'smooth'
      });
  
      // Close the menu after clicking a link
      menuToggle.checked = false;
    }
  });
  