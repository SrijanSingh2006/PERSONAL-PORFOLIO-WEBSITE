document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆️ Top';
Object.assign(backToTopButton.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    display: 'none',
    padding: '12px 18px',
    fontSize: '16px',
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
});
document.body.appendChild(backToTopButton);
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
        setTimeout(() => {
            backToTopButton.style.display = 'none';
        }, 300);
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    backToTopButton.style.transform = 'scale(1.1)';
    setTimeout(() => backToTopButton.style.transform = 'scale(1)', 150);
});
