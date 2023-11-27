const words = ['Translation Services', 'Interpretation Services', 'Language Solutions'];
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