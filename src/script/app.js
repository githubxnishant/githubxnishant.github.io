document.getElementById('aboutBtn').onclick = function() {
    window.location.href = 'public/about.html';
};

// document.getElementById('mode-toggle').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
// });

const slider = document.querySelector('.slide-track');

slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
});
