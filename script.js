const words = ['Translation Services', 'Interpretation Services', 'Language Solutions'];
        let currentWordIndex = 0;

        function animateWords() {
            document.getElementById('wordAnimation').innerHTML = words[currentWordIndex];
            currentWordIndex = (currentWordIndex + 1) % words.length;

            setTimeout(animateWords, 1000); // Change word every 3 seconds (adjust as needed)
        }

        // Start the word animation when the page loads
        document.addEventListener('DOMContentLoaded', animateWords);