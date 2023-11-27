const words = [
    'Onsite Simultaneous Interpretation',
    'Remote Simultaneous Interpretation',
    'Hybrid Interpretation',
    'Translation',
    'Voice Overs',
    'Transcription'
];

const colors = [
    '#3498db', // Blue
    '#f39c12', // Orange
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


