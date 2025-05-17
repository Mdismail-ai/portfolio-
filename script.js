// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Form submission
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else throw new Error();
  } catch {
    alert('Error sending message. Please try again later.');
  }
});
