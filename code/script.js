// Toggle Button for Dark and Light Mode
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Check if dark mode has been saved (localStorage)
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  toggleButton.textContent = 'Light Mode';
}

// Event listener for button
toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  // toggle button text
  if (body.classList.contains('light-mode')) {
    toggleButton.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    toggleButton.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});