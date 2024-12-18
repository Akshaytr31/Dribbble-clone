const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const navButton = document.querySelector('.nav-button');


// Toggle dropdown visibility
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});

navButton.addEventListener('click', () => {
  navButton.classList.toggle('active');
});