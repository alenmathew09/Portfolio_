const cursor = document.querySelector('.cursor');
const cursorLabel = cursor.querySelector('span');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('.project[href], .contact-link').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorLabel.textContent = el.dataset.label || 'OPEN';
    cursor.classList.add('show');
  });
  el.addEventListener('mouseleave', () => cursor.classList.remove('show'));
});

document.getElementById('year').textContent = new Date().getFullYear();
