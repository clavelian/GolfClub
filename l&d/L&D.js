function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode"); // Toggle dark mode class on the body

  // You can also directly change specific styles without using classes
  // const bodyStyles = getComputedStyle(body);
  // const isDarkMode = bodyStyles.backgroundColor === 'rgb(51, 51, 51)';
  // body.style.backgroundColor = isDarkMode ? '#f4f4f4' : '#333';
  // body.style.color = isDarkMode ? '#333' : '#f4f4f4';
}
