const words = [
    'Onsite Simultaneous Interpretation',
    'Remote Simultaneous Interpretation',
    'Hybrid Interpretation',
    'Translation',
    'Voice Overs',
    'Transcription'
  ];
  
        let currentWordIndex = 0;

        function animateWords() {
            const wordAnimation = document.getElementById('wordAnimation');
            wordAnimation.innerHTML = words[currentWordIndex];
            // Generate a random color in hex format
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            wordAnimation.style.color = randomColor;

            currentWordIndex = (currentWordIndex + 1) % words.length;

            setTimeout(animateWords, 1000);
        }

        document.addEventListener('DOMContentLoaded', animateWords);


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const interpretationSection = document.getElementById('interpretation');

    if (isInViewport(interpretationSection) && !interpretationSection.classList.contains('active')) {
        interpretationSection.classList.add('active');
    }
}

// Add scroll event listener
document.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScroll);
