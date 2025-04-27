AOS.init();

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}

function changeColor(color) {
  document.documentElement.style.setProperty('--primary-color', color);
}